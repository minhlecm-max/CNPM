-- =========================
-- Database Schema: S2O (Scan2Order)
-- SQL Server Version
-- =========================

-- Table: Restaurant
CREATE TABLE Restaurant (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(255) NOT NULL
);

-- Table: Menu
CREATE TABLE Menu (
    id INT IDENTITY(1,1) PRIMARY KEY,
    restaurant_id INT NOT NULL,
    name NVARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    CONSTRAINT fk_menu_restaurant
        FOREIGN KEY (restaurant_id)
        REFERENCES Restaurant(id)
        ON DELETE CASCADE
);

-- Table: [Order]
CREATE TABLE [Order] (
    id INT IDENTITY(1,1) PRIMARY KEY,
    restaurant_id INT NOT NULL,
    table_id INT NOT NULL,
    status NVARCHAR(50) NOT NULL,
    CONSTRAINT fk_order_restaurant
        FOREIGN KEY (restaurant_id)
        REFERENCES Restaurant(id)
        ON DELETE CASCADE
);
