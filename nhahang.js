if (typeof API_URL === "undefined") {
  alert("❌ API_URL chưa được load (thiếu config.js)");
  throw new Error("API_URL missing");
}

const ordersContainer = document.getElementById("orders");
let currentFilter = "all";

async function fetchOrders() {
  const res = await fetch(`${API_URL}/orders`);
  const orders = await res.json();
  renderOrders(orders);
}

function renderOrders(orders) {
  ordersContainer.innerHTML = "";

  const list = currentFilter === "all"
    ? orders
    : orders.filter(o => o.status === currentFilter);

  if (list.length === 0) {
    ordersContainer.innerHTML = "<p>Chưa có đơn</p>";
    return;
  }

  list.forEach(o => {
    const items = (o.order_data || []).map(i =>
      `<div>${i.food} x${i.quantity}</div>`
    ).join("");

    ordersContainer.innerHTML += `
      <div class="order-card">
        <b>Bàn ${o.table_number}</b> (${o.status})<br>
        ${items}
        <br>
        ${o.status === "new" ? `<button onclick="updateStatus(${o.id},'doing')">Nhận</button>` : ""}
        ${o.status === "doing" ? `<button onclick="updateStatus(${o.id},'done')">Xong</button>` : ""}
        <button onclick="deleteOrder(${o.id})">Xóa</button>
      </div>
    `;
  });
}

async function updateStatus(id, status) {
  await fetch(`${API_URL}/orders/${id}/${status}`, { method: "PUT" });
  fetchOrders();
}

async function deleteOrder(id) {
  await fetch(`${API_URL}/orders/${id}`, { method: "DELETE" });
  fetchOrders();
}

function setFilter(f) {
  currentFilter = f;
  fetchOrders();
}

setInterval(fetchOrders, 2000);
fetchOrders();
