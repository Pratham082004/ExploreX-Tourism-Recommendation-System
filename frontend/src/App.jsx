import { Routes, Route } from "react-router-dom";
import "./styles/App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Recommendation from "./page/Recommendation";
import Package from "./page/Package";
import NotFound from "./page/NotFound";
import Recommendations from "./page/Recommendations";

/**
 * Main app component containing all top-level routes.
 */
function App(){
  return(
    <>
        <Navbar />
        
          <main className="main-content">
            <Routes>
                <Route path="/" element={<Recommendation />} />
                <Route path="/recommendation" element={<Recommendation />} />
                <Route path="/package/domestic/:id" element={<Package />} />
                <Route path="/package/international/:id" element={<Package />} />
                <Route path="/recommendations" element={<Recommendations />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

        <Footer />
    </>
  );
}

export default App;
