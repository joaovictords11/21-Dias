let livros = []

class Livro {
    Titulo
    Autor
    Editora
    AnoPub
    Disponibilidade = true
    constructor (titulo, autor, editora, anoPub) {
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoPub = anoPub
    }
}

livros.push = new Livro ("Livro1", "Antoine de Saint-Exupéry", "Nova Fronteira", 1943)
livros.push = new Livro ("Livro2", "Paulo Coelho", "Paralela", 1988)
livros.push = new Livro ("Livro3", "Neto", "Meu timão", 1977)
livros.push = new Livro ("Livro4", "José Alencar", "Esquece", 2012)


class Biblioteca {
    Nome 
    Endereco
    Telefone
    Acervo = []
    constructor (nome, endereco, telefone, acervo){
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone
        this.Acervo = acervo
    }

    BuscarLivro(titulo) {
        this.Acervo.array.forEach(livro => {
            if (livro.Titulo == titulo){
                console.log(livro)
            }
        })
    }

    EmprestarLivro(titulo) {
        let emprestado = false
        this.Acervo.forEach(livro => {
            if (livro.Titulo == titulo){
                if(livro.Disponibilidade == true){
                    livro.Disponibilidade = false
                    emprestado = true
                }
            }
        })
        if (emprestado) {
            return true
        } else {
            return false
        }
    }

    DevolverLivro(titulo) {
        livros.forEach(livro => {
            if (livro.Titulo == titulo){
                livro.Disponibilidade = true
                console.log("Livro devolvido")
            }
        })
    }
}

let biblioteca = new Biblioteca("Biblioteca Souza", "Av Hilario Pereira de Souza", 11966055944)

biblioteca.BuscarLivro("Livro2")
biblioteca.DevolverLivro("Livro3")
biblioteca.EmprestarLivro("Livro1")
