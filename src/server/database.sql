CREATE DATABASE PersoProject;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    user_id INT,
    title VARCHAR(50),
    description VARCHAR(255),
    completed BOOLEAN DEFAULT FALSE
);