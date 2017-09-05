let novoItemNomeEl = document.querySelector('#novo-item-nome');
let incluirNovoItemEl = document.querySelector('#incluir-novo-item');

let listaTodoEl = document.querySelector('#lista-todo');
let itensTodo = [
  {
    nome: 'Comprar leite',
    categoria: 'compras',
    data: new Date(2016, 9, 5),
    marcado: false
  },
  {
    nome: 'Escutar chimbinha',
    categoria: 'lazer',
    data: new Date(2017, 8, 1),
    marcado: true
  }
];

function insereItemNaPagina(item) {
  let itemEl = document.createElement('li');
  itemEl.classList.add('item-todo');
  itemEl.innerHTML = item.nome;

  listaTodoEl.append(itemEl);
}

listaTodoEl.innerHTML = '';
itensTodo.forEach(insereItemNaPagina);


function incluiNovoItem() {
  let novoItem = {
    nome: novoItemNomeEl.value,
    data: new Date(),
    marcado: false
  };
  itensTodo.push(novoItem);

  insereItemNaPagina(novoItem);

  novoItemNomeEl.value = '';
  novoItemNomeEl.focus();
}

incluirNovoItemEl.addEventListener('click', incluiNovoItem);
novoItemNomeEl.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    incluiNovoItem()
  }
});
