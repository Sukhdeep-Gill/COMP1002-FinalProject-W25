document.addEventListener('DOMContentLoaded', function() {
    // Select the relevant elements from the DOM
    const productSelect = document.getElementById("memory");  // Select dropdown for products
    const quantityInput = document.getElementById("quantity");  // Input field for quantity
    const totalPriceElement = document.querySelector(".total-price");  // Element to display the total price
    const checkoutButton = document.getElementById("proceed-to-checkout");  // Checkout button

    // Define the prices for each product
    const productPrices = {
        666.66: 'Apple 1',
        1298: 'Apple II',
        4567: 'Apple III',
        9999.76: 'Lisa',
        2398.87: 'Macintosh',
        6500.89: 'Macintosh Portable',
        2298.76: 'PowerBook Series',
    };

    // Function to calculate the total price
    function calculateTotal() {
        const selectedPrice = parseFloat(productSelect.value);  // Get the selected price
        const quantity = parseInt(quantityInput.value);  // Get the quantity
        const total = selectedPrice * quantity;  // Calculate the total price
        
        // Update the total price displayed on the page
        totalPriceElement.innerText = `$${total.toFixed(2)}`;
    }

    // Event listeners for changes in the select and quantity input fields
    productSelect.addEventListener('change', calculateTotal);  // Trigger total update when product changes
    quantityInput.addEventListener('input', calculateTotal);  // Trigger total update when quantity changes

    // Handle the click event for the checkout button
    checkoutButton.addEventListener('click', function() {
        const selectedPrice = parseFloat(productSelect.value);
        const quantity = parseInt(quantityInput.value);
        const total = selectedPrice * quantity;
        const selectedProduct = productPrices[selectedPrice];
        
        // Show the order summary in an alert (you can replace this with a real checkout page)
        const orderSummary = `You have selected ${quantity} x ${selectedProduct}.\nTotal: $${total.toFixed(2)}`;
        alert(orderSummary);

        // Optionally, redirect to a checkout page (you can replace this with your checkout page URL)
        // window.location.href = "checkout.html";  // Uncomment and replace with your actual checkout page URL

        // For demonstration, I'll log the details to the console
        console.log(`Proceeding to checkout for ${quantity} x ${selectedProduct} - Total: $${total.toFixed(2)}`);
    });

    // Initial calculation when the page loads (in case of default values)
    calculateTotal();
});
