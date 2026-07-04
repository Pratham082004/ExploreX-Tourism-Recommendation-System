import os
import re
import pandas as pd


class Domestic_Preprocessor:
    """Clean and normalize the domestic tourism dataset.

    This preprocessing step is designed to make the dataset consistent for
    downstream feature engineering + TF-IDF vectorization.
    """

    def __init__(self, input_file_path, output_file_path):
        """Initialize the preprocessor."""
        self.input_file_path = input_file_path
        self.output_file_path = output_file_path
        self.df = None

    def load_data(self):
        """Load the raw dataset from disk."""
        self.df = pd.read_csv(self.input_file_path, encoding="ISO-8859-1")
        print("Dataset successfully loaded.")
        return self.df

    def rename_columns(self):
        """Standardize dataset column names."""
        self.df.columns = (
            self.df.columns
            .str.strip()
            .str.lower()
            .str.replace(" ", "_")
            .str.replace("(", "", regex=False)
            .str.replace(")", "", regex=False)
            .str.replace("₹", "inr", regex=False)
            .str.replace("$", "usd", regex=False)
            .str.replace("/", "_")
        )

    @staticmethod
    def clean_text(text):
        """Clean a single text value."""
        if pd.isna(text) or text == "":
            return ""

        text = str(text).lower()
        text = re.sub(r"[^a-zA-Z0-9\s]", "", text)
        text = re.sub(r"\s+", " ", text)
        return text.strip()

    def clean_text_columns(self):
        """Clean all known text columns in the dataframe."""

        text_columns = [
            "package_name",
            "destination",
            "hotel_category",
            "meals",
            "transportation",
            "major_attractions",
            "activities",
            "package_type",
            "best_for",
        ]

        for column in text_columns:
            if column in self.df.columns:
                self.df[column] = self.df[column].apply(self.clean_text)

    def missing_values(self):
        """Handle missing values for categorical and numeric columns."""

        text_columns = [
            "destination",
            "hotel_category",
            "meals",
            "transportation",
            "major_attractions",
            "activities",
            "package_type",
            "best_for",
        ]

        for column in text_columns:
            if column in self.df.columns:
                self.df[column] = self.df[column].fillna("not_specified")

        if "rating" in self.df.columns:
            self.df["rating"] = self.df["rating"].fillna(0)

    def convert_datatypes(self):
        """Convert duration/cost/rating columns into numeric types."""

        if "duration" in self.df.columns:
            self.df["duration"] = (
                self.df["duration"]
                .astype(str)
                .str.extract(r"(\d+)", expand=False)
            )

            self.df["duration"] = pd.to_numeric(
                self.df["duration"],
                errors="coerce",
            )

        if "rating" in self.df.columns:
            self.df["rating"] = pd.to_numeric(
                self.df["rating"],
                errors="coerce",
            )

        if "estimated_cost" in self.df.columns:
            self.df["estimated_cost"] = (
                self.df["estimated_cost"]
                .astype(str)
                .str.replace(",", "", regex=False)
                .str.replace("₹", "", regex=False)
            )

            self.df["estimated_cost"] = pd.to_numeric(
                self.df["estimated_cost"],
                errors="coerce",
            )

    def remove_duplicates(self):
        """Remove duplicate rows based on `package_id` when present."""

        if "package_id" in self.df.columns:
            self.df.drop_duplicates(subset="package_id", inplace=True)

    def save_data(self):
        """Persist the cleaned dataframe to `output_file_path`."""

        os.makedirs(os.path.dirname(self.output_file_path), exist_ok=True)
        self.df.to_csv(self.output_file_path, index=False)
        print(f"Preprocessed dataset saved to {self.output_file_path}")

    def process(self):
        """Run the complete preprocessing pipeline."""

        self.load_data()
        self.rename_columns()
        self.missing_values()
        self.clean_text_columns()
        self.convert_datatypes()
        self.remove_duplicates()
        self.save_data()

        return self.df


if __name__ == "__main__":
    from pathlib import Path

    base_dir = Path(__file__).resolve().parent

    dataset_dir = base_dir / "dataset"
    processed_dir = base_dir / "data"

    input_file_path = str(dataset_dir / "Domestic-Indian-Packages.csv")
    output_file_path = str(processed_dir / "domestic_cleaned.csv")

    preprocessor = Domestic_Preprocessor(
        input_file_path=input_file_path,
        output_file_path=output_file_path,
    )

    preprocessor.process()