const addToCartButton = document.getElementById('add-to-cart-button');
const menuItemCheckboxes = document.querySelectorAll('.menu-item-checkbox');

let cartItems = [];

addToCartButton.addEventListener('click', () => {
  cartItems = [];
  localStorage.setItem("ostoskori",JSON.stringify(cartItems))

  menuItemCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const menuItem = checkbox.closest('.row').querySelector('h4').innerText;
      const menuPrice = checkbox.closest('.row').querySelector('.menu-price').innerText;
      cartItems.push({ name: menuItem, price: menuPrice });
    }
  });
  let ostoskori = JSON.stringify(cartItems)
  localStorage.setItem("ostoskori", ostoskori)
  const joo = localStorage.getItem("ostoskori")
  console.log(joo)
});