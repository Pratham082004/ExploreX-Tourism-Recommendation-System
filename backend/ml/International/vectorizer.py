import os
from pathlib import Path

import joblib
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer

class Vectorizer:
    """ Creates TF-IDF vectors and saves the international recommendation model. """

    def __init__(self, input_file):
        self.input_file = input_file
        self.df = None
        self.vectorizer = None
        self.package_vectors = None

    def load_dataset(self):
        """ Loads the training dataset. """
        self.df = pd.read_csv(self.input_file)
        print(f"Successfully loaded dataset from {self.input_file}")

    def vectorize(self):
        """ Creates TF-IDF vectors from user package profiles."""

        self.vectorizer = TfidfVectorizer(
            stop_words="english",
            ngram_range=(1, 2),
            min_df=1,
        )

        self.package_vectors = self.vectorizer.fit_transform(self.df["package_profile"])

    def save_model(self):
        """ Saves the trained vectorizer and package information. """

        model_data = {
            "vectorizer": self.vectorizer,
            "package_vectors": self.package_vectors,
            "packages": self.df[
                [
                    "package_id",
                    "package_name",
                    "country",
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

        model_path = model_dir / "international_model.pkl"

        joblib.dump(model_data, model_path)

        print("International model saved successfully.")

    def process(self):
        """ Runs the complete vectorization pipeline. """

        self.load_dataset()
        self.vectorize()
        self.save_model()


if __name__ == "__main__":
    base_dir = Path(__file__).resolve().parent
    processed_dir = base_dir / "data"

    vectorizer = Vectorizer(str(processed_dir / "international_training.csv"))

    vectorizer.process()