/// <reference types="cypress"/>

function registerProduct(bearerToken, obj) {
    return cy.request({
        method: 'POST',
        url: 'produtos',
        headers: { 'Authorization': bearerToken },
        failOnStatusCode: false,
        body: obj
    })
}

export { registerProduct };