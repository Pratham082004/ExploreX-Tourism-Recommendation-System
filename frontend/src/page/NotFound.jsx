import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center w-full min-h-[60vh]">
            <div className="relative mb-8">
                <div className="text-[150px] md:text-[200px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-50 to-pink-50 leading-none select-none">
                    404
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500 bg-white rounded-full p-2 shadow-xl shadow-pink-500/20"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17a2.5 2.5 0 0 0 5-3"/></svg>
                </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-4">
                Oops! Looks like you're lost.
            </h1>
            <p className="text-slate-500 text-lg mb-10 max-w-md mx-auto">
                The destination you're looking for doesn't exist or has been moved to another coordinate.
            </p>
            
            <Link to="/" className="inline-flex justify-center items-center px-8 py-4 text-[15px] font-bold text-white bg-gradient-to-r from-blue-500 to-pink-500 rounded-full shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 hover:-translate-y-1 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6"/></svg>
                Back to Explore
            </Link>
        </div>
    );
}

export default NotFound;
