# PWA-Angular
> Um progressive web app utilizando [AngularJS](https://github.com/angular/angular-cli) (7.3.1).

A aplicação é um simples sistema de cadastro de usuário e de login(Login sem campos) para uma tela com uma lista de usuários registrados, podendo organizar e filtrar os usuários dessa lista, além de remover usuários cadastrados.

![NPM Version][npm-image]
![Build Status][travis-image]
![Downloads Stats][npm-downloads]

## Sobre o projeto

- [x] Deve ser possível criar, listar e excluir os dados cadastrados pelo formulário;
- [x] Fazer a persistência dos dados no localStorage;
- [x] HTML/CSS da tela com base no layout enviado - O mais fiel possível...como não me foi enviado as fontes, nem dito quais eram, dentre outros pontos, tentei desenvolver com algo mais próximo delas;
- [x] A página deve ser responsiva - Responsividade testada nos navegadores e devices: um android zenfone 5 e ios iphone 5 e 6;
- [x] Para a interação do formulário utilize preferencialmente angularjs - feito;
- [x] Utilizar bibliotecas css - Utilizei css/sass puro junto com o angular material;
- [x] Utilizar componentes do bower - Não houve necessidade, o próprio npm gerenciou os pacotes;
- [x] Dê suporte a IE10+, Chrome, Safari e Firefox - Testei com o ie10 10.0.46, o firefox 64.0.2 e o chrome 72.0.3626;
- [x] Padrão de Projeto e boas práticas;
- [x] Criar um passo a passo de como rodar sua aplicação;
- [x] Criar uma breve descrição da solução utilizada;
- [x] Uso de task runner - npm;
- [x] Uso de pré-processador css - sass e arquivos .scss;
- [x] Testes End to End - Feitos e testes unitários de bônus;

Em resumo, utilizei basicamente apenas o angular e suas próprias dependências (animations, router, material) para o desenvolvimento do projeto.
ngx-webstorage-service para armazenamento de dados no local storage.
karma e protractor para os testes.

## Instalação

*É necessário ter o NodeJS(NPM) mais atual instalado.

Na pasta PWA-Angular/PWA-Angular/ executar para instalar as dependências:
```sh
npm install
```

## Utilização

### Server de desenvolvimento

Executar `ng serve` ou `npm run start` para levantar um servidor de desenvolvimento. Navegar para `http://localhost:4200/` para ver a aplicação em funcionamento.

### Buildar Aplicação

Caso ache necessário, executar `ng build` para buildar o projeto. A build fica armazenada na pasta `dist/`. Usar a flag `--prod` para uma build de produção.

## Testes

Os testes necessitam do navegador Chrome instalado.

Executar `ng test` ou `npm run test` para rodar testes unitários via [Karma](https://karma-runner.github.io)

Executar `ng e2e` ou `npm run e2e` para rodar testes ponta a ponta (e2e, end-to-end) via [Protractor](http://www.protractortest.org/).


## To do / WIP

* Readme versão em inglês
* Uma organização melhor no código: remoção de comentários que deixei propositalmente para olharem e tirarem dúvidas.

## Releases

* 0.0.3
    * Ajustes de layout
* 0.0.2
    * Testes unitários e e2e desenvolvidos
* 0.0.1
    * Primeira Release
    * Work in progress
    * Core do projeto todo funcional

## Meta

Thiago de Albuquerque – [@Thiagorowof](https://twitter.com/Thiagorowof) – thiago@parasolcs.com
[https://github.com/thiagorowof/](https://github.com/thiagorowof/)


[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
