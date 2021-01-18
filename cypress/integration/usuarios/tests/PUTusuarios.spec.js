import { registerUser } from '../requests/POSTusuarios.request';
import { editUser } from '../requests/PUTusuarios.request';
import { deleteUser } from '../requests/DELETEusuarios.request';

let user;

describe('PUT usuarios', () => {
    beforeEach(() => {
        cy.task("freshUser").then((object) => {
            user = object;
        })
    })

    it('Cadastra usuário por não existir id', () => {
            editUser("", {
                nome: user.username,
                email: user.email,
                password: user.password,
                administrador: "true"
            }).should(response => {
                expect(response.status).to.eq(201);
                expect(response.body.message).to.eq("Cadastro realizado com sucesso");
                deleteUser(response.body._id)
            })
        })    

    // it('Tenta editar usuario', () => {
    //     registerUser({
    //         nome: user.username,
    //         email: user.email,
    //         password: user.password,
    //         administrador: "true"
    //     }).then(responseUser => {
    //         editUser(responseUser.body._id, {
    //                 nome: user.username,
    //                 email: user.email,
    //                 password: user.password,
    //                 administrador: "true"
    //             }).should(response => {
    //                 expect(response.status).to.eq(400);
    //                 expect(response.body.message).to.eq("Este email já está sendo usado");
    //                 deleteUser(response.body._id)
    //         })    
    //     })
    //})

    it.only('Edita usuário', () => {
        registerUser({
            nome: user.username,
            email: user.email,
            password: user.password,
            administrador: "true"
        }).then(responseUser => {
            editUser(responseUser.body._id, {
                nome: user.username,
                email: "user@email.iof",
                password: user.password,
                administrador: "true"
            }).should(response => {
                expect(response.status).to.eq(200);
                expect(response.body.message).to.eq("Este email já está sendo usado");
            })   
            deleteUser(responseUser.body._id) 
        })
    }) 
})