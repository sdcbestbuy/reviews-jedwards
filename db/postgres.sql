-- DROP DATABASE allReviews;
CREATE SCHEMA [IF NOT EXISTS] allReviews;

DROP TABLE reviews;

CREATE TABLE reviews (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    review VARCHAR(255),
)

