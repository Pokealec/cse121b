/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){ // set definition of "add"
    return number1 + number2;
}    
function addNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
    //         previously declared function ^
    }
document.querySelector("#addNumbers").addEventListener("click", addNumbers);
//       look for when this ^ is called,    when clicked,    do this ^


/* Function Expression - Subtract Numbers */
let subtract = function(number1, number2){ // set definition of "subtract"
    return number1 - number2;
}
let subtractNumbers = function(){
    let subNumber1 = Number(document.querySelector("#subtract1").value);
    let subNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subNumber1, subNumber2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;
let multiplyNumbers = () => {
    let mulNumber1 = Number(document.querySelector("#factor1").value);
    let mulNumber2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(mulNumber1, mulNumber2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;
function divideNumbers(){
    let divNumber1 = Number(document.querySelector("#dividend").value);
    let divNumber2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(divNumber1, divNumber2);
    }
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */
function getTotal(){
    let sTotal = Number(document.querySelector("#subtotal").value);
    let fullTotal;
    if (document.getElementById("member").checked){
        fullTotal = sTotal - (sTotal * .15);
    } else { 
        fullTotal = sTotal;
    }
    document.querySelector("#total").textContent = `$ ${fullTotal.toFixed(2)}`;
}

document.querySelector("#getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("array").innerText = numbersArray;

/* Output Odds Only Array */
let oddArray = numbersArray.filter(number => number % 2);
document.getElementById("odds").innerText = oddArray;

/* Output Evens Only Array */
let evenArray = numbersArray.filter(number => number % 2 === 0);
document.getElementById("evens").innerText = evenArray;

/* Output Sum of Org. Array */
let sumArray = numbersArray.reduce((sum, number) => sum + number) // this is like putting rocks into a bag, with each rock having a number on it. you add each number together as you put them in, and that's the sumArray!
document.getElementById("sumOfArray").innerText = sumArray;

/* Output Multiplied by 2 Array */
let multiArray = numbersArray.map(number => number * 2)
document.getElementById("multiplied").innerText = multiArray;

/* Output Sum of Multiplied by 2 Array */
let smArray = numbersArray.map(number => number * 2);
let grandSum = smArray.reduce((sum, number) => sum + number, 0);
document.getElementById("sumOfMultiplied").innerText = grandSum;