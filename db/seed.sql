DROP DATABASE IF EXISTS stockapp_db;
CREATE DATABASE stockapp_db;

\c stockapp_db

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE,
    password VARCHAR UNIQUE,
    avatar_url VARCHAR NOT NULL,
    is_deleted BOOLEAN
);

CREATE TABLE stocks (
    id SERIAL PRIMARY KEY,
    symbol VARCHAR NOT NULL,
    company VARCHAR NOT NULL,
    is_deleted BOOLEAN
);

CREATE TABLE user_stocks (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    stock_id INT REFERENCES stocks(id),
    is_deleted BOOLEAN,
    UNIQUE(user_id, stock_id)
);

CREATE TABLE user_relations (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    relation_id INT REFERENCES users(id),
    is_deleted BOOLEAN
);

