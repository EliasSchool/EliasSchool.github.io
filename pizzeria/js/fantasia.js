// haetaan halutut tiedot htmllästä
const pohjaSelect = document.getElementById('pohja');
const kastikeSelect = document.getElementById('kastike');
const toppingsCheckboxes = document.getElementsByName('toppings');

// lisätään addEventlisteneri joka runnaa kun buttonia painetaan
const addToCartBtn = document.getElementById('order-button');
addToCartBtn.addEventListener('click', addToCart);

// Functio joka lisää valitun tuotteen ostoskoriin 
function addToCart() {
  // Hakee täytteitten tiedot
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
  // Luodaan pizza objekti jossa on hinta ja täytteet sun muut
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

  // Haetaan ostoskorin tiedot ja jos ei löydy niin lisätään tyhjä lista
  let cartItems = JSON.parse(localStorage.getItem('ostoskori')) || [];

  // Lisätään pizza ostoskoriin
  cartItems.push(pizza);

  // Lisätään päivitetty ostoskori localstorageen
  localStorage.setItem('ostoskori', JSON.stringify(cartItems));

  // Show success message to user
  alert('Pizza added to cart!');
}
