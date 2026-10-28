CREATE DATABASE IF NOT EXISTS ecommerce_db;
USE ecommerce_db;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('ADMIN', 'USER', 'STAFF') NOT NULL DEFAULT 'USER'
);

INSERT INTO users(first_name, last_name, email, password, role)
VALUES
    ('Mary', 'Jane', 'mary_jane@gmail.com', 'test123', 'ADMIN');

INSERT INTO users(first_name, last_name, email, password)
VALUES   
    ('Peter', 'Parker', 'peter_parker@gmail.com', 'test123'),
    ('SpongeBob', 'Squarepants', 'mr_square@gmail.com', 'test123');



