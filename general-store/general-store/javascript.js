// Sample Product Data
const products = [
    { id: 1, name: "Shampoo", price: 200, image: "https://via.placeholder.com/200", description: "Hair care product." },
    { id: 2, name: "Rice", price: 500, image: "https://via.placeholder.com/200", description: "Premium quality rice." },
    { id: 3, name: "Biscuits", price: 50, image: "https://via.placeholder.com/200", description: "Tasty and crispy." },
    { id: 4, name: "Washing Powder", price: 150, image: "https://via.placeholder.com/200", description: "Clean and fresh laundry." },
];

// Function to render products
function renderProducts() {
    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const productHTML = `
            <div class="col-md-3">
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <h5>${product.name}</h5>
                    <p>${product.description}</p>
                    <p class="text-success">₹${product.price}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        productList.insertAdjacentHTML("beforeend", productHTML);
    });
}

// Function to handle Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`${product.name} added to your cart!`);
    }
}

// Render products on page load
document.addEventListener("DOMContentLoaded", renderProducts);
