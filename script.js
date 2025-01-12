document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productQuantity = document.getElementById('product-quantity').value;
    const productPrice = document.getElementById('product-price').value;

    const product = {
        name: productName,
        quantity: productQuantity,
        price: productPrice
    };

    displayProduct(product);
    // Save this product to the server via AJAX or fetch API for database storage
});

function displayProduct(product) {
    const inventoryList = document.getElementById('inventory-list');
    const productDiv = document.createElement('div');
    productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Quantity: ${product.quantity}</p>
        <p>Price: ₹${product.price}</p>
        <hr>
    `;
    inventoryList.appendChild(productDiv);
}
