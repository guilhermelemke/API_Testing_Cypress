/// <reference types="cypress"/>

function registerUser(obj) {
    return cy.request({
        method: 'POST',
        url: 'usuarios',
        failOnStatusCode: false,
        body: obj
    })
}

export { registerUser };