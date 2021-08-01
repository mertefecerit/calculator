export class UI {
    constructor() {
        this.screen = document.querySelector('.screen');
        this.number = 0;
        this.operator = "";
    }
    screenLoad(){
        this.screen.value = "0";
        this.number = 0;
        this.operator = "";
    }
    updateScreen(value){
        if(this.screen.value === "0"){
            this.screen.value = value;
        }else{
            this.screen.value += value;
        }
    }
    updateScreenForDecimal(value){
        if(this.screen.value === "0" && value === ","){
            this.screen.value = '0' + value;
        }else{
            if(!this.screen.value.includes(',')){
                this.screen.value += value;
            }
        }
    }
    addOperator(operator){
        this.number = parseInt(this.screen.value);
        switch (operator){
            case "+":
                this.operator = "+";
                break;
            case "-":
                this.operator = "-";
                break;
            case "*":
                this.operator = "*";
                break;
            case "/":
                this.operator = "/";
                break;
            case "%":
                this.operator = "%";
                break;
            case "x2":
                this.operator = "x2";
                break;
        }
        this.screen.value = "0";
        return {
            number1 : this.number,
            number2: 0,
            operator: this.operator
        }
    }
}