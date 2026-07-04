import { Link } from "react-router-dom";
import "./PackageCard.css";

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
                    <svg className="package-card-dest-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    {packageData.destination}
                </p>

                <div className="package-card-meta">
                    <div className="package-card-meta-item">
                        <svg className="package-card-meta-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        {packageData.duration}
                    </div>
                    <div className="package-card-meta-item">
                        <svg className="package-card-meta-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                        <span className="truncate">{packageData.hotel_category}</span>
                    </div>
                </div>

                <Link 
                    to={`/package/${isDomestic ? "domestic" : "international"}/${packageData.package_id}`}
                    className="package-card-btn"
                >
                    View Details
                    <svg className="package-card-btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                </Link>
            </div>
        </div>
    );
}

export default PackageCard;