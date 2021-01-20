import { registerUser } from '../../usuarios/requests/POSTusuarios.request';
import { login } from '../../login/POSTlogin.request';
import { registerProduct } from '../../produtos/requests/POSTprodutos.request';
import { registerCart } from '../../carrinhos/requests/POSTcarrinhos.request';
import { deleteCartCancel } from '../../carrinhos/requests/DELETEcarrinhosCancelamento.request';
import { deleteCartSale } from '../../carrinhos/requests/DELETEcarrinhosCompra.request';
import { getProduct } from '../../produtos/requests/GETprodutos.request';

let user;
let product;

describe('GET produtos', () => {
    beforeEach(() => {
        cy.task("freshUser").then((object) => {
            user = object;
        })
        cy.task("newProduct").then((object) => {
            product = object;
        })
    })

    it('Valida o estoque de um produto apos venda', () => {
        product.quantidade = 20;
        registerUser(user).then(() => {
            login({            
                "email": user.email,
                "password": user.password
            }).then(response => {
                registerProduct(response.body.authorization, product).then(registerResponse => {
                    registerCart(response.body.authorization, {
                        "produtos": [
                            {
                              "idProduto": registerResponse.body._id,
                              "quantidade": 6
                            }
                          ]
                    }).then(() => {
                        deleteCartSale(response.body.authorization).then(() => {
                            getProduct(registerResponse.body._id).should(responseProduct => {
                                expect(responseProduct.status).to.eq(200);
                                expect(responseProduct.body.produtos[0].quantidade).to.eq(14);
                            })
                        });
                    })
                })
            })
        })
    })

    it('Valida o estoque de um produto apos cancelamento de compra', () => {
        registerUser(user).then(() => {
            login({            
                "email": user.email,
                "password": user.password
            }).then(response => {
                registerProduct(response.body.authorization, product).then(registerResponse => {
                    registerCart(response.body.authorization, {
                        "produtos": [
                            {
                              "idProduto": registerResponse.body._id,
                              "quantidade": 6
                            }
                          ]
                    }).then(() => {
                        deleteCartCancel(response.body.authorization).then(() => {
                            getProduct(registerResponse.body._id).should(responseProduct => {
                                expect(responseProduct.status).to.eq(200);
                                expect(responseProduct.body.produtos[0].quantidade).to.eq(product.quantidade);
                            })
                        });
                    })
                })
            })
        })
    })
})