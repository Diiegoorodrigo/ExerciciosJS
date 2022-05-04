// também podemos trabalhar com prototype em factory function, porém  um pouco diferente de constructor function, nem factory function podemos criar os metodos dentro do prototype dentro da função, ou podemos criar em uma variavel fora e inserir dentro da FF, o que dentro da programação é chamado de mixer, trazer outros metodos reutilizaveis para dentro da sua FF ex.

const falar = {
    falar () {
        console.log (`${this.nome} está falando`)
    }
}
const comer = {
    comer() {
        console.log (`${this.nome} está comendo`)
    }
}
const beber = {
    beber () {
        console.log (`${this.nome} bebendo`)
    }
}

const pessoaPrototype = Object.assign({}, falar,  beber, comer)

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome},
        sobrenome: {value:sobrenome}
    })
}

const p1 = criaPessoa('Paulo', 'Marcos')
const p2 = criaPessoa('José', 'Marcos')

console.log(p1)

// nesse caso o prototybe de criaPessoa será o que foi definido em pessoaPrototype, assim não criando metodos repetitivamente melhorando a performance da aplicação.