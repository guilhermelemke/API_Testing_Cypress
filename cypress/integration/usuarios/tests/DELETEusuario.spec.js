import { registerUser } from '../requests/POSTusuarios.request';
import { deleteUser } from '../requests/DELETEusuarios.request';

let user;

describe('POST usuarios', () => {
    beforeEach(() => {
        cy.task("freshUser").then((object) => {
            user = object;
        })
    })

    it('Deleta um usuário', () => {
        registerUser(user).then(responseUser => {
            deleteUser(responseUser.body._id).should(responseDeleteUser => {
                expect(responseDeleteUser.status).to.eq(200);
                expect(responseDeleteUser.body.message).to.eq("Registro excluído com sucesso");
            })
        })
    })

    it('Tenta deletar um usuário inexistente', () => {
        registerUser(user).then(responseUser => {
            deleteUser(responseUser.body._id).then(() => {
                deleteUser(responseUser.body._id).should(responseDeleteUser => {
                expect(responseDeleteUser.status).to.eq(200);
                expect(responseDeleteUser.body.message).to.eq("Nenhum registro excluído");
                })    
            })
        })
    })
})
