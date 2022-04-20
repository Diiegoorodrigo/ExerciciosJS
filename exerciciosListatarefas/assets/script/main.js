// criar uma lista de tarefas


const btnAddTarefas = document.querySelector('.tarefas');
const inputTarefa = document.querySelector('.tarefas-input');
const list =  document.querySelector('.lista')


// funções

// função que cria um elemento dentro da ul

function creatLi () {
    const li = document.createElement('li')
    return li;
}

// função que criará um botão para o item da lista

function creatButton(li) {
    const button = document.createElement('button');
    button.innerText = 'Apagar';
    button.setAttribute('class',  'apagar')
    li.appendChild(button)
}

// função para inserir uma nova tarefa

function creatTarefa (textoInput) {
    const li = creatLi();
    li.innerHTML = textoInput;
    list.appendChild(li)
    cleanTarefa();
    creatButton(li)
    saveTarefa();
}

// função que limpa o valor do input assim que inserido uma nova tarefa

function cleanTarefa () {
    inputTarefa.value = '';
    inputTarefa.focus();
}

// função para salvar as tarefas que já foram inclusas no HTML para quando a pagina ser recarregada as tarefas permanecerem ali

function saveTarefa () {
    const liTarefas  = list.querySelectorAll('li')
    let listaTarefa = [];


    for( let tarefa of liTarefas) {
        let tarefaTxt = tarefa.innerText;
        tarefaTxt = tarefaTxt.replace('Apagar', '');
        listaTarefa.push(tarefaTxt)   
    } 

    const tarefaJSON = JSON.stringify(listaTarefa);
   localStorage.setItem('tarefas', tarefaJSON);
   // o localStorage  só armazena string, assim convertemos os objetos to array em string atraves do JSON para assim armazenar eles no localStorage
    
}

function addSaveTarefas () {
    const tarefas = localStorage.getItem('tarefas')
    const listaTarefas = JSON.parse(tarefas)

    // O JSON que virou uma string retorna ao seu estado de array, assim nos permitindo manipula-lo mais uma vez, para que seja retornado na interface do navegador
    
    for (let tarefa of listaTarefas) {
        creatTarefa(tarefa)
    }
}

addSaveTarefas();

// eventetos

// evento de capturar a tecla pressionada, nesse caso a tecla enter para adicionar uma tarefa

inputTarefa.addEventListener('keypress', function(e){

    if(e.keyCode===13 && !inputTarefa.value) return alert('insira uma tarefa');
    if(e.keyCode === 13 ) creatTarefa(inputTarefa.value);
    
    
})

// evento de click no button para adicionar uma tarefa

btnAddTarefas.addEventListener('click', function(){
    
    if(!inputTarefa.value) return alert('insira uma tarefa');
    creatTarefa(inputTarefa.value);
    
})


// evento de target.click no botão apagar para remover uma tarefa que foi adicionada


document.addEventListener('click', function(e){
    const element = e.target;
    if(element.classList.contains('apagar')) {
        element.parentElement.remove()
        saveTarefa()
    }
})