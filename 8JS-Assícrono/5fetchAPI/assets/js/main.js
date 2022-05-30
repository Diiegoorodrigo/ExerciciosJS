


document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {

  try {

    const href = el.getAttribute('href'); // atributo retornado

  const response = await fetch(href)

  if(response.status !== 200 ) throw new Error('ERRO NOSSO')

  const html = await response.text() // atributo convertido na promisse

  carregaResultado(html)  

  } catch  (e) {
    
    carregaResultado('Erro Pagina não')

  }
  
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}


// com fecth API é semelhante ao AJAX porém mais prático, conseguimos carregar dados de outras paginas em uma página sem que seja necessário mudar de página 
// no fecth API ele recebe os dados e converte em promisse já diminuindo a linha de código e tornando menos trabalhoso o processo da estrutura do código.

