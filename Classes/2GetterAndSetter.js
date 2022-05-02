// em classe também é póssivel usar os metodos get e set, para acessar valores e inserir valores ex:

class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }




    get aIdade () {
       
       console.log('sua idade é ',this.idade)
    }

    
    set aIdade (valor) {

        const data = new Date()
        const ano = data.getFullYear()
        if(typeof valor !== 'number') return
        if(valor > ano)  return console.log('Idade invalida') 
       
        return this.idade = ano - valor
    }

}

const p1 = new Pessoa ('Marta', 'Oliveira')
p1.aIdade = 1993
console.log(p1.aIdade)

// tambem podemos usar dentro de classe o "Symbol" para tornar um atributo privado, permitindo que seja alterado conforme estabelecido dentro de uma classe, ex: uma classe de um carro que recebe aceleração, assim alterando a velocidade conforme estabelecido não podendo passar de um limite, assim protegendo a classe de alguma alteração indevida


const _velocidade = Symbol('velocidade')
class Carro  {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0
    }

    get velocidade () {
        return this[_velocidade]
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return
        if(valor >= 100 || valor <= 0) return
        this[_velocidade] = valor
    }

    acelerar() {
        if(this[_velocidade] >= 100) return
        this[_velocidade] ++
    }

    freiar () {
        if(this[_velocidade] <= 0) return
        this[_velocidade] --
    }

}

const c1 = new Carro ('fusca')
console.log(c1.velocidade)

for( let i = 0; i <= 200; i++) {
    c1.acelerar ()
}

console.log(c1.velocidade)

for( let i = 0; i <= 200; i++) {
    c1.freiar ()
}

console.log(c1.velocidade)

// assim conseguimos proteger a classe de receber algo a mais do que o indesejado usando getter e setter e privando o atributo com Symbol
