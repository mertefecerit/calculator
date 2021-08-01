export class Calculator{
    constructor() {
        this.result = 0;
    }
    process(schema){
        switch (schema.operator){
            case "+":
                this.result = schema.number1 + schema.number2;
                break;
            case "-":
                this.result = schema.number1 - schema.number2;
                break;
            case "*":
                this.result = schema.number1 * schema.number2;
                break;
            case "/":
                this.result = schema.number1 / schema.number2;
                break;
            case "%":
                this.result = schema.number1 % schema.number2;
                break;
            case "x2":
                this.result = schema.number1 ** schema.number2;
                break;
        }
        return this.result;
    }
}