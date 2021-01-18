import { registerUser } from '../requests/POSTusuarios.request';
import { editUser, editExistingUser, editScucessfulUser } from '../requests/PUTusuarios.request';
import { deleteUser } from '../requests/DELETEusuarios.request';
import { getAllUsers } from '../requests/GETusuarios.request';

describe('PUT usuarios', () => {
    it('Cadastra usuário por não existir id', () => {
        editUser("sedsdffergretrh").should(response => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.eq("Cadastro realizado com sucesso");
            deleteUser(response.body._id)
        })
    })    

    // it('Tenta editar usuario', () => {
    //     getAllUsers().then(response => {
    //         editExistingUser(response.body.usuarios[0]).should(validation => {
    //             expect(validation.status).to.eq(400);
    //             expect(validation.body.message).to.eq("Este email já está sendo usado");        
    //         })
    //     })
    // })

    // it('Edita usuário', () => {
    //     registerUser().then(responseUser => {
    //         editScucessfulUser(responseUser.body._id, ).should(response => {
    //             expect(response.status).to.eq(200);
    //             expect(response.body.message).to.eq("Registro alterado com sucesso");

    //         })   
    //     })
    // }) 
})