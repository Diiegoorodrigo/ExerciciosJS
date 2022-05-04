// Em classe a herança funciona da mesma forma que vimos no prototype porém de uma forma mais eficaz e menos extensa.
// Para um objeto herdar algo de outro em class usamos a palavra extend, e dentro do constructor usamos o super, para chamar os atributos que queremos colocar dentro do construtor ex:

class Produto {
    constructor(nome, valor, estoque) {
        this.nome = nome
        this.valor = valor
        this.estoque = estoque
    }

    venda (qt) {
        if(typeof qt !== 'number') {
            console.log ('valor inexistente')
            return
        } 
        if(qt > this.estoque ) {
            console.log('quantidade indisponivel', this.estoque)
            return
        }

        this.estoque -= qt

    }

    repor (qt) {
        if(typeof qt !== 'number') {
            console.log ('valor inexistente')
            return
        }
        if( qt <= 0 ) {
            console.log ('valor inexistente')
            return
        }

        this.estoque += qt
    }

}

class Livro extends Produto {
    constructor (nome, valor, estoque, sessao) {
        super(nome, valor, estoque)
        this.sessao = sessao
    }
}

const l1 = new Livro ('Percy', 20, 50, 'Infantil')
console.log(l1)
l1.venda(50)
console.log(l1.estoque)
l1.repor(30)
console.log(l1.estoque)
l1.venda(50)
l1.repor(-20)
console.log(l1.estoque)

// no caso acima conseguimos ver a classe livro herdando os aspectos da classe pai Produtos, e também é possivel alterar um parametro dentro da classe livro, que ele herdou da classe pai, lembrando que isso não afeta a classe pai mas apenas a classe filho, se fosse necessário alterar o metodo venda seria possivel criar um novo dentro da classe livro lembrando que o primeiro metodo a ser executado é o que contem dentro da classe chamada, não achando o método ele irá procurar na classe pai e assim é a lógica de herança em classe.
