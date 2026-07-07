import api from "./api";

/**
 * Service to handle fetching nearby tourist attractions.
 */
const getNearbyAttractions = async (city) => {
    const response = await api.get(
        `/attractions?city=${encodeURIComponent(city)}`
    );

    return response.data;
};

export default {
    getNearbyAttractions
};