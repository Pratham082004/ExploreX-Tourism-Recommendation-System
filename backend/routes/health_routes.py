"""
Defines health check and home API route.
"""

from flask import Blueprint

from controller.health_controller import(
    home,
    is_healthy
)

""" Initialise the blueprint for the health module. """
health_bp = Blueprint("health", __name__)

health_bp.route("/", methods=["GET"])(home)
health_bp.route("/health", methods=["GET"])(is_healthy)
