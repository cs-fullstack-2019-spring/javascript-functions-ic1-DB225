// Create a function that will ask the user for a number.
// Use the function to get two numbers, then pass the two numbers to a function and
// ask a user if they want to add, subtract, multiple, or divide them.
// Return a string that prints the two numbers, which operation it did, and the result.

function calc() {
    var numA, numB, result;

    // If the numOperator is "+";
    function getNumA() {
        numA = parseInt(prompt("Enter the first number:"));
        return numA;
    }
    function getNumB() {
        numB = parseInt(prompt("Enter the last number:"));
        return numB;
    }
    function getOperator() {
        var numOperator = prompt("Enter the operator:");
        return numOperator;
    }

    // If the numOperator is "*", "-" or "/";
    //Otherwise, numOperator is "+";
    function doCalc() {
        var numA = getNumA();
        var numB = getNumB();
        var operator = getOperator();

        if(operator == "*"){
            result = ((parseInt(numA)) * (parseInt(numB)));
            console.log("We multiplied "+numA+" by "+numB+" and the result is: "+result);
        }
        else if(operator == "/"){
            result = ((parseInt(numA)) / (parseInt(numB)));
            console.log("We divided "+numA+" by "+numB+" and the result is: "+result);
        }
        else if(operator == "-"){
            result = ((parseInt(numA)) - (parseInt(numB)));
            console.log("We substracted "+numB+" from "+numA+" and the result is: "+result);
        }
        else{
            result = ((parseInt(numA)) + (parseInt(numB)));
            console.log("We added "+numA+" and "+numB+" and the result is: "+result);
        }
    }
    doCalc();
}
calc();
