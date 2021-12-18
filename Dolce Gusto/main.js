const button = document.querySelector('.btn');

let order = {
    pizza: '',
    sosy: [],
    name: '',
    adress: '',
    email: '',
    tel: '',
    text: '',
    napoje: []
}

button.addEventListener('click', getOrder);

function sprawdzaniecheckBox(nazwaKlasy) {
    const pobraneWszytkieSosyZinputu = document.getElementsByClassName(nazwaKlasy)
    if (nazwaKlasy === "sosy") {
        for (let i = 0; i < pobraneWszytkieSosyZinputu.length; i++) {
            order.sosy.push(pobraneWszytkieSosyZinputu[i].checked)
        }
    } else {
        for (let i = 0; i < pobraneWszytkieSosyZinputu.length; i++) {
            order.napoje.push(pobraneWszytkieSosyZinputu[i].checked)
        }
    }
}

function getOrder() {

    // pobieranie selecta 
    const pizzaSelect = document.getElementById('pizza').value
    if (pizzaSelect == "0") {
        alert("Wybierz Pizze")
    } else {
        order.pizza = pizzaSelect
    }
   
    sprawdzaniecheckBox("sosy")
    sprawdzaniecheckBox("napoje")

    const userName = document.getElementById('userName').value
    if (userName == "") {
        alert("Podaj imię i nazwisko")
    } else {
        order.name = userName
    }

    const email = document.getElementById('email').value
    if (email == "") {
        alert("Podaj adres email")
    } else {
        order.email = email
    }
   
    const number = document.getElementById('number').value
    if (number == "") {
        alert("Podaj numer telefonu")
    } else {
        order.tel = number
    }

    const address = document.getElementById('address').value
    if (address == "") {
        alert("Podaj adres dostawy")
    } else {
        order.adress = address
    }

    const message = document.querySelector('textarea').value
    order.text = message



    if (order.pizza == 'margarita') {
         pricePizza = 20;
        } 
    else if (order.pizza == 'neapolitana') {
        pricePizza = 25;
        } 
    else if (order.pizza == 'sycylijska') {
        pricePizza = 30;
        } 
    else if (order.pizza == 'cztery_sery') {
        pricePizza = 25;
        } 
    else {
        pricePizza = 0;
        }  
    
    order.napoje.forEach(e=> {
        if (e) {
            costDrink = 5
        }
        else {
            costDrink = 0;
         }
        });
    
    const submitPrice= pricePizza + costDrink;

    const price=document.getElementById('price')
    price.innerHTML = `Koszt zamówienia wynosi ${submitPrice}`  

    
    console.log(order)

    order = {
        pizza: '',
        sosy: [],
        name: '',
        adress: '',
        email: '',
        tel: '',
        text: '',
        napoje: []
    }
}