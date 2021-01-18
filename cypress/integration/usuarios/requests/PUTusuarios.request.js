/// <reference types="cypress"/>

const payloadUser = require('../payloads/edit-user.json');

function editUser(id, obj) {
    // Caso não receba Id
    // gera um Id randômico para o test case de editar usuário (Id inexistente)
    let fakeId = "";
    if (!id) {
        for (let i = 0; i < 10; i++) {
            fakeId += Math.floor(Math.random() * 10);
        }
    }
    return cy.request({
        method: 'PUT',
        url: id ? `usuarios/${id}` : `usuarios/${fakeId}`,
        failOnStatusCode: false,
        body: obj
    })
}

export { editUser };