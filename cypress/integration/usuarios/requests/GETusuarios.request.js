/// <reference types="cypress"/>

function getAllUsers() {
    return cy.request({
        method: 'GET',
        url: 'usuarios',
        failOnStatusCode: false,
    })
}

export { getAllUsers };