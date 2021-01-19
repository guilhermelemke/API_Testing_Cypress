/// <reference types="cypress"/>

function getAllCarts() {
    return cy.request({
        method: 'GET',
        url: `carrinhos?quantidadeTotal%3c=5`,
        failOnStatusCode: false,
    })
}

export { getAllUsers };