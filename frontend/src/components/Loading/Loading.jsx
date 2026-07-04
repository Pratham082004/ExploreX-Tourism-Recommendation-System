function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] w-full p-8">
            <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-slate-100"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-pink-500 border-r-blue-500 animate-spin"></div>
            </div>
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 animate-pulse">
                Discovering destinations...
            </h2>
        </div>
    );
}

export default Loading;