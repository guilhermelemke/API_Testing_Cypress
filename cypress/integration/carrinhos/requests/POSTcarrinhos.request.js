/// <reference types="cypress"/>

function registerCart(bearerToken, obj) {
    return cy.request({
        method: 'POST',
        url: 'carrinhos',
        headers: { 'Authorization': bearerToken },
        failOnStatusCode: false,
        body: obj
    })
}

export { registerCart };