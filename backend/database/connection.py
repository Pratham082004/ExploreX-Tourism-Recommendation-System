from flask_sqlalchemy import SQLAlchemy
from utils.logger import logger

db = SQLAlchemy()

logger.debug("SQLAlchemy db initialized")

