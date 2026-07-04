import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import PackageDetails from "../components/PackageDetails/PackageDetails";
import Loading from "../components/Loading/Loading";

import packageService from "../services/packageService";
import attractionService from "../services/attractionService";

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

            const attractionResponse =
                await attractionService.getNearbyAttractions(
                    data.country
                );

            if (attractionResponse.success) {
                setAttractions(attractionResponse.data);
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