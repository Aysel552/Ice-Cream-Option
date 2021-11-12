const image = document.querySelector("#myImage");
const text = document.querySelector("h2");
const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const ingredients = document.querySelector("#ingredients");
const preparation = document.querySelector("#preparation");
const all = document.querySelector("#all");
const cook = document.querySelector("#cook");

buttonOne.addEventListener("click", yes);
buttonTwo.addEventListener("click", no);

// YES Function

function yes() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1563252781-2f76e089e889?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHZhbmlsbGElMjBvciUyMGNob2NvbGF0ZSUyMGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60");
    text.textContent = "Vanilla or Chocolate?";
    buttonOne.textContent = "Vanilla";
    buttonTwo.textContent = "Chocolate";

    buttonOne.addEventListener("click", vanilla);
    buttonTwo.addEventListener("click", chocolate)
    
}

// Vanilla Function

function vanilla() {
    image.setAttribute("src", "data:image/jpeg;base64,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");
    text.textContent = "Mango or Green Tea? "
    buttonOne.textContent = "Mango";
    buttonTwo.textContent = "Green Tea";

    buttonOne.addEventListener("click", mango);
    buttonTwo.addEventListener("click", greenTea);
    
}

// Mango function

function mango() {

    image.setAttribute("src", "https://images.unsplash.com/photo-1602492383546-6f5a348c2a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5OTAwOTIyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1296&q=60");
    text.textContent = "Mango Ice-Cream";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

// Green tea function

function greenTea() {
    image.setAttribute("src", "https://www.rotinrice.com/wp-content/uploads/2011/08/MatchaIceCream-1.jpg")
    text.textContent = "Green Tea Ice-Cream";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

// function NO

function no() {

    image.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo4vm8xngKWeqvNNBlPB5bZ7mWvfkb87x8Cw&usqp=CAU");
    text.textContent = "Sorbet or Frozen Yogurt? "
    buttonOne.textContent = "Sorbet";
    buttonTwo.textContent = "Frozen Yogurt";

    buttonOne.addEventListener("click", sorbet);
    buttonTwo.addEventListener("click", frozenYogurt);
}

function sorbet() {

    image.setAttribute("src", "https://images.unsplash.com/photo-1498190338361-82055e010b39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c29yYmV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60");
    text.textContent = "Lemon or Raspberry?? "
    buttonOne.textContent = "Lemon";
    buttonTwo.textContent = "Raspberry";

    buttonOne.addEventListener("click",lemon);
    buttonTwo.addEventListener("click", raspberry);
}


// Lemon function
function lemon() {
    image.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8wKWpDy_6GcmjU5r4qyNgoJdHaiplZVmsg&usqp=CAU");
    text.textContent = "Lemon Sorbet"
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
}

// Raspberry function

function raspberry() {
    image.setAttribute("src", "data:image/jpeg;base64,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");
    text.textContent = "Raspberry Sorbet";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

// Frozen Yogurt function

function frozenYogurt() {

    image.setAttribute("src", "https://www.boston.com/wp-content/uploads/2021/08/DIZIN-FruttiBerri-610831ed60ba6.jpg")
    text.textContent = "Fruits or Nuts? "
    buttonOne.textContent = "Fruits";
    buttonTwo.textContent = "Nuts";

    buttonOne.addEventListener("click",fruits);
    buttonTwo.addEventListener("click", nuts);
}

// fruits function

function fruits() {

    image.setAttribute("src", "https://img.grouponcdn.com/seocms/4QGcBunMkZgyLyp584GhvzgVJiQC/frozen-yogurt-with-strawberry-kiwi-and-pineapple-toppings_jpeg-600x390");
    text.textContent = " Frozen Yogurt with fruits"
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

// nuts function

function nuts() {
    image.setAttribute("src", "frozen yogurt with nuts.png");
    text.textContent = " Frozen Yogurt with nuts"
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}


    









