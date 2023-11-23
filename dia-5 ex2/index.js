// Criando variáveis

let opcao = prompt("Escolha uma opção: gasolina/alcool/calibrar")
let gasolinaL = 5
let alcoolL = 3

// SwitchCase

switch (opcao) {
    case ("gasolina"):
        let gasolina = Number(prompt("Qual o valor desejado?"))
        console.log("A quantidade em litros abastecida foi:" + (gasolina / 5) + "L")
        break 
    case ("alcool"):
        let alcool = Number(prompt("Qual o valor desejado?"))
        console.log("A quantidade em litros abastecida foi:" + (alcool / 3) + "L")
        break 
    case ("calibrar"):
        console.log("Pneus calibrados com sucesso")
}
