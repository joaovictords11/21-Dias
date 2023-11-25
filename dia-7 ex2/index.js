// Variáveis

let saldoTotal = 500
let totalTransacoes = 0
let somaValoresInseridos = 0
const nome = prompt("Qual o seu nome?")
const cpf = prompt("Qual o seu CPF?")

// DoWhile

do {
    const opcao = prompt("Voçê escolhe saque ou deposito? (s/d)")
    const valor = parseInt(prompt("Qual o valor?"))

    if (opcao === "s") {
        console.log("Seu saldo agora é: " + parseInt(saldoTotal-valor))
        if ( valor > saldoTotal ) {
            console.log("Saque indisponível pois voçê não possui este valor na conta")
        }
        totalTransacoes++
        somaValoresInseridos+=valor
        saldoTotal-=valor
    }

    if (opcao === "d") {
        console.log("Seu saldo agora é: " + saldoTotal)
        totalTransacoes++
        somaValoresInseridos+=valor
        saldoTotal+=valor
    }

    const escolha = prompt("Voce deseja continuar? (s/n)")

    if (escolha === "s") {
        continuar = true
    }

    if (escolha === "n") {
        continuar = false
    }

} while (continuar);

console.log("Dados:")
console.log("Nome: " + nome)
console.log("CPF: " + cpf)
console.log("Seu saldo final é: R$" + saldoTotal)
console.log("A média dos valores inseridos é: R$" + (somaValoresInseridos / totalTransacoes))
