// criar um for que que crie elementos dentro do html com a estrutura de atribuição via desestruturaçãp

// criar um array que contenha objetos para serem usados

const elements = [
    {tag:'h1', texto:'Titulo'},
    {tag:'p', texto:'Lorem ipsum'},
    {tag:'section', texto:'Texto 3'},
    {tag:'footer', texto:'Texto 4'},
]

// criar variaveis que serão usadas dentro do for

const contaniner = document.querySelector('.container');
const div = document.createElement('div');

// criar a estrutura for para ler e  executar o comando para criar o elemento no html

for (let i = 0 ; i < elements.length; i++) {
    let {tag, texto} = elements[i];
    let creatTag = document.createElement(tag);
    creatTag.innerHTML = texto;
    div.appendChild(creatTag);
}

contaniner.appendChild(div);

// na linha 19 foi criado a estrutura for com base no length do elements para repetir conforme o  tamanho do array
// na linha 20 foi criado uma atribuição de acordo com o objeto definido pelo elements[i] para pegar os valores de tag e texto dentro do objeto
// na  linha 21 foi criadouma variavel para criar um elemento dentro do htlm com a tag definida no objeto selecionado
// na linha 22 foi criado um código para inserir o texto na variavel criada no html
// na linha 23 foi declarado uma variavel para atribuir um filho para a  variavel div. assim criando um elemento dentro do div no html
// por final foi atribuido a div  dentro do container