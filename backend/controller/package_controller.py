from services.package_services import PackageService
from utils.responses import success_response, error_response


class Package_Controller:

    # Domestic Package Controller Methods

    @staticmethod
    def get_all_domestic_packages():
        packages = PackageService.get_all_domestic_packages()
        return success_response(
            message="Domestic packages fetched successfully",
            data=packages,
        )
    
    @staticmethod
    def get_domestic_package_by_id(package_id):
        package = PackageService.get_domestic_package_by_id(package_id)

        if not package:
            return error_response(
                message=f"Domestic package with ID {package_id} not found",
                status_code=404,
            )
        return success_response(
            message=f"Domestic package with ID {package_id} fetched successfully",
            data=package
        )
    
    @staticmethod
    def get_domestic_package_by_duration(duration):
        packages = PackageService.get_domestic_package_by_duration(duration)

        return success_response(
            message=f"Domestic packages with duration {duration} fetched successfully",
            data=packages,
        )
    

    # International Package Controller Methods

    @staticmethod
    def get_all_international_packages():
        packages = PackageService.get_all_international_packages()
        return success_response(
            message="International packages fetched successfully",
            data=packages,
        )
    
    @staticmethod
    def get_international_package_by_id(package_id):    
        package = PackageService.get_international_package_by_id(package_id)

        if not package:
            return error_response(
                message=f"International package with ID {package_id} not found",
                status_code=404,
            )
        return success_response(
            message=f"International package with ID {package_id} fetched successfully",
            data=package
        )
    
    @staticmethod
    def get_international_package_by_duration(duration):        
        packages = PackageService.get_international_package_by_duration(duration)

        return success_response(
            message=f"International packages with duration {duration} fetched successfully",
            data=packages,
        )
    
    @staticmethod
    def get_international_package_by_country(country):        
        packages = PackageService.get_international_package_by_country(country)

        return success_response(
            message=f"International packages for country {country} fetched successfully",
            data=packages,
        )