// Funções + Escopo

let nome
let salario

function informacoes(){
    nome = prompt("Qual o seu nome?")
    salario = Number(prompt("Qual o seu salário?"))
    aumento(nome, salario)
}

function aumento(nome, salario){

    let aumento 

    if (salario <= 1500){
       Number(aumento = 0.2) // 20%
    } else if (salario > 1500 && salario <= 2000){
        Number(aumento = 0.15) // 15%
    } else if (salario > 2000 && salario <= 3000){
        Number(aumento = 0.1)  // 10%
    } else if (salario > 3000){
        Number(aumento = 0.05) // 5%
    } 

    console.log("Nome: " + nome) 
    console.log("Salário atual: " + salario)
    console.log("Porcentagem de aumento: " + (aumento * 100) + "%")
    console.log("Salário reajustado: " + (salario + (salario * aumento)))
    perguntarNovamente()
}

function perguntarNovamente(){
    let opcao = prompt("Voçê deseja calcular seu aumento novamente com novas informações? (s/n)")

    if (opcao === "s"){
        console.log("======Informações atualizadas:======")
        informacoes()
    } else {
        alert("Calculo encerrado!!!")
    }
}

informacoes()