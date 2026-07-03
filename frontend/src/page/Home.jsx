import { Link } from "react-router-dom";

function Home(){
    return (
        <main className="container">
            {/*Hero Section*/}
            <section>
            <h1>Tourism Recommendation System</h1>

            <p>
                Find unique domestic and international travel 
                packages tailored to your likes, budget, time,
                interest, and style of traveling.
            </p>

            <Link to = "/recommendation">
                <button>Get Recommendation</button>
            </Link>
            </section>

            <hr />

            {/* Features Section */}
            <section>
                <h2>Why Our Recommendation System?</h2>
                <div>
                    <div>
                        <h3>Personalised Recommendations</h3>
                        <p>
                            Receive travel packages tailored to your interests,
                            budget, and travel preferences.
                        </p>
                    </div>
                    <div>
                        <h3>Domestic & International Packages</h3>
                        <p>
                            Explore destinations across India and around the
                            world with a single platform.
                        </p>
                    </div>
                    <div>
                        <h3>Machine Learning Powered</h3>
                        <p>
                            Our recommendation engine analyses your preferences
                            to suggest the most suitable travel packages.
                        </p>
                    </div>
                </div>
            </section>

            <hr />

            {/* How this Platform Works*/}
            <section>
                <h2>How This Platform Works</h2>
                <ol>
                    <li>Enter your travel preferences.</li>
                    <li>Select your budget and travel duration.</li>
                    <li>Choose your travel interests.</li>
                    <li>Get your Top 5 recommended travel packages.</li>
                </ol>
            </section>

            <hr />
            
            {/* Call To Action */}
            <section>
                <h2>Ready to Plan Your Next Trip?</h2>
                <p>
                    Start exploring personalized travel packages today.
                </p>
                <Link to="/recommendation">
                    <button>Start Now</button>
                </Link>
            </section>

        </main>
    );
}

export default Home;