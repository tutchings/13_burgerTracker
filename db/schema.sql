-- drops burger_db if it already exists
DROP DATABASE IF EXISTS burger_db;

-- creates burger_db
CREATE DATABASE burger_db;

-- ensures the remaining code will alter the burger_db
USE burger_db;

-- creates table called burgers
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);