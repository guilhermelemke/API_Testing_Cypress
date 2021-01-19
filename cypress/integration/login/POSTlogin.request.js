/// <reference types="cypress"/>

function login(obj) {
    return cy.request({
        method: 'POST',
        url: 'login',
        failOnStatusCode: false,
        body: obj
    })
}

export { login };