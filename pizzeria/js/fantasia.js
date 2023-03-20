// Get the necessary elements from the HTML
const pohjaSelect = document.getElementById('pohja');
const kastikeSelect = document.getElementById('kastike');
const toppingsCheckboxes = document.getElementsByName('toppings');

// Add event listener to the add to cart button
const addToCartBtn = document.getElementById('order-button');
addToCartBtn.addEventListener('click', addToCart);

// Function to add selected pizza to the cart
function addToCart() {
  // Get selected values from the dropdowns and checkboxes
  const pohja = pohjaSelect.value;
  const kastike = kastikeSelect.value;
  const toppings = [];
  let totalPrice = 0;

  toppingsCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      toppings.push(checkbox.value);
      totalPrice += parseFloat(checkbox.dataset.price);
    }
  });
  totalPrice = totalPrice + 9.90
  // Create pizza object with selected options and total price
  const pizza = {
    name: "Fantasia",
    price: String(totalPrice),  
    taute: [
        {
        pohja: pohja,
        kastike: kastike,
        toppings: toppings
        }] 
  };

  // Get existing cart items from localStorage or create an empty array
  let cartItems = JSON.parse(localStorage.getItem('ostoskori')) || [];

  // Add the pizza to the cart
  cartItems.push(pizza);

  // Save the updated cart items to localStorage
  localStorage.setItem('ostoskori', JSON.stringify(cartItems));

  // Show success message to user
  alert('Pizza added to cart!');
}
