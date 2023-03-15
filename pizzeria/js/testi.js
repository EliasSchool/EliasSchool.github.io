const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
localStorage.setItem("ostoskori", [])
addToCartBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    const name = btn.dataset.name;
    const price = btn.dataset.price;
    const item = {name: name, price: price};
    const kori = localStorage.getItem("ostoskori")
    if (!kori) {
        localStorage.removeItem("ostoskori")
    }

    let cart = JSON.parse(localStorage.getItem('ostoskori')) || [];
    console.log(cart)
    cart.push(item);
    localStorage.setItem('ostoskori', JSON.stringify(cart));

    const notification = document.getElementById("notification")
    notification.innerHTML = `${name} on lisätty ostoskoriin`
    notification.style.display ="block"
    setTimeout(() => {
        notification.style.display = "none"
    }, 3000);

  });
});