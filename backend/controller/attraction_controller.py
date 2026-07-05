"""
Controller for handling tourist attraction operations.

Coordinates incoming requests with the OpenTripMap service
to retrieve nearby tourist attractions.
"""

from flask import request

from services.opentripmap_service import OpentripmapService
from utils.logger import logger
from utils.responses import error_response, success_response


class AttractionController:
    """Controller for attraction-related endpoints."""

    @staticmethod
    def fetch_attractions():
        """Retrieve nearby attractions for a given city."""

        try:
            city = request.args.get("city")

            logger.debug("fetch_attractions called city=%s", city)

            if not city:
                return error_response("City is required.", 400)

            location = OpentripmapService.fetch_coordinates(city)

            attractions = OpentripmapService.fetch_nearby_attractions(
                location["lat"],
                location["lon"]
            )

            logger.info("Fetched %d attractions for city=%s", len(attractions), city)

            return success_response("Attractions fetched successfully.",attractions)

        except Exception as e:
            logger.exception("fetch_attractions failed")
            return error_response(str(e), 500)