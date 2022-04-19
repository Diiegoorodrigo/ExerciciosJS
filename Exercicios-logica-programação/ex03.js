// escreva uma função que recebe um número e retorne o seguinda.
// numero é divisivel por 3 retorne = fizz
// numero é divisivel por 5 retorne = buzz
// numero é divisivel por 3 e 5 retorne = fizzbuzz
// numero não divisivel por 3 e 5 retorne = retorne o numero
// checar se o numero é realmente um numero = retorner o numero
// use a função  com numeros entre 0 e 100

function fizzBuzz (n) {

  
    if (typeof n !== 'number') return n;
    if (n % 5 === 0 && n % 3 === 0 ) return 'fiizbuzz';
    if (n % 3 === 0) return 'fizz';
    if (n % 5 === 0 ) return 'buzz';
    return n;
    

}

for ( let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}