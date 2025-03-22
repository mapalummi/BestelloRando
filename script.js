function init(){
    renderMainDishes()
    renderSideDishes()
   
}


// Gerichte rendern:
function renderMainDishes(){
  document.getElementById('render_dishes').innerHTML = "";

  for (let dishesIndex = 0; dishesIndex < dishes.length; dishesIndex++) {
        document.getElementById('render_dishes').innerHTML += getDishes(dishesIndex);
  } 
}

function renderSideDishes(){

  for (let sideDishesindex = 0; sideDishesindex < sideDishes.length; sideDishesindex++) {
    document.getElementById('render_side_dishes').innerHTML += getSideDishes(sideDishesindex);
  }
}


// Menü hinzufügen zum Warenkorb:
function addMenu(dishesIndex){
  dishes[dishesIndex].amount += 1

  setFilterMethod()
}


// Filter Methode:
function setFilterMethod(){

  newBasket = dishes.filter(dish => dish.amount > 0);

  renderNewBasket()
}


// Warenkorb rendern:
function renderNewBasket(){
  document.getElementById('render_basket_order').innerHTML = "";

  for (let i = 0; i < newBasket.length; i++) {
    document.getElementById('render_basket_order').innerHTML += getBasket(i);
  }
}


// Add-Button Warenkorb:
function increaseAmount(i){
  newBasket[i].amount += 1

  setFilterMethod()
}


// Hier noch die Reduktion bis auf max 1 beschränken!!!
// Sub-Button Warenkorb:
function decreaseAmount(i){
  newBasket[i].amount -= 1

  setFilterMethod()
}


// Delete-Button Warenkorb:
function deleteFromBasket(i){
  document.getElementById(`basket_order_content${[i]}`).innerHTML = "";
}