// as funções construtoras são semelhantes as funções fabricas, porém quando escritas não são necessário o uso de virgulas para os atributos dos  objetos criados.
// Todas funções construtoras devem ser criadas com a primeira letra maiscula, pois recebem o metodo new para criação de um novo objeto.
// as funções construtoras  também conseguem criar atributos publicos e atributos privados, diferenciados pela palavra "this" para os atributos publicos.

function Carro (marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;

    const ID = 123;

    motraID = () => {
        console.log(ID)
    };

    this.falaTudo = () => {
        console.log(this.modelo + 'é da marca ' + this.modelo + ' do ano ' + this.ano)
        console.log(ID)
    }
}

const carro1 = new Carro('Fiat','Uno',2000);
carro1.falaTudo();
try {
    carro1.motraID()
} catch (e) {
    console.log('Não é uma função')
}

// no caso acima veremos que o objeto criado, ira apenas executar a função publica, que é  a falaTudo mostrando os atributos do carro criado e o ID, e não conseguirá usar a função mostraID pois é privada e protegida dentro da função que ela foi criada.
