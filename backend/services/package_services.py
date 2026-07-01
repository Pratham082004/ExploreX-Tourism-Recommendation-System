from repositories.package_repository import PackageRepository


class PackageService:

    # Service methods for Domestic Packages
    
    @staticmethod
    def get_all_domestic_packages():
        packages = PackageRepository.get_all_domestic_packages()
        return [package.to_dict() for package in packages]
    
    @staticmethod
    def get_domestic_package_by_id(package_id):
        package = PackageRepository.get_domestic_package_by_id(package_id)

        if package:
            return package.to_dict()
        
        return None
    
    @staticmethod
    def get_domestic_package_by_duration(duration):
        packages = PackageRepository.get_domestic_package_by_duration(duration)
        return [package.to_dict() for package in packages]
    

    # Service methods for International Packages

    @staticmethod
    def get_all_international_packages():
        packages = PackageRepository.get_all_international_packages()
        return [package.to_dict() for package in packages]
    
    @staticmethod
    def get_international_package_by_id(package_id):
        package = PackageRepository.get_international_package_by_id(package_id)

        if package:
            return package.to_dict()
        
        return None
    
    @staticmethod
    def get_international_package_by_duration(duration):
        packages = PackageRepository.get_international_package_by_duration(duration)
        return [package.to_dict() for package in packages]
    
    @staticmethod
    def get_international_package_by_country(country):
        packages = PackageRepository.get_international_package_by_country(country)
        return [package.to_dict() for package in packages]