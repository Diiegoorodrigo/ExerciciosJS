//  Object.values - Retorna os valores dentro  de um objeto

const pessoa = {
    nome: 'Luis',
    sobrenome:'Silva'
}

console.log(Object.values(pessoa))
console.log('     ')
console.log('     ')

//  Object.entries - retorna os valores e as chaves do objeto dentro de um array 

console.log(Object.entries(pessoa))
console.log('     ')
console.log('     ')

// Object.getOwnPropertyDescriptor(objeto, propriedade) - retorna a configuração de cada chave do objeto 

console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome'))
console.log('     ')
console.log('     ')

// Object.assign(des, any) - cópia um objeto para dentro de outro variavél, assim criando um novo objeto e também pode adicionar novas propriedads no objeto

const copiaPessoa = Object.assign({}, pessoa , {idade:35})

console.log(copiaPessoa)

console.log('     ')
console.log('     ')

// ... spread operator - espalhar os valores e chaves de outro objeto em um novo objeto. também podendo adicionar novo elementos dentro do objeto.

const spreadPessoa = {...pessoa ,idade: 35}
console.log(spreadPessoa)

//object.keys mostra as chaves de um objeto
//object.freeze congela um objeto, não deixando ele ser alterado
// Object.defineProperties   - define as propriedades de um elemento de um objeto, tornando ele editavel ou não, se ele será visivel ou não, se poderá ser alterado o seu valor ou não
// Object.defineProperty  - define as propriedades de um elemento de um objeto, tornando ele editavel ou não, se ele será visivel ou não, se poderá ser alterado o seu valor ou não