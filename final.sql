
CREATE DATABASE IF NOT EXISTS restaurant_menu CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE restaurant_menu;

DROP TABLE IF EXISTS orders;

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,        -- Mã đơn hàng tự tăng
    customer VARCHAR(255) NOT NULL,           -- Tên khách hàng
    table_number INT NOT NULL,                -- Số bàn

    order_data LONGTEXT NOT NULL,             

    status VARCHAR(50) DEFAULT 'new',         

    created_at DATETIME DEFAULT CURRENT_TIMESTAMP 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO orders (customer, table_number, order_data, status) 
VALUES 
(
    'Khách Test SQL', 
    5, 
    '[{"food": "Trà sữa Truyền thống", "quantity": 2, "price": 25000}, {"food": "Bánh tráng trộn", "quantity": 1, "price": 15000}]', 
    'new'
);

-- Kiểm tra lại kết quả
SELECT * FROM orders;
SELECT * FROM restaurant_menu.orders;
SELECT * FROM orders;

USE restaurant_menu;
SELECT * FROM orders;
