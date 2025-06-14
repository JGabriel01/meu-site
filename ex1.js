const formulario = document.getElementById('Formulario');
const texto = document.getElementById('texto');
const botao = document.getElementById('submit');
const listaUl = document.getElementById('listaUl');

let tasks = [];
function carregarTarefa() {
     tasks = JSON.parse(localStorage.getItem('tarefas') || '[]');
     renderizarTarefa();
}

function salvarTarefa() {
    localStorage.setItem('tarefas', JSON.stringify(tasks));
}

function renderizarTarefa() {
    listaUl.innerHTML = '';

    tasks.forEach((tarefa, indice) => {
        const novaLinha = document.createElement('li');
        novaLinha.textContent = tarefa;

        const remover = document.createElement('button');
        remover.textContent = 'Remover';
        remover.onclick = () => retirarTarefa(indice);

        listaUl.appendChild(novaLinha);
        novaLinha.appendChild(remover);
    });
}

function adicionarTarefa(tarefas) {
    tasks.push(tarefas);
    renderizarTarefa();
    salvarTarefa();
}

function retirarTarefa(indice) {
    tasks.splice(indice,1);
    renderizarTarefa();
    salvarTarefa();
}

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const tarefaText = texto.value.trim();

    if(tarefaText !== '') {
        adicionarTarefa(tarefaText);
        texto.value = '';
    } else {

    }
})

document.addEventListener('DOMContentLoaded', carregarTarefa);

const Tema = document.getElementById('tema');
const body = document.body;

Tema.addEventListener('click', () => {
    body.classList.toggle('tema-escuro')
    if (body.classList.contains('tema-escuro')) {
        localStorage.setItem('tema', 'escuro')
    } else {
        localStorage.setItem('tema', 'claro')
    }});

function aplicarTema() {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'escuro') {
        body.classList.add('tema-escuro');
    } else {
        body.classList.remove('tema-escuro');  
    }
}

document.addEventListener('DOMContentLoaded', aplicarTema);