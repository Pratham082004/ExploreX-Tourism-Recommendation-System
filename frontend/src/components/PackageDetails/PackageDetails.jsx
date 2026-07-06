import { FaStar, FaUserFriends, FaHotel, FaMountain, FaMapMarkerAlt } from "react-icons/fa";
import "./PackageDetails.css";

/**
 * Shows full details of a travel package.
 * Includes destination stats, attractions, and nearby places.
 */
function PackageDetails({ packageData, attractions }) {

    if (!packageData) {
        return <div className="package-details-empty">Package not found.</div>;
    }



    const majorAttractions = Array.isArray(packageData.major_attractions)
        ? packageData.major_attractions
        : packageData.major_attractions
            ? packageData.major_attractions.split(",").map(item => item.trim())
            : [];

    return (
        <div className="package-details-container">
            <div className="package-details-gradient"></div>
            
            <h1 className="package-details-title">{packageData.package_name}</h1>

            <div className="package-details-stats-grid">
                <div className="package-details-stat-card">
                    <span className="package-details-stat-label">Destination</span>
                    <span className="package-details-stat-value-blue">{packageData.country}</span>
                </div>
                <div className="package-details-stat-card">
                    <span className="package-details-stat-label">Duration</span>
                    <span className="package-details-stat-value">{packageData.duration}</span>
                </div>
                <div className="package-details-stat-card">
                    <span className="package-details-stat-label">Cost</span>
                    <span className="package-details-stat-value-pink">₹{packageData.estimated_cost}</span>
                </div>
                <div className="package-details-stat-card">
                    <span className="package-details-stat-label">Rating</span>
                    <span className="package-details-stat-rating"> <FaStar /> {packageData.rating}
                    </span>
                </div>
            </div>

            <div className="package-details-info-grid">
                <div className="package-details-info-col">
                    <h3 className="package-details-info-title">
                        <FaUserFriends /> Best For
                    </h3>
                    <p className="package-details-info-badge">{packageData.best_for}</p>
                </div>
                <div className="package-details-info-col">
                    <h3 className="package-details-info-title"><FaHotel /> Hotel Category</h3>
                    <p className="package-details-info-badge">{packageData.hotel_category}</p>
                </div>
            </div>

            <div className="package-details-section">
                <h3 className="package-details-section-title"><FaMountain /> Major Attractions</h3>
                <ul className="package-details-list-grid-2">
                    {majorAttractions.length > 0 ? (
                        majorAttractions.map((attraction, index) => (
                            <li key={index} className="package-details-attraction-item">
                                <div className="package-details-attraction-dot"></div>
                                {attraction}
                            </li>
                        ))
                    ) : (
                        <li className="package-details-empty-text">No attractions available.</li>
                    )}
                </ul>
            </div>

            <div className="package-details-section">
                <h3 className="package-details-section-title"><FaMapMarkerAlt /> Nearby Attractions</h3>
                <ul className="package-details-nearby-grid">
                    {attractions && attractions.length > 0 ? (
                        attractions.map((place) => (
                            <li key={place.xid} className="package-details-nearby-card">
                                <strong className="package-details-nearby-title" title={place.name}>{place.name}</strong>
                                <span className="package-details-nearby-badge">
                                    {(place.distance_m / 1000).toFixed(1)} km away
                                </span>
                            </li>
                        ))
                    ) : (
                        <li className="package-details-empty-text">No nearby attractions found.</li>
                    )}
                </ul>
            </div>

        </div>
    );
}

export default PackageDetails;