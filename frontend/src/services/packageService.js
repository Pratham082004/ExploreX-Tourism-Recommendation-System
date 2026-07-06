import api, { unwrapApiResponse } from "./api";

/**
 * Fetches the details of a specific domestic travel package by its ID.
 *
 * @param {string} packageId - The unique identifier of the domestic package.
 * @returns {Promise<Object>} The requested package details.
 */
const getDomesticPackageById = async (packageId) => {
    // Fetch the full details for a domestic trip
    const response = await api.get(`/packages/domestic/${packageId}`);
    return unwrapApiResponse(response);
};

/**
 * Fetches the details of a specific international travel package by its ID.
 *
 * @param {string} packageId - The unique identifier of the international package.
 * @returns {Promise<Object>} The requested package details.
 */
const getInternationalPackageById = async (packageId) => {
    // Fetch the full details for an international trip
    const response = await api.get(`/packages/international/${packageId}`);
    return unwrapApiResponse(response);
};

export default {
    getDomesticPackageById,
    getInternationalPackageById,
};
