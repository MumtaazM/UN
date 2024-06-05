CREATE SEQUENCE users_seq START 1;

CREATE TABLE users (
    id BIGINT DEFAULT nextval('users_seq') PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) DEFAULT 'USER'
);

CREATE TABLE task (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    deadline DATE, 
    status VARCHAR(255),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- INSERT INTO task (id, title, description, deadline, status, user_id) VALUES (1, 'Task 1', 'Description 1', '2021-12-31', 'COMPLETED', 252);
-- INSERT INTO task (id, title, description, deadline, status, user_id) VALUES (2, 'Task 2', 'Description 1', '2021-12-31', 'IN_PROGRESS', 252);
-- INSERT INTO task (id, title, description, deadline, status, user_id) VALUES (3, 'Task 3', 'Description 1', '2021-12-31', 'COMPLETED', 302);
-- INSERT INTO task (id, title, description, deadline, status, user_id) VALUES (4, 'Task 2', 'Description 1', '2021-12-31', 'IN_PROGRESS', 252);

-- INSERT INTO task (id, title, description, deadline, status, user_id) VALUES (5, 'Task dsf', 'Description 1', '2021-12-31', 'COMPLETED', 302);
-- INSERT INTO task (id, title, description, deadline, status, user_id) VALUES (12, 'Task dsf', 'Description 1', '2021-12-31', 'IN_PROGRESS', 302);
-- INSERT INTO task (id, title, description, deadline, status, user_id) VALUES (30, 'Task saf', 'Description 1', '2021-12-31', 'COMPLETED', 252);
-- INSERT INTO task (id, title, description, deadline, status, user_id) VALUES (6, 'Task dsf', 'Description 1', '2021-12-31', 'IN_PROGRESS', 252);