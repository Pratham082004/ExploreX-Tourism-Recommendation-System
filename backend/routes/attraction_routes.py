"""
Defines the API routes for attraction operations.

This module registers the routes for fetching nearby
tourist attractions.
"""

from flask import Blueprint
from controller.attraction_controller import AttractionController

attraction_bp = Blueprint("attractions", __name__,url_prefix="/attractions")

attraction_bp.route("/", methods=["GET"], strict_slashes=False)(AttractionController.fetch_attractions)