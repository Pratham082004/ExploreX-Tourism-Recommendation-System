import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaHourglassHalf, FaHotel, FaArrowRight } from "react-icons/fa";
import "./PackageCard.css";

/**
 * Summary card for a travel package.
 * Displays destination, price, duration, and hotel category.
 * Links to the full package details page.
 */
function PackageCard({ packageData }) {
    const isDomestic = packageData.package_id.startsWith("IND");

    return (
        <div className="package-card">
            <div className="package-card-gradient"></div>
            
            <div className="package-card-content">
                <div className="package-card-header">
                    <span className="package-card-badge">
                        {isDomestic ? "Domestic" : "International"}
                    </span>
                    <span className="package-card-price">
                        ₹{packageData.estimated_cost}
                    </span>
                </div>

                <h2 className="package-card-title">
                    {packageData.package_name}
                </h2>
                
                <p className="package-card-dest">
                    <FaMapMarkerAlt className="package-card-dest-icon" />
                    {packageData.destination}
                </p>

                <div className="package-card-meta">
                    <div className="package-card-meta-item">
                        <FaHourglassHalf className="package-card-meta-icon" />
                        {packageData.duration}
                    </div>
                    <div className="package-card-meta-item">
                        <FaHotel className="package-card-meta-icon" />
                        <span>{packageData.hotel_category}</span>
                    </div>
                </div>

                <Link 
                    to={`/package/${isDomestic ? "domestic" : "international"}/${packageData.package_id}`}
                    className="package-card-btn"
                >
                    View Details
                    <FaArrowRight className="package-card-btn-icon" />
                </Link>
            </div>
        </div>
    );
}

export default PackageCard;