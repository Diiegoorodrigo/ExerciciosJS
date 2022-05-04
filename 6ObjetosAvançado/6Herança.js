// com herança conseguimos aplicar um objeto genérico (classe) em outros objetos.
// Imagine uma situação de que você tem uma loja e na loja contem produtos com diferentes especificações mas alguns valores em comum
// ex: Camisa, Caneca, livros
// Camisa -> tamanho, Caneca -> Material, livros -> sessão
// Primeiro devemos criar uma classe Produto, para aplicar tudo que há em comum

function Produto (nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    
    Object.defineProperty(this,'estoque' ,{
        enumerable:true,
        configurable: false,
        get: function () {
            return estoque
        }, 
        set: function (valor) {
            if(typeof valor !== 'number') return;
            estoque = valor
        }
    })
}

// aplicamos os metodos da classe

Produto.prototype.aumento = function (percent) {
    this.preco = this.preco + this.preco *(percent/100)
}

Produto.prototype.venda = function (qt) {
    this.estoque = this.estoque - qt;

}

// agora iremos especificar cada objeto chamando o produto dentro delees para atribuir os atributos em comum com Produto.call()

function Camisa (nome, preco, estoque, tamanho){

    Produto.call(this, nome, preco, estoque)
    this.tamanho = tamanho
    if(typeof estoque !== 'number') return 'tamanho errado'

}

Camisa.prototype = Produto.prototype;
Camisa.prototype.constructor = Camisa;

const surfTshirt = new Camisa ('Black Surf', 20, 30, 16)

console.log(surfTshirt)
surfTshirt.aumento(20)
surfTshirt.venda(10)
console.log(surfTshirt.estoque)
console.log(surfTshirt.preco)

function Caneca (nome, preco,  estoque, material) {
    Produto.call(this, nome, preco, estoque) 
    this.material = material
} 

Caneca.prototype = Produto.prototype;
Caneca.prototype.constructor = Caneca;


function Livros (nome, preco,  estoque, sessao) {
    Produto.call(this, nome, preco, estoque) 
    this.sessao = sessao 
} 

Livros.prototype = Produto.prototype;
Livros.prototype.constructor = Livros


const livroUm = new Livros ('Harry poti', 30, 30, 'Infanto-Juvenil' )
const canequita = new Caneca ('Caneca Aranha', 50, 30, 'porcelana')


console.log(livroUm)
console.log(canequita)

livroUm.venda(20)
console.log(livroUm.estoque)

let cpf = '428.741.708.95'
let cpfLimpo = cpf.replace(/\D+/g, '')
let cpfArray = Array.from(cpfLimpo)

