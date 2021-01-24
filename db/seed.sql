DROP DATABASE if exists stockapp_db;
CREATE DATABASE stockapp_db;

\c stockapp_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    avatar_url VARCHAR NOT NULL,
    is_deleted BOOLEAN
);

CREATE TABLE stocks (
    id SERIAL PRIMARY KEY,
    ticker VARCHAR NOT NULL,
    company VARCHAR NOT NULL,
    
    is_deleted BOOLEAN
)
CREATE TABLE user_stocks (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    stock_id INT REFERENCES stocks(id),
    is_deleted BOOLEAN,
    UNIQUE(user_id, stock_id)
)