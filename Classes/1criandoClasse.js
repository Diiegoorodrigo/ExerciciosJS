// a criação de classes é semelhante a criação de uma função construtora, porém a sua dinâmica é bem mais otimizada, pois dentro das classes podemos inserir metodos que serão usados nos demais objetos, sem que sejam criados varias vezes  na memoria, os metodos criados já são atrelados ao prototype da classe pela otimização do js, uma coisa que difere é que se precisa passar parametros na classe usamos o "constructor" para receber esses parametros.ex:

class Pessoa {
    constructor (nome, sobrenome) {
        this.nome  = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} está falando`)
    }
}

const p1 = new Pessoa ('Marcos','Paulo')
console.log(p1.falar())
console.log(p1)

