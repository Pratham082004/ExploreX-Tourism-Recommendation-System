import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

/**
 * The top navigation bar of the application.
 * Contains the logo and links to main pages like Home, Plan Trip, and About Us.
 */
function Navbar(){
    return(
        <header className="navbar-header">
            <div className="navbar-container">
                {/* Logo Section */}
                <Link to="/" className="navbar-logo-link group">
                    <div className="navbar-logo-icon">
                        {/* ExploreX logo */}
                        <img src="/favicon.svg" alt="ExploreX Logo" className="w-10 h-10 drop-shadow-[0_0_10px_rgba(171,0,255,0.4)]" />
                    </div>
                    <div className="flex flex-col">
                        <span className="navbar-logo-text">ExploreX</span>
                        <span className="text-[10px] text-slate-500 font-medium -mt-1 tracking-wide">AI Travel Recommender</span>
                    </div>
                </Link>

                {/* Navigation Links */}
                <nav className="hidden lg:block">
                    <ul className="navbar-list">
                        <li>
                            <NavLink to="/" className={({isActive}) => isActive ? 'navbar-link-active' : 'navbar-link'}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/recommendation" className={({isActive}) => isActive ? 'navbar-link-active' : 'navbar-link'}>
                                Plan Trip
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/about" className={({isActive}) => isActive ? 'navbar-link-active' : 'navbar-link'}>
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Navbar;