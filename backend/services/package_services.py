"""
Service layer for package-related operations.

Exposes methods used by controllers to Retrieves domestic and international package
data from the repository layer and convert models to serializable dicts.
"""

from repositories.package_repository import PackageRepository


class PackageService:
    """Service layer for travel packages."""

    @staticmethod
    def get_all_domestic_packages():
        """Retrieves all domestic packages and return them as dicts."""
        packages = PackageRepository.get_all_domestic_packages()
        return [package.to_dict() for package in packages]

    @staticmethod
    def get_domestic_package_by_id(package_id):
        """ Retrieves a domestic package by its ID. """
        package = PackageRepository.get_domestic_package_by_id(package_id)
        return package.to_dict() if package else None

    @staticmethod
    def get_domestic_package_by_duration(duration):
        """Retrieves domestic packages filtered by duration. """
        packages = PackageRepository.get_domestic_package_by_duration(duration)
        return [package.to_dict() for package in packages]

    @staticmethod
    def get_all_international_packages():
        """Retrieves all international packages and return them as dicts."""
        packages = PackageRepository.get_all_international_packages()
        return [package.to_dict() for package in packages]

    @staticmethod
    def get_international_package_by_id(package_id):
        """Retrieves an international package by its ID."""
        package = PackageRepository.get_international_package_by_id(package_id)
        return package.to_dict() if package else None

    @staticmethod
    def get_international_package_by_duration(duration):
        """Retrieves international packages filtered by duration."""
        packages = PackageRepository.get_international_package_by_duration(duration)
        return [package.to_dict() for package in packages]

    @staticmethod
    def get_international_package_by_country(country):
        """Retrieves international packages filtered by country."""
        packages = PackageRepository.get_international_package_by_country(country)
        return [package.to_dict() for package in packages]

