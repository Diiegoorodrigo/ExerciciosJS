// na estrutura de atribuição via desetruturação em objetos é semelhante a dos arrays a diferenteça é que colocamos "{}" ex

const pessoa = {
    nome:'Diego',
    sobrenome:'Oliveira',
    idade: 29,
    endereco: {
        rua:'Av Teste',
        numero: 120
    }
}

const {nome} =  pessoa;
console.log(nome)

// nesse caso vai imprimir o nome Diego


// também podemos atribuir um valor de dentro do objeto alterando o nome da varialvel que iremos inserir na atribuição, colocando a variavel com ":" ex: nome:
//ex:

const { nome:n} = pessoa
console.log(n)

//nesse caso ira imprimir mais uma vez o nome DIego

// também pode ser atribuido o map dentro do objeto, nesse caso o endereço, ex:

const { endereco: {rua, numero} } = pessoa;
console.log(rua, numero);

// no caso a variavel rua imprime o nome da rua e o numero imprime o numero 

// nos objetos também usamos o "..." para atribuir o restante que não foi atribuido em uma variavel, e tambem podemos colocar um valor padrão para no caso não tem um resultado dentro da variavel ex:

const {nome:s, sobrenome:sb, sala = 'Não definido', ...resto} = pessoa;

console.log(s, sb, sala, resto);

//no caso acima ele vai retornar o nome, sobrenome, e sala vai ter o valor padrão que foi definido e o resto vai recebero resto do objeto.

// No exemplo a seguir iremos ver como iria se comportar se houvesse uma variavel "sala atribuida no objeto"

const pessoa2 = {
    nome:'Marcelo',
    sobrenome:'Pasquali',
    idade:39,
    sala:3,
    endereco: {
        rua:'Av 3',
        numero: 4
    }
}

const {nome:n2, sobrenome:a, sala:room='não definido',...rest} = pessoa2;

console.log(n2,a, room, rest)

// nesse caso a variavel sala não retornar o valor padrão, mas sim retornará o valor 3 que foi definido no objeto pessoa2