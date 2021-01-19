import { registerUser } from '../../usuarios/requests/POSTusuarios.request';
import { login } from '../../login/POSTlogin.request';
import { registerProduct } from '../requests/POSTprodutos.request';

let user;
let product;

describe('POST produtos', () => {
    beforeEach(() => {
        cy.task("freshUser").then((object) => {
            user = object;
        })
        cy.task("newProduct").then((object) => {
            product = object;
        })
    })

    it('Cadastra novo produto', () => {
        registerUser(user).then(() => {
            login({            
                "email": user.email,
                "password": user.password
            }).then(response => {
                registerProduct(response.body.authorization, product).should(registerResponse => {
                    expect(registerResponse.status).to.eq(201);
                    expect(registerResponse.body.message).to.eq("Cadastro realizado com sucesso");
                    expect(registerResponse.body._id).to.be.not.null;
                })
            })
        })
    })

    it('Tenta cadastrar produto já existente', () => {
        registerUser(user).then(() => {
            login({            
                "email": user.email,
                "password": user.password
            }).then(response => {
                registerProduct(response.body.authorization, product).then(() => {
                    registerProduct(response.body.authorization, product).should(registerResponse => {
                        expect(registerResponse.status).to.eq(400);
                        expect(registerResponse.body.message).to.eq("Já existe produto com esse nome");
                    })
                })
            })
        })
    })

    it('Tenta cadastrar produto com usuário não autenticado', () => {
        registerUser(user).then(() => {
            login({            
                "email": "invalidEmail",
                "password": "invalidPassword"
            }).then(response => {
                registerProduct(response.body.authorization, product).should(registerResponse => {
                    expect(registerResponse.status).to.eq(401);
                    expect(registerResponse.body.message).to.eq("Token de acesso ausente, inválido, expirado ou usuário do token não existe mais");
                })
            })
        })
    })

    it('Tenta cadastrar produto com usuário não admin', () => {
        user.administrador = 'false';
        registerUser(user).then(() => {
            login({            
                "email": user.email,
                "password": user.password
            }).then(response => {
                registerProduct(response.body.authorization, product).should(registerResponse => {
                    expect(registerResponse.status).to.eq(403);
                    expect(registerResponse.body.message).to.eq("Rota exclusiva para administradores");
                })
            })
        })
    })
})