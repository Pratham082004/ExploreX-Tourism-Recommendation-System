import api, { unwrapApiResponse } from "./api";

/**
 * Submits user preferences to get personalized travel recommendations.
 *
 * @param {Object} preferences - The user's travel preferences (budget, duration, etc.).
 * @returns {Promise<Array>} A list of recommended travel packages.
 */
const getrecommendation = async (preferences) => {
    // Send over what the user likes and see what the AI suggests
    const response = await api.post(
        "/recommendations/recommend",
        {
            user_preferences: preferences,
        }
    );

    return unwrapApiResponse(response);
};

export default { getrecommendation };