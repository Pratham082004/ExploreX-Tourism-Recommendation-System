import api from "./api";

/**
 * Service to handle fetching nearby tourist attractions.
 *
 * @param {string} city - The name of the city to search for attractions.
 * @returns {Promise<Object>} The API response containing nearby attractions.
 */
const getNearbyAttractions = async (city) => {
    // Ping the API to find cool places to visit near the selected city
    const response = await api.get(
        `/attractions?city=${encodeURIComponent(city)}`
    );

    return response.data;
};

export default {
    getNearbyAttractions
};