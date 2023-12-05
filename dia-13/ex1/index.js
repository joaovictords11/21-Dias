class Computador{
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    Ssd
    constructor (tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.Tipo = tipo
        this.Processador = processador
        this.Video = video
        this.Armazenamento = armazenamento
        this.MemoriaRam = memoriaRam
        this.Ssd = ssd
    }
    apresentar(){
        console.log("Configurações do computador:");
        console.log("O computador é do tipo: " + this.Tipo);
        console.log("Processador: " + this.Processador);
        console.log("Vídeo: " + this.Video);
        console.log("Armazenamento: " + this.Armazenamento);
        console.log("Memória Ram: " + this.MemoriaRam);
        console.log("Ssd: " + this.Ssd);
    }
}

let computador = new Computador("Desktop", "Ryzen 5", "Integrado", "1000 GB", "8 GB", true);
computador.apresentar();