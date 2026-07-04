import api, { unwrapApiResponse } from "./api";

const getDomesticPackageById = async (packageId) => {
    const response = await api.get(`/packages/domestic/${packageId}`);
    return unwrapApiResponse(response);
};

const getInternationalPackageById = async (packageId) => {
    const response = await api.get(`/packages/international/${packageId}`);
    return unwrapApiResponse(response);
};

export default {
    getDomesticPackageById,
    getInternationalPackageById,
};
