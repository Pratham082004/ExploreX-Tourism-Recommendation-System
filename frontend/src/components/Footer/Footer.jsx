import { Link } from "react-router-dom";
import "./Footer.css";

/**
 * Footer component rendered at the bottom of all pages.
 * Displays the logo and a short description.
 */
function Footer(){
    return(
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <img src="/favicon.svg" alt="ExploreX Logo" width="24" height="24" className="footer-logo-img" />
                        <span className="footer-logo-text">ExploreX</span>
                    </Link>
                    <p className="footer-desc">A travel package recommender that helps you discover and plan your next trip.</p>
                </div>
                </div>
            
            <div className="footer-bottom">
                <p>© 2026 ExploreX. Developed by Pratham Patil.</p>
            </div>
        </footer>
    );
}

export default Footer;
