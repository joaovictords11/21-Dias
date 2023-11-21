let nome = prompt("Digite seu nome:")
let idade = parseInt(prompt("Digite sua idade:"))
let altura = Number(prompt("Digite sua altura:"))
let peso = Number(prompt("Digite seu peso:"))

//Calculando o ano que a pessoa nasceu e o IMC

let anoDeNascimento = 2023 - idade
let imc = parseInt(peso / (altura * altura))

//Exibindo informações no console

console.log("Olá " + nome + ", voçê tem " + idade + " anos, nasceu em " + anoDeNascimento + ", tem " 
+ altura + " de altura, pesa " + peso + "kg e seu IMC é " + imc + "Kg/m²")
