import axios from "axios";

/**
 * Configures the base Axios instance for making API requests.
 * Sets up the base URL and standard headers used across the application.
 */
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
    headers: {
        "Content-Type": "application/json"
    }
});

/**
 * A helper function to extract the inner data from an API response.
 * Safely handles missing data and nested response structures.
 *
 * @param {Object} response - The raw Axios response object.
 * @returns {any} The unwrapped data or null if not found.
 */
export const unwrapApiResponse = (response) => {
    if (!response) {
        return null;
    }

    if (response?.data?.data !== undefined) {
        return response.data.data;
    }

    return response?.data ?? null;
};

export default api;