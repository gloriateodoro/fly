function adicionarTarefa() {
    const inputTarefa = document.getElementById('input-tarefa');
    const listaTarefas = document.getElementsByClassName('lista-tarefas')[0];

    const tarefa = document.createElement('li');

    if (inputTarefa.value === ''){
        alert('Por favor, digite uma tarefa');
        return;
    }
    tarefa.textContent = inputTarefa.value;
    tarefa.classList.add('tarefa-item');

    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'X';
    btnRemover.classList.add('btn-remover');

    tarefa.appendChild(btnRemover);

    btnRemover.addEventListener('click', function() {
        tarefa.remove();
    })

    tarefa.addEventListener('click', function () {
        tarefa.classList.toggle('concluida');
    })

    listaTarefas.appendChild(tarefa);

    inputTarefa.value = '';
}

const itensLista = document.querySelectorAll('.tarefa-item');

itensLista.forEach(function (tarefa) {
    tarefa.addEventListener('click', function () {
        tarefa.classList.toggle('concluida');
    })
})