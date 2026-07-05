"""
Database initialization service.

Ensures the tourism package tables are populated when the
application starts. Data is imported only if the tables
are empty.
"""

from database.connection import db
from database.models import Domestic_Package, International_Package

from import_data.import_packages import (
    import_domestic,
    import_international,
)

from utils.logger import logger


class Database_Initializer:
    """Service responsible for seeding the database."""

    @staticmethod
    def initialize():
        """Import package data if the tables are empty."""

        logger.info("=" * 60)
        logger.info("Database initialization started.")
        logger.info("=" * 60)

        try:

            domestic_count = Domestic_Package.query.count()

            if domestic_count == 0:
                logger.info(
                    "Domestic package table is empty. Importing data..."
                )

                imported = import_domestic()

                logger.info(
                    "Imported %d domestic packages.",
                    imported
                )

            else:
                logger.info(
                    "Domestic package table already contains %d records.",
                    domestic_count
                )

            international_count = International_Package.query.count()

            if international_count == 0:
                logger.info(
                    "International package table is empty. Importing data..."
                )

                imported = import_international()

                logger.info(
                    "Imported %d international packages.",
                    imported
                )

            else:
                logger.info(
                    "International package table already contains %d records.",
                    international_count
                )

            logger.info("=" * 60)
            logger.info("Database initialization completed successfully.")
            logger.info("=" * 60)

        except Exception as error:

            db.session.rollback()

            logger.exception(
                "Database initialization failed: %s",
                error,
            )

            raise