// escreva uma função chamada ePaisagem 
//que recebe dois argumentos, largura e altura de uma imagem
// Retorne true se a imagem estiver no modo paisagem

function ePaisagem (largura,altura){
    return largura > altura ? true : false
}

// nesse caso não precisa colocar true e false, pq a condição já retornara false ou true

const eP = (largura,altura) => largura > altura;

console.log (eP(122,100))
