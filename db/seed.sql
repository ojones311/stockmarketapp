DROP DATABASE IF EXISTS stockapp_db;
CREATE DATABASE stockapp_db;

\c stockapp_db

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE,
    email VARCHAR UNIQUE,
    password VARCHAR,
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

CREATE TABLE following (
    user_id INT REFERENCES users(id),
    follower_id INT REFERENCES users(id),
    active_status BOOLEAN
);


--INSERT USERS
INSERT INTO users (username, email, password, avatar_url, is_deleted) 
    VALUES('Owen','owenjones@pursuit.org','','',false),
      ('Kalee','kaleestewart@pursuit.org','','',false),
      ('Dustin','dustingrear@gmail.org','','',false),
      ('Song','songteach@gmail.org','','',false),
      ('Jabari','jabariwashington@pursuit.org','','',false);

--INSERT STOCKS
INSERT INTO stocks (symbol, company, is_deleted)
    VALUES('AAPL', 'Apple Inc', false),
        ('TSLA', 'Tesla Motors Inc',false),
        ('NRG', 'NRG Energy Inc',false),
        ('JNJ', 'Johnson & Johnson', false),
        ('ZM','Zoom Video Communications Inc',false),
        ('AMZN', 'Amazon.com Inc', false),
        ('MSFT', 'Microsoft Corporation',false),
        ('MRNA', 'Moderna Inc', false);

-- USERS_STOCKS
INSERT INTO user_stocks (user_id, stock_id, is_deleted)
    VALUES(1,1,false),
        (2,2,false),
        (3,3,false),
        (4,4,false),
        (5,5,false),
        (5,6,false),
        (1,7,false),
        (3,8,false);


-- FOLLOWING
INSERT INTO following (user_id, follower_id, active_status)
    VALUES(1,2, true),
        (2,5, true),
        (1,3, true),
        (1,5, true),
        (2,1, true),
        (5,2, true),
        (3,1, true),
        (4,3, true),
        (3,1, true),
        (3,5, true),
        (4,2, true),
        (2,3, true);