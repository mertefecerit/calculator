import {UI} from "./ui";
import {Calculator} from "./calculator";

const calculatorArea = document.querySelector('.calculator');
const screen = document.querySelector('.screen');
let ui = new UI();
let calculator = new Calculator();
let schema;

document.addEventListener("DOMContentLoaded",function (){
   ui.screenLoad();
});

calculatorArea.addEventListener("click",function (e){
   if(e.target.classList.contains('number')) {
      ui.updateScreen(e.target.value);
   }else if(e.target.classList.contains('clear')){
      ui.screenLoad();
   }else if(e.target.classList.contains('decimal')){
      ui.updateScreenForDecimal(e.target.value);
   }else if(e.target.classList.contains('operator')){
      schema = ui.addOperator(e.target.value);
   }else if(e.target.classList.contains('equal')){
      schema.number2 = parseInt(screen.value);
      screen.value = calculator.process(schema);
   }
});

