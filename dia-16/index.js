// Variáveis

let arrayNome = []
let arraySenha = []
let nomeCadastro
let senhaCadastro
let contador = 0

// Funções de Array

function desejo() {
    let escolha = Number(prompt("O que voçê deseja fazer? (cadastrar = 1; excluir = 2; encerrar = 3)"))
    if ( escolha === 1){
        cadastro()
    } else if ( escolha === 3){
        console.log("Programa encerrado")
    } else {
        excluir()
    }
    return escolha 
} 

function cadastro() {

    arrayNome.push(prompt("Qual nome voçê deseja cadastrar?"))
    arraySenha.push(Number(prompt("Qual senha cadastrar?")))
    login()
}

function login(){
    let nomeCadastro = prompt("Qual o seu nome?")
    let senhaCadastro = Number(prompt("Qual a senha?")) 
    arrayNome.includes(nomeCadastro)

    if (arrayNome.includes(nomeCadastro) === true){
        arraySenha.includes(senhaCadastro)
        if (arraySenha.includes(senhaCadastro) === true){
            console.log("Login feito com sucesso!!!")
            continuar()
        } else {
            console.log("Nome ou senha incorretos!!!")
        }
    } else if (arrayNome.includes(nomeCadastro) === false){
        console.log("Nome ou senha incorretos!!!")
    }
} 

function excluir(){

    contador+= (arrayNome.length - 1)
    arrayNome.splice(contador, 1)
    arraySenha.splice(contador, 1)
    console.log("Cadastro excluído com sucesso!!!")
}

function continuar(){
    let continuar = prompt("Voçê deseja reiniciar? (s/n)")
    if (continuar === "s"){
        desejo()
    } 
}

desejo()