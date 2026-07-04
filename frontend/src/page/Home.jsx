import { Link } from "react-router-dom";
import "../styles/Home.css";
import AnimatedNumber from "../components/AnimatedNumber/AnimatedNumber";

function Home(){
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    {/* Left Column */}
                    <div className="hero-left">
                        <h1 className="hero-title">
                            Discover Your Perfect <br/> <span className="hero-title-gradient">Dream Destination</span>
                        </h1>
                        <p className="hero-subtitle">
                            Find unique domestic and international travel packages tailored to your likes, budget, time, interest, and style of traveling.
                        </p>
                        <Link to="/recommendation" className="hero-btn">
                            Get Your Recommendation &rarr;
                        </Link>
                    </div>

                    {/* Right Column */}
                    <div className="hero-right">
                        <div className="floating-card delay-1">
                            <div className="card-icon-container bg-pink-100 text-pink-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                            </div>
                            <div className="card-text">
                                <span className="card-value"><AnimatedNumber end={500} suffix="+" /></span>
                                <span className="card-label">Destinations</span>
                                <span className="card-sublabel">Worldwide</span>
                            </div>
                        </div>

                        <div className="floating-card delay-2">
                            <div className="card-icon-container bg-blue-100 text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            </div>
                            <div className="card-text">
                                <span className="card-value"><AnimatedNumber end={4.9} decimals={1} suffix="/5" /></span>
                                <span className="card-label">User Rating</span>
                                <span className="card-sublabel">Trusted by travelers</span>
                            </div>
                        </div>

                        <div className="floating-card delay-3">
                            <div className="card-icon-container bg-purple-100 text-purple-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
                            </div>
                            <div className="card-text">
                                <span className="card-value">AI Powered</span>
                                <span className="card-label">Smart & Personalized</span>
                                <span className="card-sublabel">Recommendations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <div className="stats-bar-wrapper">
                <div className="stats-bar">
                    <div className="stat-item">
                        <div className="stat-icon bg-blue-50 text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        </div>
                        <div className="stat-info">
                            <span className="stat-num"><AnimatedNumber end={25} suffix="K+" /></span>
                            <span className="stat-desc">Happy Travelers</span>
                        </div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-icon bg-pink-50 text-pink-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="6" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M10 6V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2"/></svg>
                        </div>
                        <div className="stat-info">
                            <span className="stat-num"><AnimatedNumber end={150} suffix="+" /></span>
                            <span className="stat-desc">Travel Packages</span>
                        </div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-icon bg-blue-50 text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
                        </div>
                        <div className="stat-info">
                            <span className="stat-num"><AnimatedNumber end={30} suffix="+" /></span>
                            <span className="stat-desc">Countries</span>
                        </div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-icon bg-pink-50 text-pink-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
                        </div>
                        <div className="stat-info">
                            <span className="stat-num">24/7</span>
                            <span className="stat-desc">Customer Support</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <section className="features-section">
                <div className="features-header">
                    <p className="text-pink-500 font-bold text-sm tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
                        <span className="w-6 h-[1px] bg-pink-500"></span>
                        Why Choose Us
                        <span className="w-6 h-[1px] bg-pink-500"></span>
                    </p>
                    <h2 className="features-title">
                        Why Travelers Love WanderMatch
                        <svg className="inline-block ml-2 w-8 h-8 text-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    </h2>
                    <p className="features-subtitle">We make travel planning effortless and memorable.</p>
                </div>
                
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon-container-blue">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
                        </div>
                        <h3 className="feature-card-title">AI-Powered Matching</h3>
                        <p className="feature-card-text">
                            Our AI understands your preferences and suggests the best destinations just for you.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-container-pink">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
                        </div>
                        <h3 className="feature-card-title">Best Price Guarantee</h3>
                        <p className="feature-card-text">
                            Get the most competitive prices on top-rated packages and enjoy more for less.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-container-blue">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
                        </div>
                        <h3 className="feature-card-title">Trusted & Secure</h3>
                        <p className="feature-card-text">
                            Your data and payments are 100% secure with industry-leading security standards.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon-container-pink">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
                        </div>
                        <h3 className="feature-card-title">24/7 Support</h3>
                        <p className="feature-card-text">
                            Our travel experts are always available to help you plan the perfect trip.
                        </p>
                    </div>
                </div>
            </section>

            {/* Testimonials / Reviews Section */}
            <section className="reviews-section">
                <div className="features-header">
                    <p className="text-pink-500 font-bold text-sm tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
                        <span className="w-6 h-[1px] bg-pink-500"></span>
                        Testimonials
                        <span className="w-6 h-[1px] bg-pink-500"></span>
                    </p>
                    <h2 className="features-title">What Our Travelers Say</h2>
                </div>
                
                <div className="reviews-grid">
                    {[
                        {
                            name: "Sarah Jenkins",
                            role: "Solo Traveler",
                            review: "WanderMatch made my trip to Bali absolutely incredible. The AI recommendations were spot on and I saved so much time planning!",
                            avatar: "https://i.pravatar.cc/150?img=47"
                        },
                        {
                            name: "Michael Chen",
                            role: "Family Vacation",
                            review: "Booking our Europe tour was a breeze. Best price guarantee actually works, and the 24/7 support team helped us when our flight was delayed.",
                            avatar: "https://i.pravatar.cc/150?img=11"
                        },
                        {
                            name: "Emma Watson",
                            role: "Adventure Seeker",
                            review: "I discovered places in Costa Rica I would have never found on my own. Highly secure and totally trustworthy platform.",
                            avatar: "https://i.pravatar.cc/150?img=5"
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="review-card">
                            <div className="flex gap-1 mb-4 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                                ))}
                            </div>
                            <p className="review-text">"{item.review}"</p>
                            <div className="review-author">
                                <img src={item.avatar} alt={item.name} className="review-avatar" />
                                <div>
                                    <h4 className="review-name">{item.name}</h4>
                                    <p className="review-role">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;