import { useState } from "react";
import { DESTINATIONS, PACKAGE_TYPES, HOTEL_CATEGORIES, BEST_FOR, ACTIVITIES } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import recommendationService from "../../services/recommendationService";
import { FaPlane, FaChevronDown, FaTimes, FaRocket } from "react-icons/fa";
import "./RecommendationForm.css";

/**
 * Main form for users to enter their travel preferences.
 * Collects destination, budget, and activities, then fetches recommendations from the API.
 */
function RecommendationForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        destination_type: "",
        country: "",
        budget: "",
        duration: "",
        package_type: "",
        best_for: "",
        hotel_category: "",
        activity: []
    }
    );

    const [activityInput, setActivityInput] = useState("");

    const handleChange = (event) => {
        // Keep track of what the user is selecting
        const { name, value } = event.target;
        if (name === "destination_type") {
            setFormData((prev) => ({
                ...prev,
                destination_type: value,
                country: ""
            }));
            return;
        }
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { activity, ...restFormData } = formData;
        // Collects the user's preferences and ask the backend for some travel ideas
        const payload = {
            user_preferences: {
                ...restFormData,
                destination: formData.country,
                activities: activity,
                budget: Number(formData.budget),
                duration: Number(formData.duration)
            }
        };

        try {
            const recommendations =
                await recommendationService.getrecommendation(
                    payload.user_preferences
                );

            navigate("/recommendations", {
                state: {
                    recommendations
                }
            });
        }
        catch (error) {
            console.error(error);
            alert("Unable to fetch recommendations.");
        }
    };

    const addActivity = (activity) => {
        // Only add the activity if they haven't picked it already
        if (formData.activity.includes(activity)) {
            return;
        }
        setFormData((prev) => ({
            ...prev,
            activity: [...prev.activity, activity]
        }));
        setActivityInput("");
    };

    const removeActivity = (activity) => {
        // Toss out the activity if they changed their mind
        setFormData((prev) => ({
            ...prev,
            activity: prev.activity.filter((item) => item !== activity)
        }))
    }

    const filteredDestination = DESTINATIONS[formData.destination_type] || [];

    const filteredActivity = ACTIVITIES.filter((activity) =>
        activity
            .toLowerCase()
            .includes(activityInput.toLowerCase()) &&
        !formData.activity.includes(activity)
    );

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-top-gradient"></div>

            <h2 className="form-header">
                <FaPlane className="form-header-icon" />
                Travel Preferences
            </h2>

            <div className="form-grid">
                {/* Destination Type Selection*/}
                <div className="form-group">
                    <label className="form-label">Destination Type</label>
                    <div className="form-input-container">
                        <select
                            name="destination_type"
                            value={formData.destination_type}
                            onChange={handleChange}
                            required
                            className="form-select"
                        >
                            <option value="">Select Destination Type</option>
                            <option value="Domestic">Domestic</option>
                            <option value="International">International</option>
                        </select>
                        <div className="form-select-icon-wrapper">
                            <FaChevronDown className="form-icon" />
                        </div>
                    </div>
                </div>

                {/* Select destination */}
                <div className="form-group">
                    <label className="form-label">Destination</label>
                    <div className="form-input-container">
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                            disabled={!formData.destination_type}
                            className="form-select"
                        >
                            <option value="">Select Your Prefered Destination</option>
                            {filteredDestination.map((destination) => (
                                <option key={destination} value={destination}>{destination}</option>
                            ))}
                        </select>
                        <div className="form-select-icon-wrapper">
                            <FaChevronDown className="form-icon" />
                        </div>
                    </div>
                </div>

                {/* User's Budget */}
                <div className="form-group">
                    <label className="form-label">Budget (Rs)</label>
                    <input
                        type="number"
                        name="budget"
                        placeholder="Enter Budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>

                {/* User's Duration in days*/}
                <div className="form-group">
                    <label className="form-label">Duration (Days)</label>
                    <input
                        type="number"
                        name="duration"
                        min="1"
                        placeholder="Enter Duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>

                {/*User's Prefered Hotel Category*/}
                <div className="form-group">
                    <label className="form-label">Hotel Category</label>
                    <div className="form-input-container">
                        <select
                            name="hotel_category"
                            value={formData.hotel_category}
                            onChange={handleChange}
                            required
                            className="form-select"
                        >
                            <option value="">Select Your Preferred Hotel Categoroy</option>
                            {HOTEL_CATEGORIES.map((hotel) => (
                                <option key={hotel} value={hotel}>{hotel}</option>
                            ))}
                        </select>
                        <div className="form-select-icon-wrapper">
                            <FaChevronDown className="form-icon" />
                        </div>
                    </div>
                </div>

                {/*User's Choose thier Package Type*/}
                <div className="form-group">
                    <label className="form-label">Package Type</label>
                    <div className="form-input-container">
                        <select
                            name="package_type"
                            value={formData.package_type}
                            onChange={handleChange}
                            required
                            className="form-select"
                        >
                            <option value="">Select Your Prefered Package Type</option>
                            {PACKAGE_TYPES.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                        <div className="form-select-icon-wrapper">
                            <FaChevronDown className="form-icon" />
                        </div>
                    </div>
                </div>

                {/* Distinguish between solo, couples, family */}
                <div className="form-group">
                    <label className="form-label">Best For</label>
                    <div className="form-input-container">
                        <select
                            name="best_for"
                            value={formData.best_for}
                            onChange={handleChange}
                            required
                            className="form-select"
                        >
                            <option value="">Select</option>
                            {BEST_FOR.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                        <div className="form-select-icon-wrapper">
                            <FaChevronDown className="form-icon" />
                        </div>
                    </div>
                </div>

                {/* User's Prefered Activities */}
                <div className="form-group-full">
                    <label className="form-label">Activities</label>
                    <div className="form-input-container">
                        <input
                            type="text"
                            placeholder="Search Activities..."
                            value={activityInput}
                            onChange={(e) => setActivityInput(e.target.value)}
                            className="form-input"
                        />
                        {activityInput && (
                            <div className="form-dropdown">
                                {filteredActivity.length === 0 ? (
                                    <div className="form-dropdown-empty">No Activity Found</div>
                                ) : (
                                    filteredActivity.map((activity) => (
                                        <div
                                            key={activity}
                                            onClick={() => addActivity(activity)}
                                            className="form-dropdown-item"
                                        >
                                            {activity}
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* User Selects the Activities */}
            {formData.activity.length > 0 && (
                <div className="form-tags-container">
                    {formData.activity.map((activity) => (
                        <span
                            key={activity}
                            className="form-tag"
                        >
                            {activity}
                            <button
                                type="button"
                                onClick={() => removeActivity(activity)}
                                className="form-tag-btn"
                            >
                                <FaTimes className="form-tag-icon" />
                            </button>
                        </span>
                    ))}
                </div>
            )}

            <div className="form-submit-wrapper">
                <button type="submit" className="form-submit-btn">
                    Get Recommendations
                    <FaRocket className="form-submit-icon" />
                </button>
            </div>
        </form>
    );
}

export default RecommendationForm;