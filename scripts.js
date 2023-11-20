document.addEventListener('DOMContentLoaded', function () {
    loadStockInventoryData();
});

function loadStockInventoryData() {
    // Replace this data with actual stock inventory data
    var stockInventoryData = [
        { productId: 1, productName: "Product A", availableQuantity: 10 },
        { productId: 2, productName: "Product B", availableQuantity: 20 },
        { productId: 3, productName: "Product C", availableQuantity: 15 }
    ];

    populateTable(stockInventoryData);
}

function populateTable(data) {
    var tableBody = document.querySelector('#stockTable tbody');

    // Clear existing table rows
    tableBody.innerHTML = '';

    // Populate the table with stock inventory data
    data.forEach(function (item) {
        var row = `<tr>
                        <td>${item.productId}</td>
                        <td>${item.productName}</td>
                        <td>${item.availableQuantity}</td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
}

function addProduct() {
    var productName = document.getElementById('productName').value;
    var quantity = document.getElementById('quantity').value;

    // Validate inputs
    if (productName.trim() === '' || isNaN(quantity) || quantity < 0) {
        alert('Please enter valid product name and quantity.');
        return;
    }

    // Replace this with actual logic to add the product to the inventory
    // For now, just log the details to the console
    console.log(`Product Name: ${productName}, Quantity: ${quantity}`);

    // Simulate reloading the stock inventory data after adding a product
    loadStockInventoryData();

    // Clear the form inputs
    document.getElementById('productName').value = '';
    document.getElementById('quantity').value = '';
}
