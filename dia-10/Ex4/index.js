//Variáveis

let num = parseInt(prompt("Digite um numero inteiro e positivo"))
let arrayFibonacci = []
arrayFibonacci [0] = num - 1
arrayFibonacci [1] = num

// Fibonacci

for (contador = 2; contador < 10; contador++){
    arrayFibonacci[contador] = arrayFibonacci[contador - 1] + arrayFibonacci[contador - 2]
}

console.log("Fibonacci: " + arrayFibonacci)