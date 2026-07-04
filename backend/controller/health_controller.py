""" 
Health Controller and Health Check Endpoints 
"""

from utils.responses import success_response, error_response
from utils.logger import logger



"""
Function to check the health of the API 
"""
def is_healthy():
    try:
        logger.debug("Health check: is_healthy called")
        return success_response("API is healthy")
    except Exception as e:
        logger.exception("Health check failed")
        return error_response(f"API health check failed: {str(e)}")

    
"""
Function for initial working of the application.
"""
def home():
    try:
        logger.debug("Health/home endpoint called")
        return success_response("Welcome to the Tourism Recommendation System")
    except Exception as e:
        logger.exception("Home endpoint error")
        return error_response(f"Error occurred: {str(e)}")






