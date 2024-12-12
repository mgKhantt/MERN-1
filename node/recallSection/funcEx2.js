function noArgumentFunction() {
    console.log("this is no argument function");
}

function argumentFunction(num1, num2) {
    const sum = num1 + num2
    console.log(sum);
    
}

noArgumentFunction()
argumentFunction(10, 20)


console.log("=======");

function addThreeNumber() {
    const num1 = 10
    const num2 = 20
    const num3 = 30

    const sum = num1 + num2 + num3

    console.log(sum);
}

function addThreeNumberWithArgument(num1, num2, num3) {
    const sum = num1 + num2 + num3

    console.log(`Sum is ${sum}`);
    
}

addThreeNumber()
addThreeNumberWithArgument(10, 10, 10)