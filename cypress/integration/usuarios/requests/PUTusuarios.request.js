/// <reference types="cypress"/>

const payloadUser = require('../payloads/edit-user.json');

function editUser(id) {
    return cy.request({
        method: 'PUT',
        url: `usuarios/${id}`,
        failOnStatusCode: false,
        body: payloadUser
    })
}

export { editUser };