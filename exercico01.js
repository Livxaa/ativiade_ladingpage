class livro {
    //atributos
    modelo = 'Capa dura';
    Editora = 'Suma';
    preco = '81';
    ano = '1977'
    nome = 'O iluminado'
    autor = 'Stephen King'
    classificacao_indicativa = '18+'
    capitulos = '39'
    //metodo
    apresentar() {
        console.log('Apresentando o livro')
    }
    mostrar() {
        console.log('o livro é ' + this.modelo + '' + this.Editora + '' + this.preco + '' + this.ano + '' + this.autor + '' + this.preco + '' + this.nome + '' + this.capitulos)

    }

}
