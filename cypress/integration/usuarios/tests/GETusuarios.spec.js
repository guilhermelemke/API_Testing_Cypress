import { getAllUsers } from '../requests/GETusuarios.request';

describe('GET usuarios', () => {
    it('Lista todos os usuários', () => {
        getAllUsers().then(responseUsers => {
                expect(responseUsers.status).to.eq(200);
                expect(responseUsers.body).to.be.not.null;
        })
    })
})