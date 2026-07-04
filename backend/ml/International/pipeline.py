from pathlib import Path

from ml.International.preprocess import International_Preprocessor
from ml.International.feature_engineering import FeatureEngineer
from ml.International.vectorizer import Vectorizer

class International_recommendation_pipeline:

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
        self.raw_dataset = str(dataset_dir / "International Package.csv")

        processed_dir = base_dir / "data"
        self.cleaned_dataset = str(processed_dir / "international_cleaned.csv")
        self.training_dataset = str(processed_dir / "international_training.csv")


    def run(self):
        """Execute preprocessing, feature engineering, and vectorization."""
        
        print("=" * 60)
        print("Step 1 : Data Preprocessing")
        print("=" * 60)

        International_Preprocessor(
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
    International_recommendation_pipeline().run()