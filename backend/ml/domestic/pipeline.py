from pathlib import Path

from ml.domestic.preprocess import Domestic_Preprocessor
from ml.domestic.feature_engineering import FeatureEngineer
from ml.domestic.vectorizer import Vectorizer


class Domestic_recommendation_pipeline:
    """ Pipeline for training the domestic recommendation model.

    The pipeline runs three stages:
    1) Data preprocessing 
    2) Feature engineering 
    3) Vectorization + model artifact generation
    """


    def __init__(self):
        """Configure filesystem paths used by the pipeline."""
        base_dir = Path(__file__).resolve().parent
        dataset_dir = base_dir / "dataset"
        self.raw_dataset = str(dataset_dir / "Domestic-Indian-Packages.csv")

        processed_dir = base_dir / "data"
        self.cleaned_dataset = str(processed_dir / "domestic_cleaned.csv")
        self.training_dataset = str(processed_dir / "domestic_training.csv")


    def run(self):
        """Execute preprocessing, feature engineering, and vectorization."""

        print("=" * 60)
        print("Step 1 : Data Preprocessing")
        print("=" * 60)

        Domestic_Preprocessor(
            self.raw_dataset,
            self.cleaned_dataset
        ).process()

        print()

        print("=" * 60)
        print("Step 2 : Feature Engineering")
        print("=" * 60)

        FeatureEngineer(
            self.cleaned_dataset,
            self.training_dataset
        ).process()

        print()

        print("=" * 60)
        print("Step 3 : Building Recommendation Model")
        print("=" * 60)

        Vectorizer(self.training_dataset).process()

        print()

        print("=" * 60)
        print("Domestic Model Generated Successfully")
        print("=" * 60)


if __name__ == "__main__":
    Domestic_recommendation_pipeline().run()
