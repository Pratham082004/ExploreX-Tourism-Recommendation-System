import api, { unwrapApiResponse } from "./api";

/**
 * Fetches the details of a specific domestic travel package by its ID.
 */
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
