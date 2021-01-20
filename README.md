# Automação da API do Site: https://serverest.dev/
[![Badge ServeRest](https://img.shields.io/badge/API-ServeRest-green)](https://github.com/PauloGoncalvesBH/ServeRest/)

O projeto foi desenvolvido utilizando Cypress. Com o uso da biblioteca faker para criação de dados.

## Objetivo

Testar as funcionalidades da API nos seguintes cenários:

  Testes no Endpoint /usuarios:
* Validar usuários cadastrados com sucesso;
* Validar verificações realizadas no cadastro de usuário;
* Validar Edição de um usuário;
* Validar Exclusão de um usuário.

  Testes no Endpoint /produtos:
* Validar produtos cadastrados com sucesso;
* Validar o estoque de um produto após venda ou cancelamento de venda;

## Pré requisitos para rodar o projeto:

* Node versão 10 ou superior
* GIT

## Como rodar o projeto:

* Clone esse repositório:  
```git clone https://github.com/guilhermelemke/API_Testing_Cypress.git ```  
```cd API_Testing_Cypress ```
* Instale as dependências do projeto:  
```npm install ```
* Ative o Cypress:  
```npm run cypress:open ```


* Executa os testes de listagem de contas:
```GETusuarios.spec.js ```
* Executa os testes de cadastro de usuários:   
```POSTusuarios.spec.js ```
* Executa os testes de edição de conta:   
```PUTusuarios.spec.js ```
* Executa os testes de deleção de contas:
```DELETEusuario.spec.js ```
* Executa os testes de cadastro de produtos:
```POSTprodutos.spec.js ```
* Executa os testes de estoque de produtos:
```GETprodutos.spec.js ```
* Executa os testes de cadastro de carrinhos:
```POSTcarrinhos.spec.js ```