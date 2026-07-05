"""
Imports tourism package datasets into the database.

This module is executed during application startup by the
Database_Initializer service. Data is imported only if the
corresponding tables are empty.
"""

import os

import pandas as pd

from database.connection import db
from database.models import Domestic_Package, International_Package

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

DOMESTIC_CSV = os.path.join(
    SCRIPT_DIR, "..", "import_data", "Domestic-Indian-Packages.csv")

INTERNATIONAL_CSV = os.path.join(
    SCRIPT_DIR, "..", "import_data", "International Package.csv")


def clean_columns(df):
    """Normalize dataframe column names."""

    df.columns = (
        df.columns
        .str.strip()
        .str.lower()
        .str.replace(" ", "_")
        .str.replace("(", "", regex=False)
        .str.replace(")", "", regex=False)
        .str.replace("₹", "", regex=False)
        .str.replace("/", "_")
    )

    return df


def import_domestic():
    """Imports domestic packages."""

    df = pd.read_csv(
        DOMESTIC_CSV,
        encoding="ISO-8859-1",
        dtype={"package_id": str}
    )

    df = clean_columns(df)

    packages = [
        Domestic_Package(
            package_id=row.package_id,
            package_name=row.package_name,
            country=row.country,
            cities_covered=row.cities_covered,
            duration=row.duration,
            hotel_category=row.hotel_category,
            meals=row.meals,
            transportation=row.transportation,
            major_attractions=row.major_attractions,
            activities=row.activities,
            package_type=row.package_type,
            best_for=row.best_for,
            rating=row.rating,
            estimated_cost=row.estimated_cost
        )
        for row in df.itertuples(index=False)
    ]

    db.session.bulk_save_objects(packages)
    db.session.commit()

    return len(packages)


def import_international():
    """Imports international packages."""

    df = pd.read_csv(
        INTERNATIONAL_CSV,
        encoding="ISO-8859-1",
        dtype={"package_id": str}
    )

    df = clean_columns(df)

    packages = [
        International_Package(
            package_id=row.package_id,
            package_name=row.package_name,
            country=row.country,
            cities_covered=row.cities_covered,
            duration=row.duration,
            hotel_category=row.hotel_category,
            meals=row.meals,
            transportation=row.transportation,
            major_attractions=row.major_attractions,
            activities=row.activities,
            package_type=row.package_type,
            best_for=row.best_for,
            rating=row.rating,
            estimated_cost=row.estimated_cost
        )
        for row in df.itertuples(index=False)
    ]

    db.session.bulk_save_objects(packages)
    db.session.commit()

    return len(packages)