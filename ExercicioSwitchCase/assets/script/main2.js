const h1 = document.querySelector('.result h1');
const date = new Date();
h1.innerHTML = date.toLocaleString('pt-BR', {dateStyle:'full', timeStyle:'short'})

// exercicio com código resumido em apenas 3 comandos