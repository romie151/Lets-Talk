DROP DATABASE IF EXISTS lets_talk;
CREATE DATABASE lets_talk;

\c lets_talk;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR NOT NULL,
    lastname VARCHAR NOT NULL
);