import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import PackageDetails from "../components/PackageDetails/PackageDetails";
import Loading from "../components/Loading/Loading";

import packageService from "../services/packageService";
import attractionService from "../services/attractionService";

/**
 * The dedicated page for viewing a single travel package's details.
 * Fetches the package data and nearby attractions based on the URL ID,
 * and passes them to the PackageDetails component.
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const loadPackage = async () => {

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
        <div className="w-full">
            <PackageDetails
                packageData={packageData}
                attractions={attractions}
            />
        </div>
    );
}

export default Package;