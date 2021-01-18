/// <reference types="cypress"/>

const payloadUser = require('../payloads/edit-user.json');
const payloadEditUser = require('../payloads/edit-user-email.json');

function editUser(id) {
    return cy.request({
        method: 'PUT',
        url: `usuarios/${id}`,
        failOnStatusCode: false,
        body: payloadUser
    })
}

function editExistingUser(jsonBody) {
    let json = jsonBody;
    const id = json["_id"];
    delete json["_id"];
    return cy.request({
        method: 'PUT',
        url: `usuarios/${id}`,
        failOnStatusCode: false,
        body: jsonBody
    })
}

function editScucessfulUser(id) {
    return cy.request({
        method: 'PUT',
        url: `usuarios/${id}`,
        failOnStatusCode: false,
        body: payloadEditUser
    })
}

export { editUser, editExistingUser, editScucessfulUser };