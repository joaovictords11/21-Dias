// Variaveis

let somaNotas = 0
let totalAlunos = 0
let arrayNome = []
let arrayNota = []
let continuar = true
let contador = 0

// Array + While/DoWhile

while (continuar){
    var nome = prompt("Digite o nome do " + (contador + 1) + "° aluno:")
    let nota = Number(prompt("Digite a nota do aluno:"))
    let prosseguir = prompt("Voçê quer continuar? (s/n)")
    arrayNome[contador] = nome
    arrayNota[contador] = nota
    totalAlunos++
    somaNotas+= nota 
    contador++
    var mediaGeral = parseInt(somaNotas / totalAlunos)
    if (prosseguir === "n"){
        continuar = false
    }
}

console.log("Nota dos alunos:")
for (i = 0; i < arrayNome.length; i++){
    console.log(arrayNome[i] + " - " + arrayNota[i])
}

for (i = 0; i < arrayNota.length; i++){
    somaNotas += arrayNota[i]
}

console.log("A soma das notas de cada aluno foi: " + (somaNotas / 2))
console.log("A média geral da turma foi: " + mediaGeral) 