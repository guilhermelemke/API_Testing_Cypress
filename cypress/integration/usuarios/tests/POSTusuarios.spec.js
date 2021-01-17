import { registerUser, registerExistingUser } from '../requests/POSTusuarios.request';
import { deleteUser } from '../requests/DELETEusuarios.request';
import { getAllUsers } from '../requests/GETusuarios.request';


describe('POST usuarios', () => {
    it('Cadastra novo usuário', () => {
        registerUser().should(response => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.eq("Cadastro realizado com sucesso");
            deleteUser(response.body._id);
        })
    })

    it('Não permite cadastro com email em uso', () => {
        getAllUsers().then(response => {
            registerExistingUser(response.body.usuarios[0]).should(validation => {
                expect(validation.status).to.eq(400);
                expect(validation.body.message).to.eq("Este email já está sendo usado");
            })
        }) 
    })

    it('Não permite cadastro com usuário em branco', () => {
        registerUser('emptyUser').should(response => {
            expect(response.status).to.eq(400);
            expect(response.body.nome).to.eq("nome não pode ficar em branco");
        })
    })

    it('Não permite cadastro com email inválido', () => {
        registerUser('invalidEmail').should(response => {
            expect(response.status).to.eq(400);
            expect(response.body.email).to.eq("email deve ser um email válido");
        })
    })

    it('Não permite cadastro com email branco', () => {
        registerUser('emptyEmail').should(response => {
            expect(response.status).to.eq(400);
            expect(response.body.email).to.eq("email não pode ficar em branco");
        })
    })

    it('Não permite cadastro com password em branco', () => {
        registerUser('emptyPassword').should(response => {
            expect(response.status).to.eq(400);
            expect(response.body.password).to.eq("password não pode ficar em branco");
        })
    })

    it('Não permite cadastro sem selecionar se o usuário é adm ou não', () => {
        registerUser('invalidRole').should(response => {
            expect(response.status).to.eq(400);
            expect(response.body.administrador).to.eq("administrador deve ser 'true' ou 'false'");
        })
    })
})