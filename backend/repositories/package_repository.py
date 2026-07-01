from database.connection import db
from database.models import Domestic_Package, International_Package
class PackageRepository:

    # Repository methods for Domestic Packages
    @staticmethod
    def get_all_domestic_packages():
        return Domestic_Package.query.all()

    @staticmethod
    def get_domestic_package_by_id(package_id):
        return Domestic_Package.query.filter_by(
            package_id=package_id
            ).first()

    @staticmethod
    def get_domestic_package_by_duration(duration):
        return Domestic_Package.query.filter_by(
            duration=duration
            ).all()
    

    # Repository methods for International Packages
    @staticmethod
    def get_all_international_packages():
        return International_Package.query.all()
    
    def get_international_package_by_id(package_id):
        return International_Package.query.filter_by(
            package_id=package_id
            ).first()
    
    def get_international_package_by_duration(duration):
        return International_Package.query.filter_by(
            duration=duration
            ).all()
    
    def get_international_package_by_country(country):
        return International_Package.query.filter_by(
            country=country
            ).all()



