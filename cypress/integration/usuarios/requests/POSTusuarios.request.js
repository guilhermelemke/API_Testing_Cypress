/// <reference types="cypress"/>

const payloadUser = require('../payloads/add-user.json');
const payloadEmptyUser = require('../payloads/add-user-empty-user.json');
const payloadInvalidEmail = require('../payloads/add-user-invalid-email.json');
const payloadEmptyEmail = require('../payloads/add-user-empty-email.json');
const payloadEmptyPassword = require('../payloads/add-user-empty-password.json');
const payloadInvalidRole = require('../payloads/add-user-invalid-role.json');

function registerUser(param) {

    let payload;

    switch (param) {
        case 'emptyUser':
            payload = payloadEmptyUser;
            break;
        case 'invalidEmail':
            payload = payloadInvalidEmail;
            break;
        case 'emptyEmail':
            payload = payloadEmptyEmail;
            break;
        case 'emptyPassword':
            payload = payloadEmptyPassword;
            break;
        case 'invalidRole':
            payload = payloadInvalidRole;
            break;
        default:
            payload = payloadUser;
    }

    return cy.request({
        method: 'POST',
        url: 'usuarios',
        failOnStatusCode: false,
        body: payload
    })
}

function registerExistingUser(jsonBody) {
    let json = jsonBody;
    delete json["_id"];
    return cy.request({
        method: 'POST',
        url: 'usuarios',
        failOnStatusCode: false,
        body: jsonBody
    })
} 

export { registerUser, registerExistingUser };