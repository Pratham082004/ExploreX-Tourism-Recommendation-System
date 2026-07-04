"""
Controller layer for handling package-related requests and returning API responses.

Provides endpoints for fetching domestic and international travel packages via
corresponding service methods.
"""

from services.package_services import PackageService
from utils.responses import success_response, error_response
from utils.logger import logger



class Package_Controller:
    """Controller for travel package operations."""

    @staticmethod
    def get_all_domestic_packages():
        """Retrieve all domestic travel packages."""
        logger.debug("Fetching all domestic packages")
        packages = PackageService.get_all_domestic_packages()
        logger.info("Fetched domestic packages count=%s", len(packages) if packages is not None else 0)
        return success_response(
            message="Domestic packages fetched successfully",
            data=packages,
        )


    @staticmethod
    def get_domestic_package_by_id(package_id):
        """Retrieve a domestic package by its ID."""
        try:
            logger.debug("Fetching domestic package by id=%s", package_id)
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
        except Exception as e:
            logger.exception("Error fetching domestic package by id=%s", package_id)
            return error_response(str(e), 500)

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


