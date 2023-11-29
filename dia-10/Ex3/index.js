// Variáveis

let quantidade = Number(prompt("Quantos números voçê deseja inserir?"))
let arrayDeNumeros = []

//Código

for (posicao = 0; posicao < quantidade; posicao++){

    let num = prompt("Digite o " + (posicao + 1) + "° número")
    arrayDeNumeros[posicao] = num
}

 console.log("Array normal: " + arrayDeNumeros)

// Array invertido

console.log("Array invertido: " + arrayDeNumeros.reverse())
