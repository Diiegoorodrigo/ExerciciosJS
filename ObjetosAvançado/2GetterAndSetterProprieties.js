// Dentro do meotodo proprieties/propriety também conseguimos usar o metodo get and set para insetir ou capturar valores. ex:

function Produto (nome,  preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {

        enumerable: true, // define se ira mostrar a chave ou não
        configurable: true, // define se a chave pode ser reconfigurada ou não, no caso deletada do objeto, ou alterada suas propriedades

        get: function () {
            return estoque;
        },

        set: function (valor) {
            if(typeof valor !== 'number') {
                console.log('Tipo errado')
                return;
                
            }
            estoque = valor ; 
        }

    })
}

const p1 = new Produto('Camisa', 28.30, '20')

console.log(p1)
console.log(p1.estoque)

p1.estoque = 'Santos'
console.log(p1.estoque)

p1.estoque = 300;
console.log(p1.estoque)