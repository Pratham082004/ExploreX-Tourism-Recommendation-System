"""
Defines API routes for travel package operations.

This module registers routes for retreving domestic and 
international travel package information.
"""

from flask import Blueprint

from controller.package_controller import (
    Package_Controller,
)

package_bp = Blueprint(
    "packages",
    __name__,
    url_prefix="/packages"
)

""" Domestic Package Routes """
package_bp.route("/domestic", methods=["GET"])(Package_Controller.get_all_domestic_packages)
package_bp.route("/domestic/<int:package_id>", methods=["GET"])(Package_Controller.get_domestic_package_by_id)
package_bp.route("/domestic/duration/<int:duration>", methods=["GET"])(Package_Controller.get_domestic_package_by_duration)

""" International Package Routes """
package_bp.route("/international", methods=["GET"])(Package_Controller.get_all_international_packages)
package_bp.route("/international/<int:package_id>", methods=["GET"])(Package_Controller.get_international_package_by_id)
package_bp.route("/international/duration/<int:duration>", methods=["GET"])(Package_Controller.get_international_package_by_duration)
package_bp.route("/international/country/<string:country>", methods=["GET"])(Package_Controller.get_international_package_by_country)