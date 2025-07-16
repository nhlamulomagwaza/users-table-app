



CREATE TABLE IF NOT EXISTS users (
   id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    date_of_birth DATE NOT NULL,
    occupation VARCHAR(100) NOT NULL,
    gender VARCHAR(8) NOT NULL,
     date_added DATE NOT NULL DEFAULT CURRENT_DATE
);

