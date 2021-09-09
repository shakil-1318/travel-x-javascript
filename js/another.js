function marsInputNumber(planet,price, isIncreasing){
    const planetTicket = document.getElementById(planet + '-ticket');
    let ticketNumber = planetTicket.value;
    if(isIncreasing == true){
        ticketNumber = parseInt(ticketNumber ) + 1;
    }
    else{
        if(ticketNumber < 1){
            return;
        }
        ticketNumber = parseInt(ticketNumber) - 1;
    }
    planetTicket.value = ticketNumber;

    //update total
    // const marsTotal = 5000;
    const marsTotal = document.getElementById(planet + '-total');
    marsTotal.innerText = price * ticketNumber;

    //
    totalCalculate();
}
function getValue(planet){
    const marsTicket = document.getElementById(planet + '-ticket');
    const marsNumber = parseInt(marsTicket.value);
    return marsNumber;
}

function totalCalculate(){
    
    const marsTotal = getValue('mars') * 5000;
    const moonTotal = getValue('moon') * 3000;
    const totalCost = marsTotal + moonTotal;
    
    document.getElementById('final-total').innerText = totalCost;
}


//mars eventHandler
document.getElementById('mars-plus').addEventListener('click', function(){
    marsInputNumber('mars',5000, true);
    
});
document.getElementById('mars-minus').addEventListener('click', function(){
    marsInputNumber('mars',5000, false);  
});

//moon event handler
document.getElementById('moon-plus').addEventListener('click', function(){
    marsInputNumber('moon',3000, true);
})
document.getElementById('moon-minus').addEventListener('click', function(){
    marsInputNumber('moon',3000, false);
})