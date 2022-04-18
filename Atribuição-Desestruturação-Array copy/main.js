//  na atrubuição via desestruturação é possível atrubuir valores a outras variaveis ex :
const numeros = [1,2,3,4,5,6,7,8];
const [primeiroNumero, segundoNumero] = numeros;
console.log(primeiroNumero,segundoNumero)

// o resultado será 1 e 2


// usando o " ... " podemos atribuir o restante do array que não foi utilizado

const [num1, num2, ...resto] = numeros;

console.log(num1, num2, resto)

// no caso acima num1 imprime 1 e num2 imprime 2 e o resto vai imprimir do valores 3 até o 8 que não foram utilizados

// também podemos pular um valor colocando um espaço vazio dentre as virgulas, ex:

const [n1, , n3, , n5] = numeros;
console.log(n1,n3,n5)

// no caso acima ele pulará o 2 e 4 , assim imprimindo 1,3 e 5