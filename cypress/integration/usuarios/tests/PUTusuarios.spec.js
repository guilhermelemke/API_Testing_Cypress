import { registerUser } from '../requests/POSTusuarios.request';
import { editUser } from '../requests/PUTusuarios.request';
import { deleteUser } from '../requests/DELETEusuarios.request';

describe('PUT usuarios', () => {
    it('Cadastra usuário por não existir id', () => {
            editUser("sedsdfgasdfergretrh").should(response => {
                expect(response.status).to.eq(201);
                expect(response.body.message).to.eq("Cadastro realizado com sucesso");
                deleteUser(response.body._id)
            })
        })    


        // Testes a fazer:
    // it('Tenta editar usuario', () => {
    //     registerUser().then(responseUser => {
    //         editUser(responseUser.body._id).should(response => {
    //             expect(response.status).to.eq(400);
    //             expect(response.body.message).to.eq("Este email já está sendo usado");
    //             deleteUser(response.body._id)
    //         })    
    //     })
    // })

    //it('Edita usuário', () => {
        //registerUser().then(responseUser => {
            //editUser(responseUser.body._id).should(response => {
                //expect(response.status).to.eq(200);
                //expect(response.body.message).to.eq("Este email já está sendo usado");
            //})   
            //deleteUser(responseUser.body._id) 
        //})
    //}) 
})