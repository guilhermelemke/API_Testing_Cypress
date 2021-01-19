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

## Pré requisitos para rodar o projeto:

* Node versão 10 ou superior

## Como rodar o projeto:

* Clone esse repositório:  
```git clone https://github.com/guilhermelemke/API_Testing_Cypress.git ```  
```cd API_Testing_Cypress ```
* Instale as dependências do projeto:  
```npm install ```
* Ative o Cypress:  
```npm run cypress:open ```

* Executa os testes de listagem de contas no site:
```GETusuarios.spec.js ```
* Executa os testes de cadastro de usuários no site:   
```POSTusuarios.spec.js ```
* Executa os testes de edição de conta no site:   
```PUTusuarios.spec.js ```
* Executa os testes de deleção de contas no site:
```DELETEusuario.spec.js ```