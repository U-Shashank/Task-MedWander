CREATE DATABSE task;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    formType VARCHAR(1) NOT NULL 
);