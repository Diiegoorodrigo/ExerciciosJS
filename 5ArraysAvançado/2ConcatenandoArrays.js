// para concatenar arrays podemos usar o metodo concact ou o spread operator:ex

let a1 = [1, 2, 3];
let a2 = [4,5,6];

let a3 = a1.concat(a2);

console.log(a3);

let a4 = [7,8,9];
let a5 = [...a3, ...a4];

console.log(a5)


// no a3 veremos a impressão de 1 a 6 e no a5 veremos a impressão de  1 a 9
// lembrando que também podemos inserir outros valores caso for desejado dentro da concatenação de arrays ex:

let a6 = [...a5, ...[10,11,12], 'luiz', true]

console.log(a6)
 

// no a6 veremos a impressão dos valores de a5, 10,11,12, luiz e true