// Variáveis

let numDeAlunos = 1
let homensQueEnviaram = 0
let maiorNotaHomens = 0
let mulheresNotaAcimaDe7 = 0
let mediaGeral = 0

// While

while (numDeAlunos <= 10) {
    let nota = Number(prompt("Digite a nota do " + numDeAlunos + "° aluno:"))
    let sexo = (prompt("Qual o seu gênero? (m/f)"))

    if ( sexo == "m") {
        homensQueEnviaram++
        if (nota > maiorNotaHomens) {
            maiorNotaHomens = nota
        }
    }

    if ( sexo == "f" && nota > 7) {
        mulheresNotaAcimaDe7++
    }
    mediaGeral += nota
    numDeAlunos++
}

mediaGeral = mediaGeral / 10

console.log("A média geral dos alunos foi: " + mediaGeral)
console.log( homensQueEnviaram + " homens enviaram as notas")
console.log( mulheresNotaAcimaDe7 + " mulheres tiveram nota acima de 7")
console.log("A maior nota entre os homens foi: " + maiorNotaHomens)