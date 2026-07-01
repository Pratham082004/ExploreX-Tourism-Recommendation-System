from flask import Flask, jsonify
from flask_cors import CORS

from config import Config
from database.connection import db

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)

db.init_app(app)


if __name__ == "__main__":
    with app.app_context():
        try:
            db.engine.connect()
            print("Database connection successful.")
        except Exception as e:
            print(f"Database connection failed: {e}")

    app.run(
        host=Config.HOST,
        port=Config.PORT,
        debug=True,  
    )