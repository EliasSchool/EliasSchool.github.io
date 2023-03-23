const removeitems = document.getElementById("clear-cart")

document.addEventListener("DOMContentLoaded", function() {
    // Checkataan jos ostoskorissa löytyy tavaraa
    if (localStorage.getItem("ostoskori")) {
      const ostoskori = JSON.parse(localStorage.getItem("ostoskori"));
  
  // Luodaan HTML-taulukko ostoskorin tuotteille
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const nameHeader = document.createElement("th");
  
  
  nameHeader.textContent = "Tuote";
  nameHeader.style.paddingLeft = "30px";
  const priceHeader = document.createElement("th");
  priceHeader.textContent = "Hinta";
  priceHeader.style.paddingLeft = "65px";
  const koko = document.createElement("th");
  koko.textContent = "Koko"
  koko.style.paddingLeft = "40px";
  const topping = document.createElement("th") 
  topping.textContent = "Täytteet"
  topping.style.paddingLeft = "40px";
  const removeHeader = document.createElement("th");
  removeHeader.textContent = "Poista";
  removeHeader.style.paddingLeft = "75px";

  headerRow.appendChild(nameHeader);
  headerRow.appendChild(priceHeader);
  headerRow.appendChild(koko)
  headerRow.appendChild(topping);
  headerRow.appendChild(removeHeader);
  thead.appendChild(headerRow);
  table.appendChild(thead);
  
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  // Käydään läpi ostoskorin tuotteet ja luodaan taulukon rivit
  let totalPrice = 0; // Alustetaan kokonaishintamuuttuja
  const totalDiv = document.createElement("div"); // Luodaan elementti kokonaishinnan näyttämistä varten
  totalDiv.textContent = `Kokonaishinta: €${totalPrice.toFixed(2)}`;
  const cartContainer = document.querySelector("#cart-container"); // Haetaan kontainerielementti
  cartContainer.appendChild(table); // Lisätään taulukko kontaineriin
  cartContainer.appendChild(totalDiv); // Lisätään kokonaishinta kontaineriin

  ostoskori.forEach(function(item, index) {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    console.log(item, index)
    const priceCell = document.createElement("td");
    const price = parseFloat(item.price.replace("€", "").trim()); // Poistetaan €-merkki ja muunnetaan numeroksi
    priceCell.textContent = `€${price.toFixed(2)}`; // Lisätään €-merkki takaisin ja muotoillaan valuuttana
    const kokoCell = document.createElement("td")
    kokoCell.textContent = item.koko
    const toppingCell  = document.createElement("td")

    const removeCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.style.backgroundColor = "transparent"
    removeButton.style.border = "none"

    removeButton.addEventListener("click", function() {
      ostoskori.splice(index, 1); // Poistetaan tuote taulukosta
      localStorage.setItem("ostoskori", JSON.stringify(ostoskori)); // Päivitetään paikallinen tallennustila
      totalPrice -= price; // Vähennetään poistetun tuotteen hinta kokonaishinnasta
      totalDiv.textContent = `Kokonaishinta: €${totalPrice.toFixed(2)}`; // Päivitetään kokonaishinta sivulla
      row.remove(); // Poistetaan rivi taulukosta
      if (ostoskori.length === 0) {
        localStorage.setItem("ostoskori", []); // Asetetaan "ostoskori" tyhjäksi taulukoksi paikalliseen tallennustilaan
        location.reload(); // Ladataan sivu uudelleen
      }
    });
        removeCell.appendChild(removeButton);
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(kokoCell);
        row.appendChild(toppingCell)
        row.appendChild(removeCell);
        tbody.appendChild(row);
        totalPrice += price; // Lisätään hintaa jokasesta pizzasta 
      });
  
      // Päivitetään lopullinen hinta 
      totalDiv.textContent = `Kokonaishinta: €${totalPrice.toFixed(2)}`;
    } else {
        removeitems.style.display ="none"
        const emptyCartMessage = document.createElement("p");
        emptyCartMessage.textContent = "Ostoskori on tyhjä.";
        const cartContainer = document.querySelector("#cart-container");
        cartContainer.appendChild(emptyCartMessage);
        return;
    }
  });


  removeitems.addEventListener("click", () => {
    // Get the table body and total price element
    const totalDiv = document.querySelector("#cart-container div");
     
    // Tyhjennetään ostoskori localstoragesta
    localStorage.setItem("ostoskori", "[]");
    
    // Päiviteetän lopullinen hinta 
    totalDiv.textContent = `Kokonaishinta: €0.00`;
    location.reload()

  });