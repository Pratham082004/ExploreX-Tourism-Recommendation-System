# ExploreX - Tourism Recommendation System

A Tourism Recommendation System designed to provide personalized travel experiences, destination suggestions, and trip packages based on user preferences.  

## 1. What it does
Imagine having a personal travel agent available 24/7. With ExploreX, you simply tell the system what you're looking for whether that's a strict budget, a specific number of days, or niche activities like scuba diving or hiking. You can also specify if you're looking to explore locally (Domestic) or cross borders (International). Behind the scenes, the system sifts through a comprehensive database of travel packages, mathematically scores how well each one aligns with your unique profile, and curates a list of the top 5 absolute best fits. To help you visualize your trip, it even plots nearby attractions on a dynamic, interactive map so you can see exactly what awaits you.

## 2. Why I chose this project
Planning a trip can be incredibly overwhelming. With the sheer volume of choices, destinations, and hidden costs out there, it's easy to suffer from decision fatigue. I have personally spent countless hours bouncing between static, frustrating travel websites, desperately trying to piece together a package that perfectly fits my budget while still letting me do the activities I love. 

I built ExploreX because it is the exact tool I genuinely wished existed when I was planning my own trips. I wanted to create an intelligent, virtual travel agent that eliminates the endless scrolling and guesswork. It programmatically connects travelers directly to the right packages based on their actual constraints and desires, turning a stressful planning phase into an exciting one.

## 3. What makes it special
Most standard search bars on travel websites rely on rigid, basic database queries (like simple SQL `WHERE` clauses). If you don't type the exact right keyword, you miss out on great options. 

ExploreX takes a much smarter approach. It uses a custom built, weighted content-based filtering algorithm powered by Machine Learning (specifically, Scikit-learn). When you input your preferences, the system actually converts your desires into a mathematical vector. It then calculates the "cosine similarity" against every single package in the database to see how conceptually close they are to your dream trip. To make sure the recommendations are actually practical, it applies hard mathematical penalties to any package that exceeds your budget or time constraints. This guarantees that you are only ever shown truly viable, highly personalised options.

## Documentation

I have split the documentation into dedicated files to keep this README clean:

- **[Architecture Deep-Dive](ARCHITECTURE.md)**: Explains the Flask/React/Scikit-learn infrastructure and the ML Cosine Similarity engine.
- **[Installation & Setup Guide](INSTALL.md)**: Step-by-step instructions for running this project via Docker (Plug & Play) or Manual setup.
- **[API Documentation](API_DOCUMENTATION.md)**: A complete list of all RESTful endpoints, expected JSON payloads, and responses.
- **[USAGE Documentation](USAGE.md)**: A complete guide on how to interact with the application.

## Project Structure

```text
Tourism-Recommendation-System/
│
├── backend/                  # Flask backend & ML logic
│   ├── app.py                # Application entry point
│   ├── config.py             # Configuration files
│   ├── controllers/          # API route handlers
│   ├── database/             # Database connection logic
│   ├── ml/                   # Machine learning models
│   ├── routes/               # API blueprints
│   ├── services/             # Core business logic
│   └── requirements.txt      # Python dependencies
│
├── frontend/                 # React frontend
│   ├── public/               # Static assets
│   ├── src/                  # React source code
│   ├── package.json          # Node dependencies
│   └── vite.config.js        # Vite configuration
│
├── mysql-db/                 # Custom MySQL docker setup
│
├── docker-compose.yml        # Docker configuration
└── README.md                 # Project documentation
```

---

## Tech Stack

Frontend: React (JavaScript dialect), Vite  
Backend: Flask (Python web framework for building APIs)  
Database: MySQL (Relational Database to store our data)  
Machine Learning: Scikit-learn (To provide intelligent recommendations)  
Containerization Platform: Docker (To pack an application and all of its dependencies into a single unit called a container and run on any system that has Docker installed)  

## Referred Sites

https://react.dev/  
https://flask.palletsprojects.com/  
https://www.mysql.com/  
https://www.docker.com/  
https://scikit-learn.org/  
https://vitejs.dev/  
https://www.makemytrip.com/holidays-india/  
https://www.thomascook.in/  

## Dataset and Open-Source APIs Referred

*(Note: The following datasets and APIs were used as references to create a dummy dataset for the database)*

Kaggle Dataset : https://www.kaggle.com/datasets/dhrubangtalukdar/top-indian-places-to-visit-indian-tourism  
Kaggle Dataset : https://www.kaggle.com/datasets/rkiattisak/traveler-trip-data/data  
Open-Source API : https://dev.opentripmap.org/docs  
Icon : https://icons8.com/icons/  

## AI Usage Declaration

To be fully transparent, I used AI tools (like ChatGPT/Copilot) to help speed up repetitive tasks in this project:
- **Data Generation:** I used AI to help format and generate the dummy MySQL data based on the Kaggle datasets, as writing hundreds of rows of SQL inserts by hand is incredibly tedious.  

Everything else React UI, Flask architecture, Scikit-learn cosine similarity logic, SQL database schema, and Docker infrastructure was built by me.  

## ExploreX-Tourism Recommendation System Screenshots

### UI Screenshots
![Recommendation Form](frontend/project_screenshots/RecommendationForm.png)  
![Output Page 1](frontend/project_screenshots/Output1.png)  
![Output Page 2](frontend/project_screenshots/Output2.png)  
### Database Screenshots
![MySQL 1](frontend/project_screenshots/Mysql1.png)  
![MySQL 2](frontend/project_screenshots/Mysql2.png)
### API Screenshots
![Postman 1](frontend/project_screenshots/Postman1.png)  
![Postman 2](frontend/project_screenshots/Postman2.png)  
![Postman 3](frontend/project_screenshots/Postman3.png) 
### Docker Screenshots
![Docker Desktop 1](frontend/project_screenshots/DockerDesktop1.png)  
![Docker Desktop 2](frontend/project_screenshots/DockerDesktop2.png)

 

