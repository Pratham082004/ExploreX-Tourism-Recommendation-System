import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return(
        <header className="navbar-header">
            <div className="navbar-container">
                {/* Logo Section */}
                <Link to="/" className="navbar-logo-link group">
                    <div className="navbar-logo-icon">
                        {/* A palm tree icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 6l-2-2-2 2-1 4h6z"/>
                            <path d="M12 10v12"/>
                            <path d="M22 20H2"/>
                            <path d="M15 15l4-2"/>
                            <path d="M9 15l-4-2"/>
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="navbar-logo-text">WanderMatch</span>
                        <span className="text-[10px] text-slate-500 font-medium -mt-1 tracking-wide">AI Travel Planner</span>
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
                        <li>
                            <NavLink to="/contact" className={({isActive}) => isActive ? 'navbar-link-active' : 'navbar-link'}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Navbar;