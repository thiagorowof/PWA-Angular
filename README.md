# PWA-Angular
> Um progressive web app utilizando [AngularJS](https://github.com/angular/angular-cli) (7.3.1).

A aplicação é um simples sistema de cadastro de usuário e de login(Login sem campos) para uma tela com uma lista de usuários registrados, podendo organizar e filtrar os usuários dessa lista, além de remover usuários cadastrados.

![NPM Version][npm-image]
![Build Status][travis-image]
![Downloads Stats][npm-downloads]

## Sobre o projeto

- [x] Deve ser possível criar, listar e excluir os dados cadastrados pelo formulário;
- [x] Fazer a persistência dos dados no localStorage;
- [ ] HTML/CSS da tela com base no layout enviado;
- [ ] A página deve ser responsiva;
- [x] Para a interação do formulário utilize preferencialmente angularjs;
- [x] Utilizar bibliotecas css - Utilizei css/sass puro junto com o angular material;
- [x] Utilizar componentes do bower - Não houve necessidade, o próprio npm gerenciou os pacotes;
- [ ] Dê suporte a IE10+, Chrome, Safari e Firefox;
- [x] Padrão de Projeto e boas práticas;
- [x] Crie um passo a passo de como rodar sua aplicação (Sugestão);
- [x] Crie uma breve descrição da solução utilizada;
- [x] Uso de task runner;
- [x] Uso de pré-processador css;
- [x] Testes End to End;

Os pontos não preenchidos ainda estão em WIP, em desenvolvimento 

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


## To do

* Pontos que não estão preenchidos na parte de sobre o projeto
* Read-me em inglês

## Releases

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
