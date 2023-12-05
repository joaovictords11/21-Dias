// Criando Classe

class Carro {
    nome 
    potencia
    velocMax
    aceleracao
  
    constructor(nome, potencia, velocMax, aceleracao){
        this.nome = nome
        this.potencia = potencia
        this.velocMax = velocMax
        this.aceleracao = aceleracao
    }
    calcularTempo(){
        let distancia = (this.distancia / (this.velocMax / this.aceleracao))
        return distancia
    }
}

class Corrida {
    nome  
    tipo
    distancia
    participantes
    vencedor
    constructor(nome, tipo, distancia){
        this.nome = nome
        this.tipo = tipo
        this.distancia = distancia
        this.participantes = []
        this.vencedor = ""
    }
    
    menorTempo(){
        let menorTempo = this.participantes[0].calcularTempo()
        let vencedor = this.participantes[0]

        for (let contador = 1; contador < this.participantes.length; contador++){
            let tempo = this.participantes[contador].calcularTempo()
            if (menorTempo > tempo){
                menorTempo = tempo
                vencedor = this.participantes[contador]
            }
        }
        this.vencedor = vencedor
    }

    exibirVencedor(){
        console.log("O vencedor da corrida é: " + this.vencedor.nome)
    }
}

let corrida = new Corrida("Interlagos", "Fórmula 1", 85000)

corrida.participantes[0] = new Carro ("Ferrari", 340, 360, 2)
corrida.participantes[1] = new Carro ("Audi", 290, 270, 4)
corrida.participantes[2] = new Carro ("BMW", 250, 220, 5)

corrida.menorTempo()
corrida.exibirVencedor()