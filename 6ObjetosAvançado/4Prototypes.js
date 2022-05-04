// Construtora -> molde (classe)

function Pessoa (nome, sobrenome) {

    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

}


// instância 

const pessoa1 = new Pessoa('Marcos','Paulo') // objeto criado através da função construtora.
const pessoa2 = new Pessoa('João','Paulo') // objeto criado através da função construtora.

console.dir(pessoa1)
console.dir(pessoa2)

// se observarmos cada objeto criado, criará na memória seus atributos, porém nesse exemplo acima também criará o metodo nomeCompleto, cada vez que um novo objeto for criado, criará o metodo junto com ele, gerando assim um problema de performance. Como podemos mitigar esse equivoco?

// Para isso usamos os prototipos, pois o javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro, se observarmos o molde new Date() contem várais funções executaveis, porém que não estão inseridas no objeto que ela foi criada, ela utiliza as funções herdadas de um outro objeto.

//o protótipo é um termo usado para se refefir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.
// Cada objeto tem uma referência interna para um protótipo (___proto__) que vem da propriedade prototupe da função construtora que foi usada para crialo. QUando tentamos acessar um membro de um objeto, primeiro o moto do JS vai tentar encontrar este membro no proprio objeto e depois a cadeia de protótipos é usada até o topo da cadeia: ex: pessoa1 -> Pessoa.prototype -> Object.prototype


let data = new Date()

data.getDate  = function  () {
    return 'Ola'
}

console.log(data.getDate())

// veja o  exemplo acima, o objeto data, por herança do seu prototype já tem uma função getDate que retornar o valor do dia definido, porém como observamos no código ácima só para deixar claro a respeito de como funciona a hierarquia do prototype ele primeiro procurou o metodo dentro do objeto criado, assim sobreescrevendo o valor do metodo do new Date, dando prioridade para o que está no objeto, porém não encontrando no objeto ele procura eu seu prototype, e não achando dentro do prototype do objeto, ele procurará no molde de criação do objeto, assim seguindo essa hierarquia de busca.

// ou poderia aplicar até dentro do molde do objeto ex:

Date.prototype.getHours = function () {
    return 'fui alterado'
}

console.log(data.getHours())

// veremos que o proto de Date foi alterado.

// assim compreendemos um pouco sobre prototype.