- Então o usuário vai entrar no site, escrever uma palavra ou frase na caixa de texto. 

- Em seguida, vai clicar no botão salvar. 
   Esse botão salvar tem um evento de click. Quando ele for clicado a função salvar() vai realizar os comandos criados dentro dele.
    primeiro o programa vai guardar na variável tarefa a palavra ou frase que o usuário escreveu na caixa de texto.  Em seguida o programa vai verificar se essa variável está com algum valor armazenado, se não tiver, vai colocar uma mensagem no elemento com id 'quickMessage' avisando que não há valor. Até aqui uma parte do algoritmo foi completada.

    Se tiver algum valor essa verificação vai ser ignorada e o programa vai continuar rodando. Em seguida, esse valor que está na variável tarefa vai ser adicionado no array tarefas.

    depois o programa vai pegar o valor da caixa de texto e apagar, deixando a caixa de texto livre para receber outro valor. 

    adiante o programa vai mostrar a mensagem de confirmação.

    pronto, o algoritmo para salvar a tarefa foi realizado com sucesso.


    Se o usuário quiser ver as tarefas salvas ele vai clicar no botão 'minhas tarefas', que tem um evento de clique. Quando isso acontecer, a função mytasks vai rodar.
      A primeira ação que vai ser realizada após o clique será de armazenar a tag com o id 'tarefaTESTE' em uma variável chamada tarefaout. 
      Em seguida sera armazenada na variável tarefasLista a tag ul com o id 'tarefasLista'. 

      Adiante o programa vai remover qualquer valor inserido na tag ul.

      Em seguida, o for vai começar a trabalhar. 

      o for vai ter algumas condições: 
        primeiro vai criar uma variável chamada i com valor 0, esse i vai servir como referência. Ao lado temos uma verificação, na qual temos: se i for menor que a quantidade de itens no array tarefas; no vai ser o seguinte: sempre que 0 for menor que a quantidade de itens no array ele vai adicionar 1 ao 0, tornando 1. Na verdade ele vai começar por 0 que é o primeiro item do array, depois que for adicionado mais 1 ele vai para o segundo item.

        bom, enquanto ele verifica essas condições, a cada verificação ele vai realizar uma ação, no caso ele vai:
          criar um elemento html, no caso o li e vai armazernar esse li na variável li. 
          em seguida ele vai colocar o valor de i, no caso o valor do array na posição equivalente ao valor de i, no textcontent do elemento li criado. 
          Depois vai em fim gerar dentro do element ul, no caso tarefasLista, um elemento filho, o li criado no for.

          Esse li vai ser criado para cada item do array tarefas.
          

