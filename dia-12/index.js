// Váriaveis

let arrayNome = []
let arraySenha = []
let contador = 0
let continuar = true

// Array + Loop + SwitchCase

while (continuar){

    let desejo = prompt("O que voçê deseja fazer? (1 - cadastar, 2 - login, 3 - excluir, 4 - encerrar")

    switch (desejo) {
        case "1" :
            arrayNome[contador] = prompt("Qual o seu nome?")
            arraySenha[contador] = Number(prompt("Qual senha voçê deseja colocar? (Apenas números)"))
            contador++
            break;

        case "2" : 
            let nome = prompt("Qual o seu nome?")
            let senha = Number(prompt("Qual a senha?"))
            let senhaInvalida = false

            for (i = 0; i < arrayNome.length; i++){
                if (nome == arrayNome[i] && senha == arraySenha[i]){
                    senhaInvalida = true
                }
            }

            if (senhaInvalida) {
                console.log("Login feito com sucesso")
            } else {
                console.log("Nome ou senha incorretos!!")
            }
            break;
        
        case "3" :
            let nomeExcluir = prompt("Qual nome voçê deseja excluir?")
            let arrayNomeAux = []
            let arraySenhaAux = []
            let contadorAux = 0

            for (i = 0; i < contador; i++){
                if (nomeExcluir == arrayNome[i]){
                    console.log("Cadastro excluído com sucesso")
                } else {
                    arrayNomeAux[contadorAux] = arrayNome[i]
                    arraySenhaAux[contadorAux] = arraySenha[i]
                    contadorAux++
                }
            }

            arrayNome = arrayNomeAux
            arraySenha = arraySenhaAux
            contador--
            break;
        
        case "4" :
            continuar = false
            break;

        default:
            console.log("Opçâo inválida, escolha outra")
            continuar = false 
            break;
    }
}