import { registerUser } from '../../usuarios/requests/POSTusuarios.request';
import { login } from '../../login/POSTlogin.request';
import { registerProduct } from '../../produtos/requests/POSTprodutos.request';
import { registerCart } from '../requests/POSTcarrinhos.request';

let user;
let product;

describe('GET carrinhos', () => {
    beforeEach(() => {
        cy.task("freshUser").then((object) => {
            user = object;
        })
        cy.task("newProduct").then((object) => {
            product = object;
        })
    })

    it('Registra um carrinho', () => {
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
                    }).should( responseCart => {
                        expect(responseCart.status).to.eq(201);
                    })
                })
            })
        })
    })

    it('Retorna os carrinhos com mais de 5 produtos', () => {
        
    })
})