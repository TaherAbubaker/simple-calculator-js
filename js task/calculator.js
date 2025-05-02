var x = Number(prompt("Give me the 1st number:"));
var operator = prompt("Enter the operator (+, -, *, /):");
var y = Number(prompt("Give me the 2nd number:"));

switch (operator) {
    case "+":
        console.log(x+y);
        break;
    
    case "-":
        console.log(x-y);
        break;
    
    case "*":
        console.log(x*y);
        break;
    
    case "/":
        if(y!=0)
        console.log(x/y);
    else
    console.log("wrong input");
        break;



    default:
        console.log("wrong input");
        break;
}