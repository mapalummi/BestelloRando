function init(){
    renderMainDishes()
    renderSideDishes()
    renderInfoField()
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

  renderInfoField()
}




// add-Button TEST:
function increaseAmount(i){
    newBasket[i].amount += 1
    newBasket[i].price += newBasket[i].price
  
    setFilterMethod()
  }



// Add-Button Warenkorb:
// function increaseAmount(i){
//   newBasket[i].amount += 1
//   newBasket[i].price += 5.90

//   setFilterMethod()
// }

// Sub-Button Warenkorb:
function decreaseAmount(i){

  if (newBasket[i].amount > 1) {
    newBasket[i].amount -= 1
    // newBasket[i].price -= 5.90
  } 

  // newBasket[i].amount -= 1

  setFilterMethod()
}

// Delete-Button Warenkorb:
function deleteFromBasket(i){
  newBasket[i].amount = 0
  // newBasket[i].price = 0

  setFilterMethod()
}




function renderInfoField(){

  let hiddenInfo = document.getElementById('render_basket_order').innerHTML;

  if (hiddenInfo !== "" || null || 0) {
    document.getElementById('hidden_info_container').classList.add("d_none");
  } else {
    document.getElementById('hidden_info_container').classList.remove("d_none");
  } 
}


function showOverlay(){
  document.getElementById('basket_overlay').classList.remove("d_none");
}

