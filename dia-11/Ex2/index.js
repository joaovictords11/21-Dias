// Variaveis

let arrayModelo = []
let arrayAno = []
let arrayValores = []
let continuar = true
let contador = 0
// Array + While/DoWhile

while (continuar){
    let modelo = prompt("Digite o nome do " + (contador + 1) + "° veículo:")
    let ano = Number(prompt("Qual o ano do veículo?"))
    let valor = Number(prompt("Qual o valor do veículo?"))
    contador++
    arrayModelo[contador] = modelo
    arrayAno[contador] = ano
    arrayValores[contador] = valor 

    let prosseguir = prompt("Voçê deseja continuar? (s/n)")
    if (prosseguir === "n"){
        continuar = false 
    }
}

console.log("Dados do veículo:")
for (i = 1; i < arrayModelo.length; i++){
    console.log("Modelo: " + arrayModelo[i] + " - Ano: " + arrayAno[i] + " - Valor: " + arrayValores[i])
}
