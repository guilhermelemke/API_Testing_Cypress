import { registerUser, registerExistingUser } from '../requests/POSTusuarios.request';
import { deleteUser } from '../requests/DELETEusuarios.request';
import { getAllUsers } from '../requests/GETusuarios.request';

let user;

describe('POST usuarios', () => {
    beforeEach(() => {
        cy.task("freshUser").then((object) => {
            user = object;
        })
    })

    it('Cadastra novo usuário', () => {
        registerUser({
            nome: user.username,
            email: user.email,
            password: user.password,
            administrador: "true"
        }).should(response => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.eq("Cadastro realizado com sucesso");
            deleteUser(response.body._id);
        })
    })

    it('Não permite cadastro com email em uso', () => {
        registerUser({
            nome: user.username,
            email: user.email,
            password: user.password,
            administrador: "true"
        }).then(() => {
            registerUser({
                nome: user.username,
                email: user.email,
                password: user.password,
                administrador: "true"
        }).should(validation => {
                expect(validation.status).to.eq(400);
                expect(validation.body.message).to.eq("Este email já está sendo usado");
            })
        })
    })

    it('Não permite cadastro com usuário em branco', () => {
        registerUser({
            nome: "",
            email: user.email,
            password: user.password,
            administrador: "true"
        }).should(response => {
            expect(response.status).to.eq(400);
            expect(response.body.nome).to.eq("nome não pode ficar em branco");
        })
    })

    it('Não permite cadastro com email inválido', () => {
        registerUser({
            nome: user.username,
            email: "emailsnotvalid",
            password: user.password,
            administrador: "true"
        }).should(response => {
            expect(response.status).to.eq(400);
            expect(response.body.email).to.eq("email deve ser um email válido");
        })
    })

    it('Não permite cadastro com email branco', () => {
        registerUser({
            nome: user.username,
            email: "",
            password: user.password,
            administrador: "true"
        }).should(response => {
            expect(response.status).to.eq(400);
            expect(response.body.email).to.eq("email não pode ficar em branco");
        })
    })

    it('Não permite cadastro com password em branco', () => {
        registerUser({
            nome: user.username,
            email: user.email,
            password: "",
            administrador: "true"
        }).should(response => {
            expect(response.status).to.eq(400);
            expect(response.body.password).to.eq("password não pode ficar em branco");
        })
    })

    it('Não permite cadastro sem selecionar se o usuário é adm ou não', () => {
        registerUser({
            nome: user.username,
            email: user.email,
            password: user.password,
            administrador: "invalid"
        }).should(response => {
            expect(response.status).to.eq(400);
            expect(response.body.administrador).to.eq("administrador deve ser 'true' ou 'false'");
        })
    })
})