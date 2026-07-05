import { useState } from "react";
import {DESTINATIONS, PACKAGE_TYPES, HOTEL_CATEGORIES, BEST_FOR, ACTIVITIES} from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import recommendationService from "../../services/recommendationService";
import "./RecommendationForm.css";

/**
 * A comprehensive form where users input their travel preferences.
 * Captures destination, budget, duration, package type, and preferred activities
 * to fetch personalized travel recommendations from the backend.
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

    const[activityInput, setActivityInput] = useState("");

    const handleChange = (event) =>{
        const {name, value} = event.target;
        if (name === "destination_type"){
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

        const payload = {
            user_preferences: {
                ...formData,
                destination: formData.country,
                activities: formData.activity,
                budget: Number(formData.budget),
                duration: Number(formData.duration)
            }
        };
        delete payload.user_preferences.activity;

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
        if(formData.activity.includes(activity)){
            return;
        }
        setFormData((prev) => ({
            ...prev,
            activity: [...prev.activity, activity]
        }));
        setActivityInput("");
    };

    const removeActivity = (activity) => {
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
                <svg className="form-header-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
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
                            <svg className="form-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
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
                            <option value = "">Select Your Prefered Destination</option>
                            {filteredDestination.map((destination) => (
                                <option key={destination} value={destination}>{destination}</option>
                            ))}
                        </select>
                        <div className="form-select-icon-wrapper">
                            <svg className="form-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
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
                            <svg className="form-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
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
                            <svg className="form-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
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
                            {BEST_FOR.map((item)=>(
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                        <div className="form-select-icon-wrapper">
                            <svg className="form-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
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
                                <svg className="form-tag-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </span>
                    ))}
                </div>
            )}

            <div className="form-submit-wrapper">
                <button type="submit" className="form-submit-btn">
                    Get Recommendations
                    <svg className="form-submit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
            </div>
        </form>
    );
}

export default RecommendationForm;