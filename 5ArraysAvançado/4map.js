// no metodo map nos mapeamos um array, sempre retornando tudo o que contem nele, podendo retornar valores diferentes, com a mesma mecânica do filter de receber funções dentro dele.
// Porém com map nos podemos retornar valores diferentes do array, podendo ou não modificar um array original ex:



// números em dobro

let numeros = [1,42,44,123,431,223,4,22,321,550]

let numberDouble = numeros.map(value => value * 2)

console.log(numberDouble)


// paracada elemento:
// Retorne apenas uma strig com o nome da pessoa.
//Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [ 
    {nome:'Marcelo', idade:32},
    {nome:'José', idade:90},
    {nome:'Marta', idade:42},
    {nome:'Maria', idade:62},
    {nome:'Pedro', idade:42},
    {nome:'Marco', idade:52},
    {nome:'João', idade:72},
]

let peopleName = pessoas.map(obj => obj.nome)
console.log(peopleName)

let unshiftName = pessoas.map(obj => ({idade: obj.idade}))
console.log(unshiftName)

let addID = pessoas.map(obj => {

    let newObj = {...obj}
    let newID = Math.random()* 2000;
    newObj.id = newID.toFixed(0)
   return newObj
})

console.log(addID)
console.log(pessoas)

// o ultimo foi feito adicionando uma nova variavel para receber o elemento no map, para não alterar o valor da variável original

