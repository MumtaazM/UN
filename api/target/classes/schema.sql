DROP TABLE IF EXISTS task;

CREATE TABLE task (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    deadline DATE, 
    status VARCHAR(255)
);