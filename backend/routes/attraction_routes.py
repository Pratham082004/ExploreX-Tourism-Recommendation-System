"""
Defines the API routes for attraction operations.

This module registers route for fetching the nearby
attractions.
"""

from flask import Blueprint
from controller.attraction_controller import attraction_controller

""" Initialise the blueprint for the attraction module. """
attraction_bp = Blueprint(
    "attractions",
    __name__,
    url_prefix="/attractions"
)

attraction_bp.route("/", methods=["GET"])(attraction_controller.fetch_attractions)
