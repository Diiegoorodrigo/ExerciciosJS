// Argumentos são valores que as funções recebem
// funções criadas com com "function" pode receber argumentos sem que sejam declarados quantos argumentos ela tem de receber, e esses argumentos vão pro arguments. ex:

function teste (a,b,c) {
    console.log(a,b,c,'argumentos alem de abc', arguments)
   
}

teste(1,2,3,4,5,6,7,8,9,10)

// no exemplo acima ira imprimir 1 2 3 que são a,b e c e irá imprimir um array de arguments que foram todos argumentos recebidos

// os argumentos pode receber valores padrão caso não seja inserido o seu valor quando requisitada a função. ex :

function soma (a, b=0) {
    console.log(a+b)
}

soma(2)

// nesse caso irá imprimir o valor de 2, isso é necessário pois se não houvesse um valor padrão, o resultado  da função seria NaN

// também conseguimos usar o rest operator.ex 

function rest(a,b,...c)
{
    console.log(a,b,c)
}

rest(1,2,3,4,5,6,7,8)

// imprimirá 1 = a  b = 2 e o c conterá um array do 3 ao 8