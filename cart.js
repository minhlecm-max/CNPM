/* ================= CONFIG ================= */

/* ================= TABLE ================= */
function getTable() {
  return new URLSearchParams(location.search).get("table")
    || localStorage.getItem("selectedTable");
}

/* ================= CART STORAGE ================= */
function getAllCarts() {
  return JSON.parse(localStorage.getItem("cartsByTable") || "{}");
}

function getCart() {
  const table = getTable();
  return getAllCarts()[table] || [];
}

/* ================= RENDER CART ================= */
function renderCart() {
  const container = document.getElementById("cart-items-container");
  if (!container) return;

  const cart = getCart();
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = `<p class="text-muted">Chưa có món nào</p>`;
    updateSummary(0);
    return;
  }

  let total = 0;

  cart.forEach(item => {
    const price = item.price * item.quantity;
    total += price;

    container.innerHTML += `
      <div class="card mb-3">
        <div class="card-body d-flex justify-content-between align-items-center">
          <div>
            <strong>${item.name}</strong><br>
            <small>${item.price.toLocaleString()}đ × ${item.quantity}</small>
          </div>
          <div class="text-danger fw-bold">
            ${price.toLocaleString()}đ
          </div>
        </div>
      </div>
    `;
  });

  updateSummary(total);
}

/* ================= SUMMARY ================= */
function updateSummary(subtotal) {
  document.getElementById("subtotal").innerText =
    subtotal.toLocaleString() + "đ";
  document.getElementById("total").innerText =
    subtotal.toLocaleString() + "đ";
}

/* ================= PLACE ORDER ================= */
async function placeOrder() {
  const table = getTable();
  const carts = getAllCarts();
  const cart = carts[table] || [];

  if (cart.length === 0) {
    alert("Giỏ hàng trống");
    return;
  }

  const payload = {
    table: Number(table),
    cart: cart.map(i => ({
      food: i.name,
      quantity: i.quantity
    }))
  };

  try {
    const res = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!res.ok) throw new Error();

    carts[table] = [];
    localStorage.setItem("cartsByTable", JSON.stringify(carts));

    alert("✅ Đã gửi đơn");
    location.href = `menu.html?table=${table}`;

  } catch {
    alert("❌ Gửi đơn thất bại");
  }
}

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", renderCart);
