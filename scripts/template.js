function getDishes(dishesIndex){
    return `
        <div id="dishes_box" onclick="addMenu(${[dishesIndex]})">
            <div>
              <p class="dishes_box_headline">${dishes[dishesIndex].name}</p>
              <p class="dishes_box_menu">${dishes[dishesIndex].info}</p>
              <p class="dishes_box_price">${dishes[dishesIndex].price.toFixed(2)} €</p>
            </div>
            <div class="add_btn">
              <img class="basket_icon" src="./Assets/icons/icons8-warenkorb.png" alt="">
            </div>
          </div>
    `;
}


function getSideDishes(sideDishesindex){
return `<div id="dishes_box" onclick="addMenu()">
            <div>
              <p class="dishes_box_headline">${sideDishes[sideDishesindex].name}</p>
              <p class="dishes_box_price">${sideDishes[sideDishesindex].price.toFixed(2)} €</p>
            </div>
            <div class="add_btn">
              <img class="basket_icon" src="./Assets/icons/icons8-warenkorb.png" alt="">
            </div>
          </div>
    `;
}


function getBasket(i){
    return `<div class="basket_order">
    <p class="dishes_box_headline">${newBasket[i].name}</p>
    <div class="order_options">
      <button class="plus_btn">
        <img src="./Assets/icons/icons8-plus-weiß.png" alt="">
      </button>
      <p>${newBasket[i].amount}</p>
      <button class="minus_btn">
        <img src="./Assets/icons/icons8-minus-weiß.png" alt="">
      </button>
      <p>${newBasket[i].price.toFixed(2)} €</p>
      <button class="delete_btn">
        <img src="./Assets/icons/icons8-müll-white.png" alt="">
      </button>
    </div>
  </div>
`;
}
