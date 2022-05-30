// fetch('pessoas.json')
//   .then(resposta => resposta.json())
//   .then(json => carregaElementosNaPagina(json));// 

 axios('pessoas.json')
   .then(resposta => carregaElementosNaPagina(resposta.data));

 

function carregaElementosNaPagina(json) {
  const table = document.createElement('table');1
  const pessoasMaior50 = []
  

  for(let pessoa of json) {

    if(pessoa.idade > 50) {

      pessoasMaior50.push(pessoa)

   

  } 
  
  
 }

 for (let pessoa of pessoasMaior50) {
  const tr = document.createElement('tr');

  let td1 = document.createElement('td');
  td1.innerHTML = pessoa.nome;
  tr.appendChild(td1);

  let td2 = document.createElement('td');
  td2.innerHTML = pessoa.idade;
  tr.appendChild(td2);

  table.appendChild(tr);

 const resultado = document.querySelector('.resultado');
resultado.appendChild(table);

 }


 

}