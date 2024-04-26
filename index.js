let Eat = document.getElementById("eat");
let Drinks = document.getElementById("Drinks");
let First = document.getElementById("f");
let Second = document.getElementById("s");
// Eat.addEventListener("onclick", changeText())

function changeText(){
    Eat.style.display = "block";
    Drinks.style.display = 'none';
    Second.style.backgroundColor = 'white'
    Second.style.color = '#616161'
    First.style.backgroundColor = '#616161'
    First.style.color = 'white'
    console.log('hi');
    
}
function changeTextdrink(){
    Eat.style.display = "none";
    Drinks.style.display = 'block';
    console.log('hi');
    
    Second.style.backgroundColor = '#616161'
    Second.style.color = 'white'
    First.style.backgroundColor = 'white'
    First.style.color = '#616161'
    
}

