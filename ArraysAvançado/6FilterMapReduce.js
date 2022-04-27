 // Usando os três metodos em um só comando.
 // Filtrar numeros pares
 // dobrar valores
 // somar tudo

 let numeros = [1,42,44,123,431,223,4,22,321,550]

 let numberDouble = numeros
 .filter(value => value % 2 === 0)
 .map(value => value * 2)
 .reduce((ac, value) => ac+value)

 console.log(numberDouble)