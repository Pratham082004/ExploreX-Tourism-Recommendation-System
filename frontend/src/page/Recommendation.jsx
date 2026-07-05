import RecommendationForm from "../components/RecommendationForm/RecommendationForm";
import "../styles/Recommendation.css";

/**
 * The trip planning page.
 * Displays the form where users enter their preferences to get AI-powered recommendations.
 */
function Recommendation(){
    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <p className="text-pink-500 font-bold text-sm tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
                    <span className="w-6 h-[1px] bg-pink-500"></span>
                    AI Trip Recommender
                    <span className="w-6 h-[1px] bg-pink-500"></span>
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                    Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">Perfect Trip</span>
                </h1>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    Fill in your travel preferences to receive personalized travel
                    package recommendations tailored to your unique style.
                </p>
            </div>

            <RecommendationForm />
        </div>
    );
}

export default Recommendation;