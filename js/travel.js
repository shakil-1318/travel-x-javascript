const marsPlus = document.getElementById('mars-plus');
const marsMinus = document.getElementById('mars-minus');

const moonPlus = document.getElementById('moon-plus');
const moonMinus = document.getElementById('moon-minus');

const marsTicket = document.getElementById('mars-ticket');
const moonTicket = document.getElementById('moon-ticket');

const marsTotal = document.getElementById('mars-total');
const moonTotal = document.getElementById('moon-total');

const finalTotalAmount = document.getElementById('final-total');
const marsTicketPrice = 5000;
const moonTicketPrice = 3000;

function totalIncreamentPrice(price, ticket, total){
    ticket.value = parseInt(ticket.value) + 1;
    total.innerText = price * ticket.value;
    finalTotalAmount.innerText = parseInt(moonTotal.innerText) + parseInt(marsTotal.innerText);
}

function totalDecreamentPrice(ticket, total, price){
    if(parseInt(ticket.value) < 1){
        return;
    }
    else{
        ticket.value = parseInt(ticket.value) - 1;
        total.innerText = price * ticket.value;
        finalTotalAmount.innerText = parseInt(marsTotal.innerText) + parseInt(moonTotal.innerText);
    }
}

marsPlus.addEventListener('click', function(){
totalIncreamentPrice(marsTicketPrice, marsTicket, marsTotal)
});

marsMinus.addEventListener('click', function(){
    totalDecreamentPrice(marsTicket, marsTotal, marsTicketPrice)
});

moonPlus.addEventListener('click', function(){
    totalIncreamentPrice(moonTicketPrice, moonTicket, moonTotal);
});

moonMinus.addEventListener('click', function(){
    totalDecreamentPrice(moonTicket, moonTotal, moonTicketPrice);
});