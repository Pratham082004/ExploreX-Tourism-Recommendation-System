import { useLocation } from "react-router-dom";
import PackageCard from "../components/PackageCard/PackageCard";
import "../styles/Recommendations.css";

function Recommendations() {

    const location = useLocation();
    const recommendationPackages = location.state?.recommendations || [];
    
    return (
        <div className="recommendations-container">
            <div className="text-center mb-16">
                <p className="text-pink-500 font-bold text-sm tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
                    <span className="w-6 h-[1px] bg-pink-500"></span>
                    Your Results
                    <span className="w-6 h-[1px] bg-pink-500"></span>
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                    Recommended <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">Packages</span>
                </h1>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    Based on your preferences, here are the top matching destinations for your next adventure.
                </p>
            </div>
            
            <div className="recommendations-grid">
            {
                recommendationPackages.length === 0 ? (
                    <div className="col-span-full flex flex-col items-center justify-center py-20 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                        <svg className="w-16 h-16 text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        <p className="text-xl font-bold text-slate-500">No recommendations found.</p>
                        <p className="text-slate-400 mt-2">Try adjusting your budget or destination preferences.</p>
                    </div>
                ) : (
                    recommendationPackages.map((pkg) => (
                        <PackageCard
                            key={pkg.package_id}
                            packageData={pkg}
                        />
                    ))
                )
            }
            </div>
        </div>
    );

}

export default Recommendations;