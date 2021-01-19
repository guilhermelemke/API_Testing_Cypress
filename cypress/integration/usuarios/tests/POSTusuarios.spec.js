import { registerUser } from '../requests/POSTusuarios.request';
import { deleteUser } from '../requests/DELETEusuarios.request';

let user;

describe('POST usuarios', () => {
    beforeEach(() => {
        cy.task("freshUser").then((object) => {
            user = object;
        })
    })

    it('Cadastra novo usuário', () => {
        registerUser(user).should(response => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.eq("Cadastro realizado com sucesso");
            deleteUser(response.body._id);
        })
    })

    it('Não permite cadastro com email em uso', () => {
        registerUser(user).then(() => {
            registerUser(user).should(validation => {
                expect(validation.status).to.eq(400);
                expect(validation.body.message).to.eq("Este email já está sendo usado");
            })
        })
    })

    it('Não permite cadastro com usuário em branco', () => {
        user.nome = '';
        registerUser(user).should(response => {
            expect(response.status).to.eq(400);
            expect(response.body.nome).to.eq("nome não pode ficar em branco");
        })
    })

    it('Não permite cadastro com email inválido', () => {
        user.email = 'invalidEmail';
        registerUser(user).should(response => {
            expect(response.status).to.eq(400);
            expect(response.body.email).to.eq("email deve ser um email válido");
        })
    })

    it('Não permite cadastro com email em branco', () => {
        user.email = '';
        registerUser(user).should(response => {
            expect(response.status).to.eq(400);
            expect(response.body.email).to.eq("email não pode ficar em branco");
        })
    })

    it('Não permite cadastro com password em branco', () => {
        user.password = '';
        registerUser(user).should(response => {
            expect(response.status).to.eq(400);
            expect(response.body.password).to.eq("password não pode ficar em branco");
        })
    })

    it('Não permite cadastro sem selecionar se o usuário é adm ou não', () => {
        user.administrador = 'invalid';
        registerUser(user).should(response => {
            expect(response.status).to.eq(400);
            expect(response.body.administrador).to.eq("administrador deve ser 'true' ou 'false'");
        })
    })
})