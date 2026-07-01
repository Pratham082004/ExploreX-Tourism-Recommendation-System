"""
Controller layer for handling package-related requests and returning API responses.

Provides endpoints for fetching domestic and international travel packages via
corresponding service methods.
"""

from services.package_services import PackageService
from utils.responses import success_response, error_response


class Package_Controller:
    """Controller for travel package operations."""

    @staticmethod
    def get_all_domestic_packages():
        """Retrieve all domestic travel packages."""
        packages = PackageService.get_all_domestic_packages()
        return success_response(
            message="Domestic packages fetched successfully",
            data=packages,
        )

    @staticmethod
    def get_domestic_package_by_id(package_id):
        """Retrieve a domestic package by its ID."""
        package = PackageService.get_domestic_package_by_id(package_id)

        if not package:
            return error_response(
                message=f"Domestic package with ID {package_id} not found",
                status_code=404,
            )
        return success_response(
            message=f"Domestic package with ID {package_id} fetched successfully",
            data=package,
        )

    @staticmethod
    def get_domestic_package_by_duration(duration):
        """Retrieve domestic packages filtered by duration."""
        packages = PackageService.get_domestic_package_by_duration(duration)
        return success_response(
            message=f"Domestic packages with duration {duration} fetched successfully",
            data=packages,
        )

    @staticmethod
    def get_all_international_packages():
        """Retrieve all international travel packages."""
        packages = PackageService.get_all_international_packages()
        return success_response(
            message="International packages fetched successfully",
            data=packages,
        )

    @staticmethod
    def get_international_package_by_id(package_id):
        """Retrieve an international package by its ID."""
        package = PackageService.get_international_package_by_id(package_id)

        if not package:
            return error_response(
                message=f"International package with ID {package_id} not found",
                status_code=404,
            )
        return success_response(
            message=f"International package with ID {package_id} fetched successfully",
            data=package,
        )

    @staticmethod
    def get_international_package_by_duration(duration):
        """Retrieve international packages filtered by duration."""
        packages = PackageService.get_international_package_by_duration(duration)
        return success_response(
            message=f"International packages with duration {duration} fetched successfully",
            data=packages,
        )

    @staticmethod
    def get_international_package_by_country(country):
        """Retrieve international packages filtered by country."""
        packages = PackageService.get_international_package_by_country(country)
        return success_response(
            message=f"International packages for country {country} fetched successfully",
            data=packages,
        )

