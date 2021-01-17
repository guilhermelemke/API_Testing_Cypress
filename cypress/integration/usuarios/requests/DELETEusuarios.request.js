/// <reference types="cypress"/>

function deleteUser(id) {
    return cy.request({
        method: 'DELETE',
        url: `usuarios/${id}`,
        failOnStatusCode: false,
    })
}

export { deleteUser };