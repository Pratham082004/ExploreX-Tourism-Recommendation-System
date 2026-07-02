"""
Defines API routes for recommendation engine 

It defines the FLask blueprint for all recommendation-related API endpoints.
"""

from flask import Blueprint
from controller.recommendation_controller import Recommendation_Controller

""" Initialise the blueprint for the recommendation module. """
recommendation_bp = Blueprint(
    "recommendations",
    __name__,
    url_prefix="/recommendations"
)

recommendation_bp.route("/recommend", methods=["POST"])(Recommendation_Controller.recommend_packages)

