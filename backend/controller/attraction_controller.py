"""
Controrller for handling tourist attraction operations.

It coordinate between incoming request and OpenTripMap API
to look up for location data.
"""

from flask import request
from services.opentripmap_service import Opentripmap_service
from utils.responses import success_response, error_response
from utils.logger import logger


class attraction_controller:

    @staticmethod
    def fetch_attractions():
        """ Function to retrieve nearby attractions for a specific city. """

        try:
            city = request.args.get("city")
            logger.debug("fetch_attractions called city=%s", city)
            if not city:
                return error_response("city is required.", 400)
            
            location = Opentripmap_service.fetch_cordinates(city)


            attractions = Opentripmap_service.fetch_nearby_attaractions(
                location["lat"],
                location["lon"]
            )

            logger.info("Fetched attractions for city=%s", city)
            return success_response("Attractions fetched sucessfully.", attractions)

        except Exception as e:
            logger.exception("fetch_attractions failed")
            return error_response(str(e), 500)

        

        

        