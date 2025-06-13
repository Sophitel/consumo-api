const API_URL = 'https://fakestoreapi.com/products';

async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    renderProducts(data);
  } catch (error) {
    console.error("Error al obtener productos:", error);
  }
}

function renderProducts(products) {
  const container = document.getElementById('product-list');
  container.innerHTML = '';

  products.forEach(product => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${product.image.replace('http://', 'https://')}" class="card-img-top p-3" style="height: 300px; object-fit: contain;">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">$${product.price}</p>
            <p class="card-text">${product.description.slice(0, 100)}...</p>
          </div>
        </div>
      </div>
    `;
  });
}

fetchProducts();
