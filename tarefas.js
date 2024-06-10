let tarefas = [
  {
    nome: 'Comprar leite',
    categoria: 'compras',
    marcado: false
  },
  {
    nome: 'Escutar chimbinha',
    categoria: 'lazer',
    marcado: true
  }
];

const insereTarefaNaPagina = (tarefa) => {
  const itemsTarefaEl = document.querySelectorAll(".item-tarefa");
  const listaTarefasEl = document.querySelector("#lista-tarefas");

  const primeiroItem = itemsTarefaEl[0];

  const elemento = document.createElement('li');
  elemento.textContent = tarefa.nome;
  elemento.classList.add("item-tarefa");
  elemento.classList.add("categoria-" + tarefa.categoria);
  
  if (listaTarefasEl.childElementCount === 0) {
    listaTarefasEl.appendChild(elemento);
  } else {
    listaTarefasEl.insertBefore(elemento, primeiroItem);
  }
}

const adicionarTarefaNoArray = () => {
  const inputNovaTarefaNomeEl = document.querySelector("#nova-tarefa-nome");
  const selectNovaTarefaCategoria = document.querySelector("#nova-tarefa-categoria");
  
  const nome = inputNovaTarefaNomeEl.value;
  const categoria = selectNovaTarefaCategoria.value;

  inputNovaTarefaNomeEl.value = "";
  inputNovaTarefaNomeEl.focus();

  const obj = {
    nome: nome,
    categoria: categoria,
    marcado: false
  };

  tarefas.push(obj);
  insereTarefaNaPagina(obj);
}

const btnIncluirNovaTarefa = document.querySelector("#incluir-nova-tarefa");
btnIncluirNovaTarefa.addEventListener("click", adicionarTarefaNoArray);

const inputNovaTarefaNomeEl = document.querySelector("#nova-tarefa-nome");
inputNovaTarefaNomeEl.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    adicionarTarefaNoArray()
  }
});