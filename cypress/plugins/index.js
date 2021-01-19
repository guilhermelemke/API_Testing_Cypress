/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

const faker = require("faker");

module.exports = (on, config) => {
  on("task", {
    freshUser() {
      user = {
        nome: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: "true"
      };
      return user;
    }
  }),
  on("task", {
    newProduct() {
      product = {
        nome: faker.commerce.productName(),
        preco: faker.commerce.price(),
        descricao: faker.commerce.productDescription(),
        quantidade: faker.random.number()
      };
      return product;
    }
  })
}