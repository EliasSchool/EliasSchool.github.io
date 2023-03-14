const addToCartButton = document.getElementById('add-to-cart-button');
const menuItemCheckboxes = document.querySelectorAll('.menu-item-checkbox');
const cartItemsDropdown = document.getElementById('cart-items');
const notification = document.getElementById("notification")

addToCartButton.addEventListener('click', () => {
  const cartItems = [];
  menuItemCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const menuItem = checkbox.closest('.row').querySelector('h4').innerText;
      const menuPrice = checkbox.closest('.row').querySelector('.menu-price').innerText;
      cartItems.push({ name: menuItem, price: menuPrice });
      checkbox.checked = false
    }
  });
  console.log(cartItems)
  localStorage.setItem("ostoskori", JSON.stringify(cartItems));

  // Display a notification that items have been added to the cart
  if (cartItems.length > 0) {
    if(cartItems.length === 1) {
        notification.textContent = `${cartItems.length} tuote lisätty ostoskoriin`;
    } else {
        notification.textContent = `${cartItems.length} tuotetta lisätty ostoskoriin`;
    }
    notification.style.display = 'block';
    // Hide the notification after 3 seconds
    setTimeout(() => {
      notification.style.display = 'none';
    }, 3000);
  }
});
