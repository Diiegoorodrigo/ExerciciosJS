function meuEscopo () {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.result');

    const pessoas = [];

    function reciveEvent (evento) {

        evento.preventDefault();

        const nome = form.querySelector('.name');
        const sobrenome = form.querySelector('.last-name');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
        
        console.log(pessoas);

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`
    }

   form.addEventListener('submit', reciveEvent)

}

meuEscopo();

// Criação de um código para inserir valores em um Objeto