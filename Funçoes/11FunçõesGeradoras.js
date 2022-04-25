// as funções geradoras, são funções que entregam seus valores parcialmente, não entrega tudo de uma vez, é como se fosse uma função preguiçosa, ela vai entregar o que contem dentro dela, conforme ela for chamada. 
// para se criar uma função geradora usamos o recurso function* e é usado yield ao inves de return, pois o return dentro dessa função indica o fim do código dentro dela.


function* geradora1 ( ) {

    yield 'valor 1';
    yield 'valor 2';
    yield 'valor 3';
    yield 'valor 4';

}

const g1 =geradora1();

console.log(g1.next())
console.log(g1.next())
console.log(g1.next())
console.log(g1.next())
console.log(g1.next())

// nesse caso ele retornará o valor de 1 até 4, e o done como false, indicando que não terminou a função, porém o ultimo console.log retornará undefined mostrando que a função foi terminada. para mostrar apenas o valor também podemos usar o .value ex:




function* geradora2 ( ) {

    yield 'valor 1';
    yield 'valor 2';
    yield 'valor 3';
    yield 'valor 4';

}

const g2 =geradora2();

console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)




function* geradora3 ( ) {

    yield 'valor 21';
    yield 'valor 22';
    yield 'valor 33';
    yield 'valor 44';

}


const g3 =geradora3();

for (let valor of g3) {
    console.log(valor)
}

//

// dentro de funções geradoras também podem ser executadas outras funções ex:

function* geradora4 ( ) {

    yield 'valor 121';
    yield 'valor 222';
    yield 'valor 333';
    yield 'valor 444';

}

function* geradora5 ( ) {

    yield* geradora4();
    yield 'valor 51';
    yield 'valor 52';
    yield 'valor 53';
    yield 'valor 54';

}

g5 = geradora5()

for (let valor of g5) {
    console.log(valor)
}

// nesse caso o for retornará tanto quanto o valor que está na geradora 4 quanto na geradora 5, conforme o código é executado, lembrando para meu eu do futuro que estou usando o for apenas para não executar o .next().value varias vezes e entender que a função chama cada valor conforme ela é requisitada, e para de retornar os valores dentro dela quando acaba o que foi determinado dentro dela, assim funciona as funções geradoras.