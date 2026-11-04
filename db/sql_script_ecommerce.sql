CREATE DATABASE IF NOT EXISTS ecommerce_db;
USE ecommerce_db;

DROP TABLE IF EXISTS carts;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('ADMIN', 'USER', 'STAFF') NOT NULL DEFAULT 'USER'
);

CREATE TABLE carts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_cart_user
        FOREIGN KEY (user_id) REFERENCES users(id)
) AUTO_INCREMENT = 100;



INSERT INTO users(first_name, last_name, email, password, role)
VALUES
    ('Mary', 'Jane', 'mary_jane@gmail.com', 'test123', 'ADMIN');
INSERT INTO carts(user_id)
VALUES (LAST_INSERT_ID());

INSERT INTO users(first_name, last_name, email, password)
VALUES   
    ('Peter', 'Parker', 'peter_parker@gmail.com', 'test123'),
    ('SpongeBob', 'Squarepants', 'mr_square@gmail.com', 'test123');
INSERT INTO carts(user_id)
VALUES 
    (2),
    (3);



