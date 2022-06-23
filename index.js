const number1 = parseFloat(prompt('Enter first number: '));
const operator = prompt('Enter operator ( either +, -, * or / ): ');
const number2 = parseFloat(prompt('Enter second number: '));

let result;


if(isNaN(number1) || isNaN(number2)){
    alert('Invalid input! Refresh and try again.');
    
}else
{
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else if (operator == '/'){
     result = number1 / number2;
}

else {
    (operator != '+', '-', '*', '/')
}
console.log(`${number1} ${operator} ${number2} = ${result}`);
alert(`${number1} ${operator} ${number2} = ${result}`);
}
