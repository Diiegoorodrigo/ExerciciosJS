// nesse exercicios iremos ver nodeList e iremos trocar o background de cada paragrafo com a cor natural do body

//primeiro selecionamos a div dos paragrafos

const paragrafos = document.querySelector('.paragrafo')

// sabendo que o querySelector seleciona apenas o primeiro elemento chamado, usaremos o queryselectorall para chamar todos elementos semelhantes dentro do elemento desejado assim criando uma NodeList com a quantidade de elementos que contem dentro do elemento paragrafo, no caso quatro elementos "p"

const ps = paragrafos.querySelectorAll('p');

// para definir a cor que o background ira inserir dentro do paragrafo, primeiro precisamos definir qual a cor que iremos usar, nesse caso usaremos a cor do body, para identificar a cor do body usaremos o getComputedStyle, que ira identificar os styles que estão sendo usados dentro do elemento desejado, nesse caso iremos extrair a cor do background,  então usaremos as seguintes variaveis

const bodyEstilo = getComputedStyle(document.body);
// para identificar os styles dentro do body

const bgColor = bodyEstilo.backgroundColor;
// inserir a cor que está sendo usada no body

// abaixo criaremos um for para varrer o ps e retornar os valores que estão dentro dele, nesse caso uma nodeList de 4 elementos p que está dentro dela

for (let i of ps ) {
    i.style.backgroundColor = bgColor;
    i.style.marginBottom = '10px';
    i.style.color = 'white'
    i.style.padding = '10px'
}

// acima definimos que o background de cada p recebe o background do Body, também adicionamos ao style de cada p uma margem para observarmos o resultado em cada p e mudamos a cor da fonte e inserimos um padding para uma estetica melhor.