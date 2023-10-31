CREATE DATABASE PersoProject;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    user_id INT,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE
);

CREATE TABLE todostest(
    title VARCHAR(50) NOT NULL,
    description VARCHAR(255) NOT NULL,
);

