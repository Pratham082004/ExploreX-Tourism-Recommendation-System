import api, { unwrapApiResponse } from "./api";

/**
 * Submits user preferences to get personalized travel recommendations.
 */
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