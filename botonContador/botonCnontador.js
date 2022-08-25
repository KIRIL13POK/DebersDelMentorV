var counterVal = 0;


function incrementClick() {
    updateDisplay(++counterVal);
   /* if (counterVal == 20 ){
        alert("!!!basta!!!");*/
}/*
if (counterVal == 20 ){
    alert("!!!basta!!!");*/
    
 }

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}
   

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
    
}

