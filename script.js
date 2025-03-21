function init(){
    renderMainDishes()
    renderSideDishes()
}

// Gerichte rendern
function renderMainDishes(){
    
    for (let i = 0; i < dishes.length; i++) {
        document.getElementById('render_dishes').innerHTML += getDishes(i);
    } 
}

function renderSideDishes(){

  for (let i = 0; i < sideDishes.length; i++) {
    document.getElementById('render_side_dishes').innerHTML += getSideDishes(i);
  }
}



// Menü dem Warenkorb hinzufügen
function addMenu(){}


