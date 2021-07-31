export class UI {
    constructor() {
        this.screen = document.querySelector('.screen');
    }
    screenLoad(){
        this.screen.value = "0";
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
}