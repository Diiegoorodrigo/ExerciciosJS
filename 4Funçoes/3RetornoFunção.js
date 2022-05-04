// dentro das funções usamos o return, que retornara uma ordem que inserirmos na função
// podendo retornar até outras funções dentro da função exs:

function soma (a,b) {
    return a+b;
}
 
console.log(soma(1,2))

//retornará o valor 3

// também pode retornar criação de objetos ex:

function criaPessoa (nome,sobrenome) {
    return {nome, sobrenome}
}

const p1 = criaPessoa('João','Marcelo')
console.log(p1, typeof p1)

// retorna p1 com seu nome e sobrenome, e o tipo do p1 que é um objeto

// retornando funções

function falaFrase (comeco) {
    function falaResto(resto) {
        return comeco + ' => ' + resto;
    }

    return falaResto;

}

const primeraFrase = falaFrase('Aqui é o começo')
const restoFrase = primeraFrase('aqui é o fim')

console.log (restoFrase)

console.log(primeraFrase)

// nesse caso é como se fosse um encapsulamento, a função falaFrase é como um elemento pai, que tem seu filho falaResto, então quando chamadas em diferentes variavéis a função falaResto irá resgatar o conteudo que foi inserido na falaFrase, assim retornando ambos valores.
//  Considerando nesse caso que se fosse tentado executar a falaFrase sozinho, ela iria retornar a "Função falaResto" ou "a Frase + undefined" pq ela está retornarndo o falaResto. Isso usamos  em caso onde conseguimos resultados melhores diminuindo o tamanho do código, ex:

function criaMultiplicador (multiplicador) {

    return function (n){    
        return n * multiplicador
    }

}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);


console.log(duplica(3));
console.log(triplica(3));
console.log(quadriplica(3));

// nesse caso conseguimos ver explicitamente como usamos melhor esse exemplo de função dentro de função, as constantes duplica, triplica e quadriplica recebem o valor da função pai, que foram estabelecidos e quando são chamadas e recebem o valor, o valor é o filho, assim multiplicando pelos seus respectivos pais, sendo duplica por 2, triplica por 3 e quadriplica por 4