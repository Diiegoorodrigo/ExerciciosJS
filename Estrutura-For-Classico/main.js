// no for classico usamos a estrutura que muitos já usaram que é criando uma variavel indicie, atribuindo um valor a ela, uma condição e uma adição ou subtração. ex:

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// no caso acima foi declarado um valor 0 para "i" enquanto i menor ou igual a  ele imprime o valor de i no caso e adicionando um ao final, ele imprimirá de 0 até 10 que é o valor igual a 10 e quando for atribuido +1 e ficando o valor de 11 a estrutura ira parar de repetir.

// essa estrutura pode ser usada em outras formas, a mais comum é definer um numero par e impar,ex:

for (let i = 0; i <=6; i++){
    let par = i % 2 ===0 ? 'par' : 'impar';
    console.log(i, par)
}

//  combinado com uma condição ternária ele identifica os números que são pares e os numeros que são impares

// pode ser usado para identificar valores dentro de um array, ex:

const lista = [ 'casa', 'chave', 'barril', 'pedra'];

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}

// nesse caso ele imprimirá os valores que estão dentro do array lista.