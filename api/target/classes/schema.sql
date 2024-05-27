DROP TABLE IF EXISTS task;

CREATE TABLE task (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    deadline DATE, 
    status VARCHAR(255),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- DROP TABLE IF EXISTS my_user;

-- CREATE TABLE my_user (
--     id SERIAL PRIMARY KEY,
--     username VARCHAR(255) UNIQUE,
--     password VARCHAR(255),
--     role VARCHAR(255)
-- );
