const request = require('supertest');
const {expect} = require ('chai')

describe('Login',()=> {
    describe('POST / Login',()=> {
        it('Deve retornar 200 com um token em string com quando usar credenciais válidas', async ()=>{
            const response = await request('http://localhost:3000') // AQUI VAI O ENDEREÇO DO ENDPOINT
                .post('/login')//uri/url
                .set('Content-Type','application/json')  //header
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })
            console.log(response.status)
            console.log(response.body.token)
            
            expect(response.status).to.equal(200);
            expect(response.body.token).to.be.a('string');
        })
    })
}) 