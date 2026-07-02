from flask import Blueprint
from controller.attraction_controller import attraction_controller

attraction_bp = Blueprint(
    "attractions",
    __name__,
    url_prefix="/attractions"
)

attraction_bp.route("/", methods=["GET"])(attraction_controller.fetch_attractions)
