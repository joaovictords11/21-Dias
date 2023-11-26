// Variáveis

let nome = prompt("Qual o seu nome?")
let idade = Number(prompt("Qual a sua idade?"))
let peso = Number(prompt("Qual o seu peso? (Kg)"))
let altura = Number(prompt("Qual a sua altura? (M)"))
let profissao = prompt("Qual a sua profissão?")
let anosEmDias = parseInt(idade * 365)
let anosEmSemanas = parseInt(anosEmDias / 7)
let anosEmMeses = parseInt(anosEmSemanas / 4)
let imc = (peso / (altura * altura))
let idadeQueNasceu = 0
let anoQueNasceu = (2023 - idade)
// Codigo

console.log("Olá " + nome + ", voçê tem " + idade + " anos" + ", é " + profissao + 
", tem " + altura + "M de altura e pesa " + peso + "Kg")

if (idade >= 18){
    console.log("Está liberado tomar uma gelada")
} else {
    console.log("Sem gelada para voçê")
}

console.log("Voçê tem " + idade + " anos, equivalente a " + anosEmDias + " dias, " + anosEmSemanas + 
" semanas e " + anosEmMeses + " meses")

if (imc < 18.5){
    console.log("Voçê está na faixa de magreza")
} else if (imc >= 18.5 && imc < 24.9){
    console.log("Voçê está na faixa normal")
} else if (imc >= 24.9 && imc <= 30){
    console.log("Voçê está na faixa de sobrepeso")
} else if (imc > 30){
    console.log("Voçê está na faixa de obesidade")
}

console.log( nome + ", voçê nasceu em " + (2023 - idade))

for (idadeQueNasceu = 0; anoQueNasceu <= 2023; idadeQueNasceu++){
    console.log(anoQueNasceu + " = " + idadeQueNasceu + " anos")
    anoQueNasceu++
}

do{
    let continuar = prompt("Voçê deseja inserir novos dados? (s/n)")
} while ( continuar == "s");
