/// <reference types="cypress"/>

function getProduct(id) {
    return cy.request({
        method: 'GET',
        url: `produtos?_id=${id}`,
        failOnStatusCode: false,
    })
}

export { getProduct };