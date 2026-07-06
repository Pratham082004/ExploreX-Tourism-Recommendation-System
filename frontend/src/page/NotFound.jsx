import { Link } from "react-router-dom";
import { FaMap, FaArrowLeft } from "react-icons/fa";
import "../styles/NotFound.css";

/**
 * 404 error page for unmatched routes.
 */
function NotFound() {
    return (
        <div className="not-found-container">
            <div className="not-found-code-wrapper">
                <div className="not-found-code">
                    404
                </div>
                <div className="not-found-icon-wrapper">
                    <FaMap className="not-found-icon" style={{fontSize: '80px', display: 'inline-block', lineHeight: 1}} />
                </div>
            </div>
            
            <h1 className="not-found-title">
                Oops! Looks like you're lost.
            </h1>
            <p className="not-found-desc">
                The destination you're looking for doesn't exist or has been moved to another coordinate.
            </p>
            
            <Link to="/" className="not-found-btn">
                <FaArrowLeft />
                Back to Explore
            </Link>
        </div>
    );
}

export default NotFound;
