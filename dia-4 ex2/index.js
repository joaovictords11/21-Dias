// Motorista

// Variavéis
let nome = prompt("Qual o seu nome?")
let idade = Number(prompt("Qual a sua idade?"))
let carta = prompt("Voçê tem carta?")
let carro = prompt("Voçê tem carro?")

// Condição

if ( idade < 18 || carta == "Não" ) {
    console.log( nome + ", voçê não pode dirigir ainda!")
}

if ( idade >= 18 && carta == "Sim" && carro == "Não" ) {
    console.log( nome + ", voçê pode dirigir mas não tem carro!")
}

if ( idade >= 18 && carta == "Sim" && carro == "Sim" ) {
    console.log( nome + ", voçê será o motorista!")
}
