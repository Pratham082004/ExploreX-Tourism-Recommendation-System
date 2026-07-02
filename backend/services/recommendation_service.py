"""
Service layer for orchestracting recommendataion.

It acts as the core logic layer which evaluetes user input parameters
and routes data to the appropriate specialised ml inference engine(Domestic or International).
"""

from ml.domestic.recommend import Domestic_Recommendation_Engine
from ml.International.recommend import International_Recommendation_Engine

class recommendation_service:
    """
    Recommendation service class used for managing and routing recommendation services.
    """
    domestic_engine = Domestic_Recommendation_Engine("ml/domestic/models/domestic_model.pkl")  # domestic model path
    international_engine = International_Recommendation_Engine("ml/International/models/international_model.pkl")  # international model path

    @staticmethod
    def recommend(user):
        """ Function used to generate package recommendation by routing the request to the correct ml engine. """
        destination_type = user.get("destination_type").lower()

        if destination_type == "domestic":
            return recommendation_service.domestic_engine.recommend(user, top_k = 5)
        elif destination_type == "international":
            return recommendation_service.international_engine.recommend(user, top_k = 5)
        else:
            print("Invalid destination type.")

            