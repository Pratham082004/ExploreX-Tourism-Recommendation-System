import api from "./api";

const getNearbyAttractions = async (city) => {

    const response = await api.get(
        `/attractions?city=${city}`
    );

    return response.data;
};

export default {
    getNearbyAttractions
};