import "./PackageDetails.css";

function PackageDetails({ packageData, attractions }) {

    if (!packageData) {
        return <div className="package-details-empty">Package not found.</div>;
    }

    const activities = Array.isArray(packageData.activity)
        ? packageData.activity
        : packageData.activity
            ? packageData.activity.split(",").map(item => item.trim())
            : [];

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
                    <span className="package-details-stat-value">{packageData.duration} Days</span>
                </div>
                <div className="package-details-stat-card">
                    <span className="package-details-stat-label">Cost</span>
                    <span className="package-details-stat-value-pink">₹{packageData.estimated_cost}</span>
                </div>
                <div className="package-details-stat-card">
                    <span className="package-details-stat-label">Rating</span>
                    <span className="package-details-stat-rating">
                        <svg className="package-details-star-icon" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        {packageData.rating}
                    </span>
                </div>
            </div>

            <div className="package-details-info-grid">
                <div className="package-details-info-col">
                    <h3 className="package-details-info-title">
                        <svg className="package-details-info-icon-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        Best For
                    </h3>
                    <p className="package-details-info-badge">{packageData.best_for}</p>
                </div>
                <div className="package-details-info-col">
                    <h3 className="package-details-info-title">
                        <svg className="package-details-info-icon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                        Hotel Category
                    </h3>
                    <p className="package-details-info-badge">{packageData.hotel_category}</p>
                </div>
            </div>

            <div className="package-details-section">
                <h3 className="package-details-section-title">
                    <svg className="package-details-info-icon-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    Included Activities
                </h3>
                <ul className="package-details-list-grid">
                    {activities.length > 0 ? (
                        activities.map((activity, index) => (
                            <li key={index} className="package-details-activity-item">
                                <svg className="package-details-activity-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                <span>{activity}</span>
                            </li>
                        ))
                    ) : (
                        <li className="package-details-empty-text">No activities available.</li>
                    )}
                </ul>
            </div>

            <div className="package-details-section">
                <h3 className="package-details-section-title">
                    <svg className="package-details-info-icon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    Major Attractions
                </h3>
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
                <h3 className="package-details-section-title">
                    <svg className="package-details-info-icon-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    Nearby Attractions
                </h3>
                <ul className="package-details-nearby-grid">
                    {attractions && attractions.length > 0 ? (
                        attractions.map((place) => (
                            <li key={place.xid} className="package-details-nearby-card">
                                <strong className="package-details-nearby-title" title={place.name}>{place.name}</strong>
                                <span className="package-details-nearby-badge">
                                    {(place.dist / 1000).toFixed(1)} km away
                                </span>
                            </li>
                        ))
                    ) : (
                        <li className="package-details-empty-text">No nearby attractions found.</li>
                    )}
                </ul>
            </div>

            <div className="package-details-desc-box">
                <h3 className="package-details-desc-title">
                    <svg className="package-details-desc-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    Itinerary Details
                </h3>
                <p className="package-details-desc-text">{packageData.description}</p>
            </div>

        </div>
    );
}

export default PackageDetails;