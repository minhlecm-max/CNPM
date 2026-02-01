from fastapi import FastAPI

app = FastAPI()

@app.get("/menu")
def get_menu():
    return [
        {"id": 1, "name": "Cà phê muối", "price": 30000},
        {"id": 2, "name": "Trà đào cam sả", "price": 35000},
        {"id": 3, "name": "Trà Sữa Đ4ào Nhà Hát", "price": 40000},
        {"id": 4, "name": "Milo Sữa", "price": 30000},
        {"id": 5, "name": "Sâm Dứa Sữa", "price": 40000},
        {"id": 6, "name": "Rau Má Sữa", "price": 30000},
    ]

@app.get("/")
def root():
    return {"message": "Mini S2O API is running!"}
