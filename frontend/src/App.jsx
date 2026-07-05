import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./page/Home";
import Recommendation from "./page/Recommendation";
import Package from "./page/Package";
import About from "./page/About";
import NotFound from "./page/NotFound";
import Recommendations from "./page/Recommendations";

/**
 * Main application component that sets up routing for the entire app.
 * It wraps the main content with Navbar and Footer components.
 */
function App(){
  return(
    <>
        <Navbar />
        
          <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recommendation" element={<Recommendation />} />

                <Route path="/package/domestic/:id" element={<Package />} />
                <Route path="/package/international/:id" element={<Package />} />

                <Route path="/recommendations" element={<Recommendations />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

        <Footer />
    </>
  );
}

export default App;
