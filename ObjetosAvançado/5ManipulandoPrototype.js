// abaixo podemos ver como podemos aplicar o prototype, aplicando a herança de um objeto para outros objetos,  assim herdando suas caracteristicas.

function Produto (nome, valor, estoque){
    this.nome = nome
    this.valor = valor
    this.estoque = estoque


  Produto.prototype.desconto = function(percent){

    this.valor = this.valor - (this.valor * (percent /100 ))
   
}

Produto.prototype.venda = function (value) {
  this.estoque = this.estoque - value
}

}



const p1 = new Produto('Camisa', 60, 30)
console.log(p1)
p1.desconto(30)
console.log(p1.valor)

const p2 = {
  nome: 'Blusa',
  valor: 80,
  estoque: 20

}

Object.setPrototypeOf(p2, Produto.prototype)

p2.desconto(80)
console.log(p2.valor)
console.log(p2)


function OutroProduto (nome, valor, estoque){
  this.nome = nome
  this.valor = valor
  this.estoque = estoque

Object.setPrototypeOf(this, Produto.prototype)


}

const p3 = new OutroProduto('Calça',120,10)

console.log(p3)
p3.desconto(20)
console.log(p3.valor)

p3.venda(5)
console.log(p3.estoque)