import { Link } from "react-router-dom";
import "./Navbar.css";

/**
 * Top navigation bar.
 * Displays the logo and primary navigation links.
 */
function Navbar(){
    return(
        <header className="navbar-header">
            <div className="navbar-container">
                {/* Logo Section */}
                <Link to="/" className="navbar-logo-link group">
                    <div className="navbar-logo-icon">
                        {/* ExploreX logo */}
                        <img src="/favicon.svg" alt="ExploreX Logo" className="navbar-logo-img" />
                    </div>
                    <div className="navbar-logo-col">
                        <span className="navbar-logo-text">ExploreX</span>
                        <span className="navbar-logo-subtext">Trip Planner</span>
                    </div>
                </Link>



            </div>
        </header>
    );
}

export default Navbar;