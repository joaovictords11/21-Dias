//Exercício Jantar

// Variáveis
let fome = prompt("Voçê está com fome?")
let dinheiro = prompt("Voçê tem dinheiro?")
let restaurante = prompt("O restaurante está aberto?")

//Condições

if ( fome == "Não" || dinheiro == "Não" ) {
    console.log("Hoje a janta será em casa!")
}

if ( fome == "Sim" && dinheiro == "Sim" && restaurante == "Sim" ) {
    console.log("Hoje o jantar será no seu restaurante preferido!")
}

if ( fome == "Sim" && dinheiro == "Sim" && restaurante == "Não" ) {
    console.log("Peça um Delivery!")
}
