let inventory = [];
let invoices = [];

// Display Products
function displayProducts() {
    const inventoryList = document.getElementById('inventory-list');
    const adjustProductName = document.getElementById('adjust-product-name');
    const invoiceProduct = document.getElementById('invoice-product');

    inventoryList.innerHTML = '';
    adjustProductName.innerHTML = '';
    invoiceProduct.innerHTML = '';

    inventory.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        
        productDiv.innerHTML = `
            <h4>${product.name}</h4>
            <p>Quantity: ${product.quantity}</p>
            <p>Price: ₹${product.price}</p>
        `;
        
        inventoryList.appendChild(productDiv);

        const option = document.createElement('option');
        option.value = index;
        option.text = product.name;
        adjustProductName.appendChild(option);
        invoiceProduct.appendChild(option);
    });
}

// Add Product
document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('product-name').value;
    const quantity = parseInt(document.getElementById('product-quantity').value);
    const price = parseFloat(document.getElementById('product-price').value);
    
    if (name && quantity > 0 && price > 0) {
        const newProduct = { name, quantity, price };
        inventory.push(newProduct);
        displayProducts();
    } else {
        alert('Please provide valid product details.');
    }

    document.getElementById('add-product-form').reset();
});

// Adjust Stock
document.getElementById('adjust-stock-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const index = parseInt(document.getElementById('adjust-product-name').value);
    const quantity = parseInt(document.getElementById('adjust-quantity').value);
    
    if (index >= 0 && quantity !== 0) {
        inventory[index].quantity += quantity;
        displayProducts();
    } else {
        alert('Please enter valid details.');
    }

    document.getElementById('adjust-stock-form').reset();
});

// Generate Invoice
document.getElementById('generate-invoice-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const index = parseInt(document.getElementById('invoice-product').value);
    const quantity = parseInt(document.getElementById('invoice-quantity').value);
    
    if (index >= 0 && quantity > 0 && inventory[index].quantity >= quantity) {
        inventory[index].quantity -= quantity;
        const totalAmount = inventory[index].price * quantity;
        invoices.push({ product: inventory[index].name, quantity, totalAmount });
        displayProducts();
        alert(`Invoice Generated! Total: ₹${totalAmount}`);
    } else {
        alert('Insufficient stock or invalid details.');
    }

    document.getElementById('generate-invoice-form').reset();
});

// Generate Report
document.getElementById('generate-report-btn').addEventListener('click', function() {
    let totalStockValue = 0;
    inventory.for
