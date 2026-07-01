"""
Repository layer for package data access.

Provides methods to query domestic and international package records using the
SQLAlchemy models.
"""

from database.connection import db
from database.models import Domestic_Package, International_Package


class PackageRepository:
    """Data access layer for travel packages."""
    @staticmethod
    def get_all_domestic_packages():
        """Retrieves all domestic packages."""
        return Domestic_Package.query.all()

    @staticmethod
    def get_domestic_package_by_id(package_id):
        """Retrieves a domestic packages by ID."""
        return Domestic_Package.query.filter_by(
            package_id=package_id
            ).first()

    @staticmethod
    def get_domestic_package_by_duration(duration):
        """Retrieves a domestic packages by their duration."""
        return Domestic_Package.query.filter_by(
            duration=duration
            ).all()
    

    @staticmethod
    def get_all_international_packages():
        """Retrieves all international package."""
        return International_Package.query.all()
    
    def get_international_package_by_id(package_id):
        """Retrieves an international package by its ID."""
        return International_Package.query.filter_by(
            package_id=package_id
            ).first()
    
    def get_international_package_by_duration(duration):
        """Retrieves an international packages filtered by duration."""
        return International_Package.query.filter_by(
            duration=duration
            ).all()
    
    def get_international_package_by_country(country):
        """Retrieves an international packages filtered by country."""
        return International_Package.query.filter_by(
            country=country
            ).all()



