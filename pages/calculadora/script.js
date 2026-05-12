const display = document.getElementById("display");
const buttons = document.querySelectorAll(".calculator-buttons button");

let operation ="";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent.trim();
        
        if(value === "C"){
            clearCalculator();
            return;
        }
        if(value === "="){
            calculateResult();
            return;
        }
        addValue(value);
    });
});
    function addValue(value){
        operation += value;
        display.value = operation;
    }
    function clearCalculator(){
        operation = "";
        display.value = "";
    }
    function calculateResult(){
        try{
            operation = eval(operation).toString();
            display.value = operation;
        } catch {
            display.value = "Error";
            operation = "";
        }
    }