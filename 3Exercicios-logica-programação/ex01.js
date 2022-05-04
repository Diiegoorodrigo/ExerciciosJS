// escreva uma função que recebe 2 numeros e retorne o maior deles

function numeros (n1,n2){
  
    if (n1 > n2) {
        return n1
    } else {
        return n2
    }

}

// modos mais curtos para escrever a função 

function numeros2 (n1,n2){
  
    if (n1 > n2) return n1;
   return n2;

}

// operação ternaria

function numeros3 (n1,n2) {
    return n1 > n2 ? n1 : n2
}

// arrow function + operação ternaria

const numbers = (n1,n2) => {
    return n1 > n2 ? n1 : n2
}

const numbers2 = (n1,n2) => n1 > n2 ? n1 : n2;


