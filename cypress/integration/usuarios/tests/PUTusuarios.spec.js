import { registerUser } from '../requests/POSTusuarios.request';
import { editUser } from '../requests/PUTusuarios.request';
import { getAllUsers } from '../requests/GETusuarios.request';

let user;

describe('PUT usuarios', () => {
    beforeEach(() => {
        cy.task("freshUser").then((object) => {
            user = object;
        })
    })

    it('Cadastra usuário por não existir id', () => {
            editUser("", user).should(response => {
                expect(response.status).to.eq(201);
                expect(response.body.message).to.eq("Cadastro realizado com sucesso");
            })
        })    

    it('Edita usuário', () => {
        registerUser(user).then(responseUser => {
            editUser(responseUser.body._id, user).should(response => {
                expect(response.status).to.eq(200);
                expect(response.body.message).to.eq("Registro alterado com sucesso");
            })   
        })
    })

    it('Tenta editar usuário (alterar email para um já existente)', () => {
        getAllUsers().then(responseUsers => {
            editUser(responseUsers.body.usuarios[0]._id, {
                nome: user.nome,
                email: responseUsers.body.usuarios[1].email,
                password: user.password,
                administrador: "true"
            }).should(response => {
                expect(response.status).to.eq(400);
                expect(response.body.message).to.eq("Este email já está sendo usado")
            })
        })
    })
})