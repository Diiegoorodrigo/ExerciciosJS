// em objetos básico vimos objetos literais que são criados de forma literal. ex:

const pessoa1 = {
    nome:'Pablo',
    sobrenome: 'Martins'
}

console.log(pessoa1)
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)

// Podemo ser criados com função fábrica (factory function). ex:

console.log('                ')
console.log('                ')


function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome
    }
}

const p1 = criaPessoa('Marcelo', 'Farias')
console.log(p1)
console.log(p1.nome)
console.log(p1.sobrenome)

// podemos criar também com funções construtoras 




console.log('                ')
console.log('                ')



function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Marcos','Silva')

console.log(p2)
console.log(p2.nome)
console.log(p2.sobrenome)


//  em objetos conseguimos adicionar metodos, adicionar chaves, conseguimos freezar para que nada seja alterado, podemos alterar valores dentro do objeto. ex

console.log('                ')
console.log('                ')


// metodo 

p1.nomeCompleto = function () {
    return`${this.nome} ${this.sobrenome}`
}
console.log(p1)
console.log(p1.nomeCompleto())

console.log('                ')
console.log('                ')

// adicionando chave 

p1.endereco = 'Avenida um'

console.log(p1)
console.log(p1.endereco)

console.log('                ')
console.log('                ')


// alterando valores e não deixando valores  serem alterados 

console.log(p1.nome)
p1.nome = 'Jegue'
console.log(p1.nome)


function PessoaEx (nome,  sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome

    Object.freeze(this)
    // pode ser usado em outros argumentos e elementos, basta colocar o valor dentro do metodo freeze.

}

const p4 = new PessoaEx ('Carter', 'Agente')

console.log(p4.nome)
p4.nome = 'Marta'
console.log(p4.nome)