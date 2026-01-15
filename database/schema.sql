-- 1. Bảng Nhà hàng
CREATE TABLE restaurants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    address TEXT,
    phone TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. Bảng Nhân viên
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    restaurant_id INTEGER,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    role TEXT CHECK(role IN ('ADMIN', 'KITCHEN', 'RECEPTION')),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

-- 3. Bảng Bàn ăn
CREATE TABLE restaurant_tables (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    restaurant_id INTEGER,
    table_number INTEGER NOT NULL,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

-- 4. Bảng Menu
CREATE TABLE menu_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    restaurant_id INTEGER,
    name TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL,
    category TEXT,
    image_url TEXT,
    is_available BOOLEAN DEFAULT 1,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

-- 5. Bảng Đơn hàng (Tổng)
CREATE TABLE orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    restaurant_id INTEGER,
    table_id INTEGER,
    total_amount REAL,
    status TEXT DEFAULT 'PENDING', -- PENDING, COMPLETED, CANCELLED
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
    FOREIGN KEY (table_id) REFERENCES restaurant_tables(id)
);

-- 6. Bảng Chi tiết đơn hàng
CREATE TABLE order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER,
    menu_item_id INTEGER,
    quantity INTEGER DEFAULT 1,
    price REAL,
    note TEXT,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (menu_item_id) REFERENCES menu_items(id)
);

-- 7. Bảng Đặt bàn
CREATE TABLE reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    restaurant_id INTEGER,
    customer_name TEXT NOT NULL,
    customer_phone TEXT,
    booking_time DATETIME,
    people_count INTEGER,
    status TEXT DEFAULT 'PENDING',
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);
