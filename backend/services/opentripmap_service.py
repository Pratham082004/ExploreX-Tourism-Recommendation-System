import requests
from config import Config

class Opentripmap_service:

    BASE_URL = "https://api.opentripmap.com/0.1/en/places"

    @staticmethod
    def fetch_cordinates(city):
        url = f"{Opentripmap_service.BASE_URL}/geoname"
        params = {
            "name": city,
            "apikey": Config.OPENTRIP_API_KEY
        }

        response = requests.get(url, params=params)

        if response.status_code != 200:
            raise Exception("Unable to fetch city coordinates.")
        
        return response.json()
    
    @staticmethod
    def fetch_nearby_attaractions(lat,lon,radius=8000,limit=5):
        url = f"{Opentripmap_service.BASE_URL}/radius"
        params = {
            "radius": radius,
            "lon": lon,
            "lat": lat,
            "limit": limit,
            "format": "json",
            "apikey": Config.OPENTRIP_API_KEY
        }
        response = requests.get(url,params=params)

        if response.status_code != 200:
            raise Exception("Unable to fetch nearby attractions.")
        return response.json()

    @staticmethod
    def fetch_place_details(xid):
        url = f"{Opentripmap_service.BASE_URL}/xid/{xid}"
        params = {"apikey": Config.OPENTRIP_API_KEY}

        response = requests.get(url, params=params)

        if response.status_code != 200:
            raise Exception("Unable to fetch place details.")

        return response.json()
