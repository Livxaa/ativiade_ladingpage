class Bicicleta {
    // Atributos privados (ninguém de fora muda sem passar pela regra)
    #modelo = 'Caseira';
    #marca = 'Caloi';
    #cor = 'Vermelha';
    #velocidade;

    constructor() {
        // Pergunta ao usuário assim que a classe é criada
        let resposta = prompt('Qual é a sua velocidade?');
        
        // Validação simples com o if
        if (resposta <= 35) {
            this.#velocidade = resposta;
            console.log('Sua velocidade é ' + this.#velocidade);
        } else {
            console.log('Insira algo menor que 35');
        }
    }
}

// Para rodar o código:
const minhaBike = new Bicicleta();