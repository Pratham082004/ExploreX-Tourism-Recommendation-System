from flask import request
from services.opentripmap_service import Opentripmap_service
from utils.responses import success_response, error_response

class attraction_controller:

    @staticmethod
    def fetch_attractions():

        try:
            city = request.args.get("city")

            if not city:
                return error_response("city is required.", 400)
            
            location = Opentripmap_service.fetch_cordinates(city)

            attractions = Opentripmap_service.fetch_nearby_attaractions(
                location["lat"],
                location["lon"]
            )

            return success_response("Attractions fetched sucessfully.", attractions)

        except Exception as e:
            return error_response(str(e), 500)
        

        

        