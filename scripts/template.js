function getDishes(i){
    return `
        <div id="dishes_box" onclick="addMenu()">
            <div>
              <p class="dishes_box_headline">${dishes[i].name}</p>
              <p class="dishes_box_menu">${dishes[i].info}</p>
              <p class="dishes_box_price">${dishes[i].price.toFixed(2)} €</p>
            </div>
            <div class="add_btn">
              <img class="basket_icon" src="./Assets/icons/icons8-warenkorb.png" alt="">
            </div>
          </div>
    `;
}

function getSideDishes(i){
return `<div id="dishes_box" onclick="addMenu()">
            <div>
              <p class="dishes_box_headline">${sideDishes[i].name}</p>
              <p class="dishes_box_price">${sideDishes[i].price.toFixed(2)} €</p>
            </div>
            <div class="add_btn">
              <img class="basket_icon" src="./Assets/icons/icons8-warenkorb.png" alt="">
            </div>
          </div>
    `;
}