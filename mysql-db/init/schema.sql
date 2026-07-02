CREATE TABLE IF NOT EXISTS domestic_packages (
    package_id VARCHAR(20) PRIMARY KEY,
    package_name VARCHAR(255) NOT NULL,
    country VARCHAR(100) NOT NULL,
    cities_covered TEXT NOT NULL,
    duration VARCHAR(100),
    hotel_category VARCHAR(50),
    meals VARCHAR(255),
    transportation VARCHAR(255),
    major_attractions TEXT,
    activities TEXT,
    package_type VARCHAR(100),
    best_for VARCHAR(255),
    rating DECIMAL(2,1),
    estimated_cost DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS international_packages (
    package_id VARCHAR(20) PRIMARY KEY,
    package_name VARCHAR(255) NOT NULL,
    country VARCHAR(100) NOT NULL,
    cities_covered TEXT NOT NULL,
    duration VARCHAR(100),
    hotel_category VARCHAR(50),
    meals VARCHAR(255),
    transportation VARCHAR(255),
    major_attractions TEXT,
    activities TEXT,
    package_type VARCHAR(100),
    best_for VARCHAR(255),
    rating DECIMAL(2,1),
    estimated_cost DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);