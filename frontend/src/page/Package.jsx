import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import PackageDetails from "../components/PackageDetails/PackageDetails";
import Loading from "../components/Loading/Loading";

import packageService from "../services/packageService";
import attractionService from "../services/attractionService";

/**
 * Page component for a single travel package.
 * Fetches data and nearby attractions by ID, then renders PackageDetails.
 */
function Package() {

    const { id } = useParams();
    const location = useLocation();

    const isDomestic = location.pathname.startsWith("/package/domestic/");

    const [packageData, setPackageData] = useState(null);
    const [attractions, setAttractions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPackage();
    }, [id]);

    const loadPackage = async () => {
        // Grab all the details for this specific package from the API, plus some nearby spots
        setLoading(true);

        try {

            let data;

            if (isDomestic) {
                data = await packageService.getDomesticPackageById(id);
            } else {
                data = await packageService.getInternationalPackageById(id);
            }

            setPackageData(data);

            const firstCity = data.cities_covered
                ? data.cities_covered.split(',')[0].trim()
                : data.country;

            const attractionResponse =
                await attractionService.getNearbyAttractions(
                    firstCity
                );

            if (attractionResponse) {
                if (Array.isArray(attractionResponse)) {
                    setAttractions(attractionResponse);
                } else if (attractionResponse.success && Array.isArray(attractionResponse.data)) {
                    setAttractions(attractionResponse.data);
                } else if (Array.isArray(attractionResponse.data)) {
                    setAttractions(attractionResponse.data);
                }
            }

        } catch (error) {

            console.error("Error loading package:", error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <PackageDetails
                packageData={packageData}
                attractions={attractions}
            />
        </div>
    );
}

export default Package;