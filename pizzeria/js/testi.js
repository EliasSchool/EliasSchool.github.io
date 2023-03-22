const pizza = document.getElementById("row1")
const pizzateksti = document.getElementById("rowi1")
const juomateksti = document.getElementById("rowi2")
const juoma = document.getElementById("row2")
const fantasai = document.getElementById("rowi3")
document.addEventListener("DOMContentLoaded", function() {
  pizza.style.display = "flex"
  pizzateksti.style.display = "block"
  juoma.style.display = "none"
  juomateksti.style.display = "none"
  fantasai.style.display = "none"
  console.log(localStorage.getItem("ostoskori").length)
  if(localStorage.getItem("ostoskori").length === 0) {
      localStorage.setItem("ostoskori", "[]")
  }
}) 

const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

if(!localStorage.getItem("ostoskori").length < 0){
  localStorage.setItem("ostoskori", []);
}

addToCartBtns.forEach(function(btn, index) {
  const koko = document.querySelectorAll('.koko-valinta');
  btn.addEventListener('click', function() {
    console.log(koko[index].value)
    const name = btn.dataset.name;
    const price = btn.dataset.price;
    const item = {name: name, price: price, koko: koko[index].value};
    const kori = localStorage.getItem("ostoskori");

    if (!kori) {
        localStorage.removeItem("ostoskori");
    }

    let cart = JSON.parse(localStorage.getItem('ostoskori')) || [];
    cart.push(item);
    localStorage.setItem('ostoskori', JSON.stringify(cart));

    const notification = document.getElementById("notification");
    notification.innerHTML = `${name} (${koko[index].value}) on lisätty ostoskoriin`;
    notification.style.display ="block";

    setTimeout(() => {
        notification.style.display = "none";
    }, 3000);

  });
});

if (koko === "iso") {
  totalPrice = totalPrice + 5.50
}

function juomat() {
  juoma.style.display ="flex"
  juomateksti.style.display = "block"
  pizza.style.display = "none"
  pizzateksti.style.display = "none"
  fantasai.style.display = "none"

}

function pizzat() {
  pizza.style.display = "flex"
  pizzateksti.style.display = "block"
  juoma.style.display = "none"
  juomateksti.style.display = "none"
  fantasai.style.display = "none"

}

function fantasia() {
  pizza.style.display = "none"
  pizzateksti.style.display = "none"
  juoma.style.display = "none"
  juomateksti.style.display = "none"
  fantasai.style.display = "block"
}