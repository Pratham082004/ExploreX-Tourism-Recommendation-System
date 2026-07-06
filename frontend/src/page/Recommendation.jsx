import RecommendationForm from "../components/RecommendationForm/RecommendationForm";
import "../styles/Recommendation.css";

/**
 * The main trip planning page.
 * Shows the preference form to generate trip recommendations.
 */
function Recommendation(){
    return (
        <div className="recommendation-container">
            <div className="recommendation-header">
                <p className="recommendation-subtitle">
                    <span className="recommendation-subtitle-line"></span>
                    Trip Recommender
                    <span className="recommendation-subtitle-line"></span>
                </p>
                <h1 className="recommendation-title">
                    Plan Your <span className="recommendation-title-highlight">Next Trip</span>
                </h1>
                <p className="recommendation-desc">
                    Tell us about your ideal trip, and we'll suggest some great packages.
                </p>
            </div>

            <RecommendationForm />
        </div>
    );
}

export default Recommendation;