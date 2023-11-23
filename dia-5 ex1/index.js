// Criando variavél

let numero1 = Number(prompt("Digite o primeiro número:"))
let numero2 = Number(prompt("Digite o segundo número"))
let operacao = prompt("Escolha a operação a ser feita ( + | - | x | / )")

// Criando switchCase

switch (operacao) {
    case ("+"):
        console.log("Operação utilizada: Adição(+)")
        console.log("resultado:" + (numero1 + numero2))
        break
    case ("-"):
        console.log("Operação utilizada: Subtração(-)")
        console.log("resultado:" + (numero1 - numero2))
        break
    case ("x"):
        console.log("Operação utilizada: Multiplicação(x)")
        console.log("resultado:" + (numero1 * numero2))
        break
    case ("/"):
        console.log("Operação utilizada: Divisão(/)")
        console.log("resultado:" + (numero1 / numero2))
        break
}
