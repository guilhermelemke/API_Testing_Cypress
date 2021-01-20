/// <reference types="cypress"/>

function deleteCartSale(bearerToken) {
    return cy.request({
        method: 'DELETE',
        url: 'carrinhos/concluir-compra',
        headers: { 'Authorization': bearerToken },
        failOnStatusCode: false,
    })
}

export { deleteCartSale };