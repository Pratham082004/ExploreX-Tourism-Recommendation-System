"""
Application entry point for the Tourism Recommendation System.

Configures the Flask Application, initializes extensions,
registers blueprints of API's and starts the development server.
"""
from flask import Flask, jsonify
from flask_cors import CORS

from config import Config
from database.connection import db
from utils.responses import success_response
from utils.logger import logger


from routes.health_routes import health_bp
from routes.package_routes import package_bp
from routes.recommendation_routes import recommendation_bp
from routes.attraction_routes import attraction_bp

def create_app():
    """
    Create the Flask application.
    """
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app)

    db.init_app(app)
    
    app.register_blueprint(health_bp)
    app.register_blueprint(package_bp)
    app.register_blueprint(recommendation_bp)
    app.register_blueprint(attraction_bp)

    return app

app = create_app()

if __name__ == "__main__":

    with app.app_context():
        try:
            db.engine.connect()
            logger.info("Database connection successful.")

        except Exception as e:
            logger.error(f"Database connection failed: {e}", exc_info=True)

    app.run(
        host=Config.HOST,
        port=Config.PORT,
        debug=True,
        use_reloader=False,
    )


    