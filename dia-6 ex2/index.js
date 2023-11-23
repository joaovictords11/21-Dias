// Variaveis

let numero = Number(prompt("Digite um número para ver a tabuada:"))

// For

console.log("Tabuada do: " + numero)

for (let i = 0; i <= 10; i++) {
    console.log( numero + " x " + i + " = " + (numero * i) )
}

console.log("Tabuada do: " + (numero + 1))

for (let i = 0; i <= 10; i++) {
    console.log( (numero + 1) + " x " + i + " = " + ((numero + 1) * i) )
}

console.log("Tabuada do: " + (numero + 2))

for (let i = 0; i <= 10; i++) {
    console.log( (numero + 2) + " x " + i + " = " + ((numero + 2) * i) )
}
