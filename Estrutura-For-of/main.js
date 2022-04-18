// no For of usaremos ele com iteraveis, como strings ou arrays, pois um objeto não é  iteravel, logo não conseguimos usa-lo em objetos, assim como o for clássico. a estrutura for of diferente do for in, ele não retorna o indice, mas sim o valor. ex:

const frutas = ['uva', 'pera', 'abacaxi']

for (valor of frutas ) {
    console.log(valor)
}

// nesse caso ele retornará os valores diretos que estão dentro do array

const nome = 'Pedro Sampaio'

for (valor of nome) {
    console.log(valor)
}

// e no caso acima ele retornará cada letra contida dentro do string