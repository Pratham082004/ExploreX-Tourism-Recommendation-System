import os
from pathlib import Path

import joblib
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer


class Vectorizer:
    """Vectorize domestic package profiles and save training artifacts."""

    def __init__(self, input_file):
        """Initialize the vectorizer."""
        self.input_file = input_file
        self.df = None
        self.vectorizer = None
        self.package_vectors = None

    def load_dataset(self):
        """Load the training dataset."""
        self.df = pd.read_csv(self.input_file)
        print(f"Successfully loaded dataset from {self.input_file}")

    def vectorize(self):
        """Fit TF-IDF on package profiles and compute package vectors."""

        self.vectorizer = TfidfVectorizer(
            stop_words="english",
            ngram_range=(1, 2),
            min_df=1,
        )

        self.package_vectors = self.vectorizer.fit_transform(
            self.df["package_profile"]
        )

    def save_model(self):
        """Persist the trained vectorizer + package vectors to `models/`."""

        model_data = {
            "vectorizer": self.vectorizer,
            "package_vectors": self.package_vectors,
            "packages": self.df[
                [
                    "package_id",
                    "package_name",
                    "destination",
                    "duration",
                    "estimated_cost",
                    "hotel_category",
                    "meals",
                    "transportation",
                    "activities",
                    "package_type",
                    "best_for",
                    "rating",
                ]
            ].copy(),
        }

        base_dir = Path(__file__).resolve().parent
        model_dir = base_dir / "models"

        os.makedirs(model_dir, exist_ok=True)

        model_path = model_dir / "domestic_model.pkl"

        joblib.dump(model_data, model_path)

        print("Domestic model saved successfully.")

    def process(self):
        """Run the complete vectorization pipeline."""

        self.load_dataset()
        self.vectorize()
        self.save_model()


if __name__ == "__main__":
    base_dir = Path(__file__).resolve().parent
    processed_dir = base_dir / "data"

    vectorizer = Vectorizer(
        str(processed_dir / "domestic_training.csv")
    )

    vectorizer.process()