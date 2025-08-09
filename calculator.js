const display = document.querySelector(".display");
const buttons = document.getElementsByClassName("button");
   
   function allClear(){
      display.value="";
     
   }
   
   function del(){
      display.value = display.value.toString().slice(0,-1);
   }
   /*
   function calculate(){
      try{
      display.value = eval(display.value);
      display.style.color ="#f2ee59";
      }
      catch(error){
          display.value = "Error!Complete your eqn";
          display.style.fontSize = "5vmin";
          display.style.color = "red";
      }
      
   }
   */
  

let base = '';
let exponent = '';
let isExponent = false;

function show(input) {
    display.style.color = "white";
    display.style.fontSize = "7vmin";
    
    if (input === 'x²') {
        base = parseFloat(base) ** 2;
        display.value = base + '²';
    } else if (input === 'x^') {
        isExponent = true;
        display.value += '^';
    } else if (input === '!') {
        let factorialResult = calculateFactorial(parseInt(base));
        display.value = factorialResult;
    } else {
        if (isExponent) {
            exponent += input;
            display.value += input;
        } else {
            base += input;
            display.value += input;
        }
    }
}
/*
function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * calculateFactorial(number - 1);
    }
}
*/

let tap=0;
function brackets(){
  tap++;
  if(tap%2!=0)
  show('(');
  if(tap%2==0)
  show(')');
  
 
  
}










function calculate() {
    let result;
    
    if (exponent !== '') {
        result = Math.pow(parseFloat(base), parseFloat(exponent));
    } else {
        let expression = display.value;
        
        expression = expression.replace(/²/g, '**2');
        expression = expression.replace(/\^/g, '**');
        expression = expression.replace(/\(+/g, "*(");
        try {
            result = eval(expression);
            display.style.color = "#f2ee59";
        } catch (error) {
            result = "Error! Complete your eqn";
            display.style.fontSize = "4.8vmin";
            display.style.color = "red";
        }
    }
    
    display.value = result;
}
