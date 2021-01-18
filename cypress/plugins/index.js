/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

const faker = require("faker");

module.exports = (on, config) => {
  on("task", {
    freshUser() {
      user = {
        username: faker.name.firstName(),
        email: faker.internet.email(),
        password: "newPassword"
      };
      return user;
    }
  });
}