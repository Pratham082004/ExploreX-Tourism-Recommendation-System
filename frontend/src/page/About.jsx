import '../styles/About.css';
import aboutMapImg from '../assets/about-map.jpg';

/**
 * The About Us page.
 * Tells the story of ExploreX, its mission, services, and the technology stack.
 */
function About() {
    return (
        <div className="about-container">
            
            {/* Header Section */}
            <div className="text-center mb-16">
                <p className="text-pink-500 font-bold text-sm tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
                    <span className="w-6 h-[1px] bg-pink-500"></span>
                    Our Story
                    <span className="w-6 h-[1px] bg-pink-500"></span>
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">ExploreX</span>
                </h1>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    Your trusted travel companion for discovering personalized travel experiences across domestic and international destinations.
                </p>
            </div>

            {/* Mission Section */}
            <div className="about-card mb-16">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            Our Mission
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-4">
                            Our mission is to make travel planning simple, efficient and personalized by helping every traveller discover destinations and experiences that best match their travel goals.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Whether you are planning a family vacation, honeymoon, adventure trip or luxury getaway, our recommendation system helps you find the most suitable travel packages with detailed information and destination insights.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 bg-slate-100 rounded-3xl h-80 flex items-center justify-center overflow-hidden border-4 border-white shadow-xl shadow-slate-200 relative group">
                        <img src={aboutMapImg} alt="ExploreX Travel Map" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="mb-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-extrabold text-slate-800">Our Services</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: "Personalized Recommendations", icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "pink", desc: "AI-powered suggestions tailored specifically to your preferences." },
                        { title: "Domestic & International", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "blue", desc: "Explore thousands of packages worldwide." },
                        { title: "Budget & Luxury Options", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0-2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "pink", desc: "Trips designed for every budget level." },
                        { title: "24/7 AI Assistance", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z", color: "blue", desc: "Instant AI support for all your travel queries anytime." },
                        { title: "Nearby Attractions", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", color: "pink", desc: "Discover hidden gems powered by OpenTripMap." },
                        { title: "Easy Comparisons", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", color: "blue", desc: "Compare packages quickly and make confident choices." }
                    ].map((service, i) => (
                        <div key={i} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${service.color === 'pink' ? 'bg-pink-50 text-pink-500 group-hover:bg-pink-500 group-hover:text-white' : 'bg-blue-50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white'} transition-colors duration-300`}>
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}/></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                            <p className="text-slate-500">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tech Stack */}
            <div className="about-card text-center">
                <h2 className="text-2xl font-bold text-slate-800 mb-8">Technology Behind Our Platform</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {['React', 'Vite', 'Tailwind CSS', 'Flask', 'Python', 'Scikit-Learn', 'MySQL', 'OpenTripMap API'].map(tech => (
                        <span key={tech} className="px-6 py-3 rounded-2xl text-sm font-bold bg-slate-50 border border-slate-200 text-slate-600 shadow-sm hover:border-blue-300 hover:text-blue-500 hover:bg-white transition-all hover:-translate-y-0.5 cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default About;