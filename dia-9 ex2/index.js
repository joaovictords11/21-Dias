//Variáveis

let anoAtual = 2023
let nome = prompt("Qual o seu nome?")
let idade = Number(prompt ("Qual a sua idade?"))
let salario = Number(prompt("Qual o seu salário atual?"))
let percentual = 0.015 
//Código

console.log("Nome: " + nome)
console.log("Idade: " + idade)
console.log("Salário: " + salario)

for (anoDeAumento = 2024; anoDeAumento <= 2034; anoAtual++){
    console.log("Ano: " + anoDeAumento + " => Salário: " + (salario + (salario * percentual)))
    percentual+= percentual
}
