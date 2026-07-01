""" 
Health Controller and Health Check Endpoints 
"""

from utils.responses import success_response

"""
Function to check the health of the API 
"""
def is_healthy():
    try:
        return success_response("API is healthy")
    except Exception as e:
        return success_response(f"API health check failed: {str(e)}")
    
"""
Function for initial working of the application.
"""
def home():
    try:
        return success_response("Welcome to the Tourism Recommendation System")
    except Exception as e:
        return success_response(f"Error occurred: {str(e)}")




