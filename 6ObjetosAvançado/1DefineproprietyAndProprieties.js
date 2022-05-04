// no define propriety e proprieties conseguimos definir as propriedades de um objeto, se ele poderá ser alterado ou não, se ele será exibido ou não, se  seu valor poderá ser alterado ou não. ex

function Produto (nome,  preco, estoque) {
    Object.defineProperties(this, {
        nome: {

            enumerable: true, // define se ira mostrar a chave ou não
            value: nome, // o valor que irá receber
            writable: false, // se o seu valor pode ser editado ou não
            configurable: false // define se a chave pode ser reconfigurada ou não, no caso deletada do objeto, ou alterada suas propriedades

        },

        preco: {

            enumerable: true, // define se ira mostrar a chave ou não
            value: preco, // o valor que irá receber
            writable: true, // se o seu valor pode ser editado ou não
            configurable: false // define se a chave pode ser reconfigurada ou não, no caso deletada do objeto, ou alterada suas propriedades

        }
    } )

    Object.defineProperty(this, 'estoque', {

        enumerable: true, // define se ira mostrar a chave ou não
        value: estoque, // o valor que irá receber
        writable: true, // se o seu valor pode ser editado ou não
        configurable: false // define se a chave pode ser reconfigurada ou não, no caso deletada do objeto, ou alterada suas propriedades


    })
}


const p1 = new Produto ('Camisa', 29.30, 300)

console.log(p1)