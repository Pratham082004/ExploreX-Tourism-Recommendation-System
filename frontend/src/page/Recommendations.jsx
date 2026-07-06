import { useLocation } from "react-router-dom";
import PackageCard from "../components/PackageCard/PackageCard";
import { FaSearch } from "react-icons/fa";
import "../styles/Recommendations.css";

/**
 * Displays the list of recommended travel packages.
 * Reads recommendations from the router state and renders a grid of PackageCards.
 */
function Recommendations() {

    const location = useLocation();
    const recommendationPackages = location.state?.recommendations || [];
    
    return (
        <div className="recommendations-container">
            <div className="recommendations-header">
                <p className="recommendations-subtitle">
                    <span className="recommendations-subtitle-line"></span>
                    Your Results
                    <span className="recommendations-subtitle-line"></span>
                </p>
                <h1 className="recommendations-title">
                    Recommended <span className="recommendations-title-highlight">Packages</span>
                </h1>
                <p className="recommendations-desc">
                    Based on your preferences, here are the top matching destinations for your next adventure.
                </p>
            </div>
            
            <div className="recommendations-grid">
            {
                recommendationPackages.length === 0 ? (
                    <div className="recommendations-empty">
                        <FaSearch className="recommendations-empty-icon" />
                        <p className="recommendations-empty-title">No recommendations found.</p>
                        <p className="recommendations-empty-desc">Try adjusting your budget or destination preferences.</p>
                    </div>
                ) : (
                    recommendationPackages.map((pkg) => (
                        <PackageCard
                            key={pkg.package_id}
                            packageData={pkg}
                        />
                    ))
                )
            }
            </div>
        </div>
    );

}

export default Recommendations;