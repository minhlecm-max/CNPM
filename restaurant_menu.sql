DROP DATABASE IF EXISTS restaurant_menu;
CREATE DATABASE restaurant_menu;
USE restaurant_menu;

CREATE TABLE menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price INT NOT NULL
);

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    order_data JSON NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO menu (name, price) VALUES
('Phở Bò', 50000),
('Bánh Mì', 25000);
USE restaurant_menu;

