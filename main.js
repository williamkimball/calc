document.getElementById("add").addEventListener("click", function(){
    let firstNumber = parseInt(document.getElementById("firstNum").value);
    let secondNumber = parseInt(document.getElementById("secondNum").value);
    let value = firstNumber + secondNumber;
    document.querySelector("#answer").innerHTML = `The result of ${firstNumber} plus ${secondNumber} is ${value}`
})

document.getElementById("sub").addEventListener("click", function(){
    let firstNumber = parseInt(document.getElementById("firstNum").value);
    let secondNumber = parseInt(document.getElementById("secondNum").value);
    let value = firstNumber - secondNumber;
    document.querySelector("#answer").innerHTML = `The result of ${firstNumber} minus ${secondNumber} is ${value}`
})

document.getElementById("mult").addEventListener("click", function(){
    let firstNumber = parseInt(document.getElementById("firstNum").value);
    let secondNumber = parseInt(document.getElementById("secondNum").value);
    let value = firstNumber * secondNumber;
    document.querySelector("#answer").innerHTML = `The result of ${firstNumber} multiplied by ${secondNumber} is ${value}`
})

document.getElementById("divide").addEventListener("click", function(){
    let firstNumber = parseInt(document.getElementById("firstNum").value);
    let secondNumber = parseInt(document.getElementById("secondNum").value);
    let value = firstNumber / secondNumber;
    document.querySelector("#answer").innerHTML = `The result of ${firstNumber} divided by ${secondNumber} is ${value}`
})