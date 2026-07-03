let dice = document.getElementById('dice');
let rollDice = document.getElementById('roll-dice');
let history = document.getElementById('history');
let ul = document.querySelector('ul');
let rollCount = 1;

function RollDice(){
    let dot =  getCount();
   dice.innerHTML=dot;
   let li = document.createElement('li');
   li.classList.add('roll');
   li.innerHTML = `<div>Roll ${rollCount++}</div><div>${dot}</div>`;
   ul.appendChild(li);
}
function getCount(){
      let dot = Math.floor(Math.random()*6)+1;
    switch(dot){
    case 1:
        return '&#9856';
        break;
    case 2:
        return '&#9857';
        break;
    case 3:
        return '&#9858';
        break;
    case 4:
        return '&#9859';
        break;
    case 5:
        return '&#9860';
        break;
    case 6:
        return '&#9861';
        break;    
   }
}
rollDice.addEventListener('click',RollDice);