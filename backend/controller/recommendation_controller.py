"""
Controller layer for recommendation 

It acts as the interface layer between incoming HTTP client 
and recommendation engine.
"""

from flask import request
from services.recommendation_service import recommendation_service
from utils.responses import success_response, error_response
from utils.logger import logger


class Recommendation_Controller:
    """ Class for handling recommendation-related HTTP requests. """
    @staticmethod
    def recommend_packages():
        """
        Processes HTTP requests to generate customised packages recommendations

        This functions helps with the user perferences from the json
        and generates the recommendations.
        """
        try:
            data = request.get_json()
            user_preferences = data.get("user_preferences")
            logger.debug("recommend_packages called user_preferences present=%s", bool(user_preferences))
            if not user_preferences:

                return error_response(
                    message="User preferences are required for recommendations",
                    status_code=400,
                )
            
            recommended_packages = recommendation_service.recommend(user_preferences)
            logger.info("recommend_packages result size=%s", len(recommended_packages) if recommended_packages else 0)
            return success_response(

                message="Recommended packages fetched successfully",
                data=recommended_packages,
            )
        except Exception as e:
            logger.exception("recommend_packages failed")
            return error_response(
                message=f"An error occurred while fetching recommendations: {str(e)}",
                status_code=500,
            )
