import api, { unwrapApiResponse } from "./api";

const getrecommendation = async (preferences) => {
    const response = await api.post(
        "/recommendations/recommend",
        {
            user_preferences: preferences,
        }
    );

    return unwrapApiResponse(response);
};

export default { getrecommendation };