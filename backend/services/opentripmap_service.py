"""
Service layer for interacting with the OpenTripMap external API.

Handles geographic data including coordinates, radius-based attraction discovery,
and detailed point-of-interest information.
"""

import requests
from config import Config
from utils.logger import logger


class OpentripmapService:
    """Service class for OpenTripMap API communication."""

    BASE_URL = "https://api.opentripmap.com/0.1/en/places"

    CATEGORY_MAP = {
        "museums": "Museum",
        "churches": "Church",
        "other_temples": "Temple",
        "hindu_temples": "Temple",
        "mosques": "Mosque",
        "castles": "Castle",
        "palaces": "Palace",
        "fortifications": "Fort",
        "gardens_and_parks": "Park",
        "parks": "Park",
        "waterfalls": "Waterfall",
        "beaches": "Beach",
        "lakes": "Lake",
        "fountains": "Fountain",
        "monuments_and_memorials": "Monument",
        "sculptures": "Sculpture",
    }

    @staticmethod
    def _get_category(kinds):
        """Convert OpenTripMap kinds into a readable category."""
        if not kinds:
            return "Attraction"

        for key, value in OpentripmapService.CATEGORY_MAP.items():
            if key in kinds:
                return value

        return "Attraction"

    @staticmethod
    def fetch_coordinates(city):
        """Fetch geographic coordinates for a city."""

        url = f"{OpentripmapService.BASE_URL}/geoname"

        params = {"name": city, "apikey": Config.OPENTRIP_API_KEY}

        logger.debug("OpenTripMap: fetch_coordinates city=%s", city)

        response = requests.get(url, params=params, timeout=10)

        if response.status_code != 200:
            logger.error("OpenTripMap fetch_coordinates failed status=%s", response.status_code)
            raise Exception("Unable to fetch city coordinates.")

        return response.json()

    @staticmethod
    def fetch_nearby_attractions(lat, lon, radius=8000, limit=5):
        """Fetch nearby attractions and return cleaned data."""

        url = f"{OpentripmapService.BASE_URL}/radius"

        params = {
            "radius": radius,
            "lon": lon,
            "lat": lat,
            "limit": limit,
            "format": "json",
            "apikey": Config.OPENTRIP_API_KEY
        }

        logger.debug("OpenTripMap: fetch_nearby_attractions lat=%s lon=%s", lat, lon)

        response = requests.get(url, params=params, timeout=10)

        if response.status_code != 200:
            logger.error("OpenTripMap fetch_nearby_attractions failed status=%s", response.status_code)
            raise Exception("Unable to fetch nearby attractions.")

        attractions = []

        for place in response.json():

            if not place.get("name"):
                continue

            attractions.append({
                "name": place["name"],
                "category": OpentripmapService._get_category(
                    place.get("kinds", "")
                ),
                "distance_m": round(place.get("dist", 0)),
                "latitude": place["point"]["lat"],
                "longitude": place["point"]["lon"],
                "xid": place["xid"]
            })

        return attractions

    @staticmethod
    def fetch_place_details(xid):
        """Fetch detailed information for a place."""

        url = f"{OpentripmapService.BASE_URL}/xid/{xid}"

        params = {"apikey": Config.OPENTRIP_API_KEY,}

        logger.debug("OpenTripMap: fetch_place_details xid=%s", xid)

        response = requests.get(url, params=params, timeout=10)

        if response.status_code != 200:
            logger.error("OpenTripMap fetch_place_details failed status=%s",response.status_code)
            raise Exception("Unable to fetch place details.")

        data = response.json()

        return {
            "name": data.get("name"),
            "category": OpentripmapService._get_category(
                ",".join(data.get("kinds", []))
                if isinstance(data.get("kinds"), list)
                else data.get("kinds", "")
            ),
            "description": (
                data.get("wikipedia_extracts", {}).get("text")
                or data.get("info", {}).get("descr")
            ),
            "image": data.get("preview", {}).get("source"),
            "address": data.get("address", {}),
            "wikipedia": data.get("wikipedia"),
            "latitude": data.get("point", {}).get("lat"),
            "longitude": data.get("point", {}).get("lon")
        }