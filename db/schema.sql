DROP DATABASE IF EXISTS animal_db;
CREATE DATABASE animal_db;

USE animal_db;

CREATE TABLE animals (
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(20),
    noise VARCHAR(20),
    PRIMARY KEY (id)
);
