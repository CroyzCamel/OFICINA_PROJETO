let tarefas = [];

function adicionarTarefa() {
    const campoEntrada = document.getElementById('task-input');
    const textoDaTarefa = campoEntrada.value.trim();

    if (textoDaTarefa !== '') {
        tarefas.push({ texto: textoDaTarefa, concluida: false });
        campoEntrada.value = '';
        renderizarTarefas();
    } else {
        alert("Por favor, digite uma tarefa válida!");
    }
}

function concluirTarefa(indice) {
    tarefas[indice].concluida = !tarefas[indice].concluida;
    renderizarTarefas();
}

function removerTarefa(indice) {
    tarefas.splice(indice, 1);
    renderizarTarefas();
}

function renderizarTarefas() {
    const listaDeTarefas = document.getElementById('task-list');
    listaDeTarefas.innerHTML = '';

    tarefas.forEach((tarefa, indice) => {
        const itemDaTarefa = document.createElement('li');
        itemDaTarefa.className = 'task-item' + (tarefa.concluida ? ' completed' : '');

        const textoDaTarefa = document.createElement('span');
        textoDaTarefa.textContent = tarefa.texto;

        const botaoConcluir = document.createElement('button');
        botaoConcluir.textContent = tarefa.concluida ? 'Desfazer' : 'Concluir';
        botaoConcluir.className = 'complete-btn';
        botaoConcluir.onclick = () => concluirTarefa(indice);

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Excluir';
        botaoRemover.className = 'remove-btn';
        botaoRemover.onclick = () => removerTarefa(indice);

        itemDaTarefa.appendChild(textoDaTarefa);
        itemDaTarefa.appendChild(botaoConcluir);
        itemDaTarefa.appendChild(botaoRemover);

        listaDeTarefas.appendChild(itemDaTarefa);
    });
}

document.getElementById('add-task-btn').addEventListener('click', adicionarTarefa);

document.getElementById('task-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});

renderizarTarefas();