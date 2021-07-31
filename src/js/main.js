import {UI} from "./ui";

const calculator = document.querySelector('.calculator');
let ui = new UI();


document.addEventListener("DOMContentLoaded",function (){
   ui.screenLoad();
});

calculator.addEventListener("click",function (e){
   if(e.target.classList.contains('number')) {
      ui.updateScreen(e.target.value);
   }else if(e.target.classList.contains('clear')){
      ui.screenLoad();
   }else if(e.target.classList.contains('decimal')){
      ui.updateScreenForDecimal(e.target.value);
   }
});

