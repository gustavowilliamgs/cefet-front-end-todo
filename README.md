# Lista de Tarefas para Procrastinar

Gerencie aquelas tarefas que você quer ~~não~~ fazer.

![Resultado final da atividade](docs/resultado-final.png)

## Atividade

Você deve fazer um sistema para cadastrar novas atividades que você ~~não~~
quer fazer. Fazendo isso, você vai treinar usar objetos em JavaScript e
criar elementos HTML dinamicamente.


### Exercício 1: Carregar itens existentes

No arquivo `todo.js` existe um vetor `itensTodo` em que cada item
representa uma tarefa.

Neste exercício, você deve criar uma função `insereItemNaPagina` que, recebe
um objeto com uma tarefa e insere um elemento HTML `<li>` na
lista de tarefas (_i.e._, `ul#lista-todo`). Ele **deve ser inserido ao final**.

O `<li>` que representa a tarefa deve ter uma classe `item-todo`. Se a
tarefa está `marcado` como `true`, você deve colocar a classe `marcado`
no `<li class="item-todo">...</li>`, além da `item-todo`.

Depois de criar a função, chame-a para cada item que está no vetor `itensTodo`.
Logo antes de popular o elemento HTML da lista com as tarefas, não se
esqueça de remover todos os filhos que estiverem lá.

### Exercício 2: Incluir um novo item

Quando o usuário clicar no botão `#incluir-novo-item`, (a) crie um novo objeto
representano a nova tarefa, (b) coloque-a ao final do vetor `itensTodo` e,
então, (c) chame a função que `insereItemNaPagina`.

O nome do item é o que o usuário digitou no campo, a categoria padrão é
`outros`, a propriedade `marcado` deve ser `false`.

Ao final dessa função, você deve **limpar o campo** onde o usuário digitou
a tarefa (_i.e._, `novo-item-nome`).

Opcionalmente, você pode **"devolver o foco"** para esse mesmo controle. Todo
elemento HTML que pode "ter o foco" tem um método `focus()` que podemos chamar
assim:

```js
// pede o elemento para "roubar o foco" - mover o cursor para dentro dele
elemento.focus();
```

### Desafio 1: Inserir novos itens no início

Em vez de inserir novos itens por último, insira-os no topo da `ul#lista-todo`.
Para isso, lembre-se dos 3 métodos para vincular novos elementos HTML
na página e escolha o apropriado:

1. `containerEl.appendChild`
1. `containerEl.insertBefore`
1. `containerEl.replaceChild`


### Desafio 2: Pressionar "Enter" inclui o item

Além do clique no botão, faça com que o pressionar da tecla "Enter",
quando o foco estiver no campo de texto (_i.e._, `novo-item-nome`), também
insira a nova tarefa no vetor e na página.

Para isso, você pode usar o evento _keyup_ do controle e, dentro da _callback_,
perguntar qual `e.key` foi pressionada. Se `e.key === 'Enter'`, você pode
chamar a mesma função que registrou para o clique do botão.

### Desafio 3: Escolher a categoria do item

Cada tarefa pode ter uma categoria associada. Descomente o código do desafio 3
e escreva código que permita que o usuário escolha qual a categoria da nova
tarefa.

Quando for incluir o elemento HTML dessa nova tarefa, coloque no `<li class="item-todo">` uma outra classe CSS com o nome `categoria-NOME`, em
que NOME pode ser `lazer`, `compras` ou `estudos` (para as
quais já existem regras CSS de estilização).
