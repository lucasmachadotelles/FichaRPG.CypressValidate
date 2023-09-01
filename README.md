# Conhecendo a aplicação em teste
A aplicação se chama Ficha de Novo Jogador, teve uma inspiração sutíl no modelo de ficha do jogo de RPG - dungeons and dragons - e foi desenvolvida usando: HTML, CSS e JavaScript.

## Funcionalidades da aplicação
A Ficha de Novo Jogador, como o próprio nome diz, é uma ficha susinta que serve para simular o cadastramento de um novo jogador/personagem de RPG.

### Campos obrigatórios
Os seguintes campos são obrigatórios, por padrão:

- Nome do personagem (campo do tipo texto)
- Idade (campo do tipo texto)
- Classe (campo do tipo texto)
- Nome do Jogador (campo do tipo texto)

### Outros campos
Além dos campos obrigatórios, o "Jogador" pode informar:
- Altura (campo do tipo texto)
- Peso (campo do tipo texto)
- Antecedentes (campo do tipo texto)
- Um anexo (o "jogador" pode adicionar um arquivo para ilustrar seu personagem)

### Mensagens

⚠️ Caso haja algum problema relacionado aos campos obrigatórios, a seguinte mensagem é exibida (em um fundo amarelo): `Valide os campos obrigatórios!`.

✅ Ao submeter a ficha com sucesso, a seguinte mensagem é exibida (em um fundo verde): `Ficha preenchida com sucesso.`

> Além disso, quando é salvo com sucesso, todos os campos voltam ao seu estado padrão.

## Desafio Do Projeto

Iremos automatizar, utilizando o framework cypress, todas as funcionalidades da aplicação, além de configurar um pipeline de integração contínua que executa tais testes sempre que mudanças forem enviadas ao GitHub.

Lembrem-se: "A melhor maneira de melhorar suas habilidades de codificação e técnicas de testes, é compartilhando seu conhecimento e ajudando outras pessoas. Forte abraço! 🧑‍🏫
