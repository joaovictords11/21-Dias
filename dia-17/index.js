// Variáveis

let arrayHoteis = []
let arrayReservas = []
let idHotel = 1
let idReserva = 1

function hotel() { 
    let nomeHotel = prompt("Digite o nome do hotel")
    let categoria = prompt("Digite a categoria")
    let endereco = prompt("Digite o endereço")
    let telefone = Number(prompt("Digite o telefone"))
    idHotel++
    arrayHoteis[idHotel] = (nomeHotel + ", categoria: " + categoria + ", endereço: " + endereco + ", telefone: " + telefone + "//")
    reserva()
}

function reserva() {
    let responsavel = prompt("Digite o nome do responsável")
    let diaEntrada = prompt("Digite o dia de entrada")
    let diaSaida = prompt("Digite o dia de saida")
    idReserva++
    arrayReservas[idReserva] = (responsavel + ", dia de entrada: " + diaEntrada + ", dia de saída: " + diaSaida + "//")
    exibirReservas()
}

function exibirReservas() {
    console.log(arrayReservas)
    exibirHotel()
}

function exibirHotel() {
    console.log(arrayHoteis)
    encerrar()
}

function encerrar() {
    let continuar = prompt("Voçê deseja continuar? (s/n)")
    if (continuar === "s"){
        hotel()
    } else {
        alert("Programa encerrado!!!")
    }
}

hotel()