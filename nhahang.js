const list = document.getElementById('order-list');

/* =========================
   LẤY ĐƠN TỪ LOCAL STORAGE
   ========================= */
let orders = JSON.parse(localStorage.getItem("orders")) || [];
let currentFilter = 'all';

/* =========================
   HÀM LƯU DỮ LIỆU
   ========================= */
function saveOrders() {
    localStorage.setItem("orders", JSON.stringify(orders));
}

/* =========================
   HIỂN THỊ ĐƠN HÀNG
   ========================= */
function renderOrders() {
    list.innerHTML = '';

    orders
        .filter(o => currentFilter === 'all' || o.status === currentFilter)
        .forEach(order => {
            const card = document.createElement('li');
            card.className = 'order-card';
            if (order.status === 'done') card.classList.add('completed');

            card.innerHTML = `
        <img src="${order.image || 'https://images.unsplash.com/photo-1551218808-94e220e084d2'}">
        <div class="card-body">
          <div class="food-name">${order.food}</div>
          <div class="quantity">Số lượng: ${order.quantity}</div>
          <span class="status ${order.status}">
            ${order.status === 'new' ? 'MỚI' :
                    order.status === 'doing' ? 'ĐANG LÀM' : 'HOÀN THÀNH'}
          </span>

          <div class="actions">
            <button class="btn-doing">Đang làm</button>
            <button class="btn-done">Xong</button>
            <button class="btn-delete">Xóa</button>
          </div>
        </div>
      `;

            /* ===== SỰ KIỆN ===== */
            card.querySelector('.btn-doing').onclick = () => {
                order.status = 'doing';
                saveOrders();
                renderOrders();
            };

            card.querySelector('.btn-done').onclick = () => {
                order.status = 'done';
                saveOrders();
                renderOrders();
            };

            card.querySelector('.btn-delete').onclick = () => {
                orders = orders.filter(o => o.id !== order.id);
                saveOrders();
                renderOrders();
            };

            list.appendChild(card);
        });
}

/* =========================
   LỌC TRẠNG THÁI
   ========================= */
function filterStatus(status) {
    currentFilter = status;
    renderOrders();
}

/* =========================
   TỰ ĐỘNG CẬP NHẬT
   (KHI KHÁCH ĐẶT MÓN)
   ========================= */
let lastData = JSON.stringify(orders);

setInterval(() => {
  const newData = JSON.stringify(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  if (newData !== lastData) {
    orders = JSON.parse(newData);
    lastData = newData;
    renderOrders();
  }
}, 2000);


/* =========================
   CHẠY LẦN ĐẦU
   ========================= */
renderOrders();
