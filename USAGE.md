# Usage Guide: ExploreX - Tourism Recommendation System

This document outlines how to interact with the ExploreX application once it is up and running.

> [!NOTE]
> Ensure that you have followed the setup instructions in `INSTALL.md` and that all Docker containers are currently running (`docker compose up`).

## Accessing the Application

1. Open your web browser.
2. Navigate to the frontend URL: [http://localhost:5173](http://localhost:5173)

## How to Get a Recommendation

### Step 1: Provide Your Preferences
On the main landing page, you will be presented with a **Recommendation Form**. Fill in the following details:
* **Destination Type:** Choose whether you want a `Domestic` or `International` trip.
* **Budget:** Input your budget.
* **Duration:** Enter how many days you plan to travel.
* **Activities/Interests:** Select or enter your preferred activities (e.g., scuba diving, hiking, historical tours).

### Step 2: Generate Recommendations
Once your preferences are entered, click the **Submit** or **Get Recommendations** button. 
* The React frontend will send your preferences to the Flask backend.
* The Scikit-learn Machine Learning engine will calculate the cosine similarity between your profile and all available packages in the database.
* Time and budget constraints will be applied to filter out non-viable options.

### Step 3: Review the Output
The system will return your **Top 5 Best Fit Travel Packages**. For each package, you will see:
* **Package Details:** Overview of the destination, total cost, and duration.
* **Nearby Attractions:** A list of attractions you can visit near the recommended destination.
