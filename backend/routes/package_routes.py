"""
Defines API routes for travel package operations.

This module registers routes for retreving domestic and 
international travel package information.
"""

from flask import Blueprint

from controller.package_controller import (
    Package_Controller,
)

""" Initialise the blueprint for the package module. """
package_bp = Blueprint(
    "packages",
    __name__,
    url_prefix="/packages"
)

""" Domestic Package Routes """
package_bp.route("/domestic", methods=["GET"])(Package_Controller.get_all_domestic_packages)
package_bp.route("/domestic/<string:package_id>", methods=["GET"])(Package_Controller.get_domestic_package_by_id)

""" International Package Routes """
package_bp.route("/international", methods=["GET"])(Package_Controller.get_all_international_packages)
package_bp.route("/international/<string:package_id>", methods=["GET"])(Package_Controller.get_international_package_by_id)
