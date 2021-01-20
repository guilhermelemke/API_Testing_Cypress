/// <reference types="cypress"/>

function deleteCartCancel(bearerToken) {
    return cy.request({
        method: 'DELETE',
        url: 'carrinhos/cancelar-compra',
        headers: { 'Authorization': bearerToken },
        failOnStatusCode: false,
    })
}

export { deleteCartCancel };