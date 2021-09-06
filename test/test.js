import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js'
import faker from 'faker';
import assert from 'assert';

const expect = chai.expect;
const should = chai.should();
const hostname = process.env.HOSTNAME

chai.use(chaiHttp);


//defining hooks
after(function(){
    process.exit(0);
    assert.ok(true);
})

const mockObject = {
    username: faker.name.findName(),
    firstname: faker.name.findName(),
    lastname: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password()
};


//Unit test case for create user

describe('Nodejs CRUD Test', () => {
    describe("Register User", () => { 
        it('It should create user entry into the User collection', (done) => {
            chai.request(hostname)
            .post('/user/register')
            .set('content-type', 'application/json')
            .send(mockObject)
            .end((err, res) => {
                should.not.exist(err);
                expect(err).to.be.null
                expect(res).to.be.json;
                expect (res.body).to.be.a("Object");
                should.exist (res.body)
                expect(res.status).to.equal (200);
                done();
            });
        });
    });
});


//Unit test case for user login

const mockUser = {username: process.env.TEST_USERNAME, password: process.env.TEST_PWD}

describe('Nodejs CRUD Test', () => {
    describe("Login User", () => { 
        it('It should verify the user and respond back with token if valid user', (done) => {
            chai.request(hostname)
            .post('/user/login')
            .set('content-type', 'application/json')
            .send(mockUser)
            .end((err, res) => {
                should.not.exist(err);
                expect(err).to.be.null;
                expect(res).to.be.json;
                expect (res.body).to.be.a("Object");
                expect(res.body).to.have.property('token').to.be.a('string');
                expect(res.body).to.have.property('user').to.be.a('Object');
                expect(res.body).to.have.nested.property('user.username').to.be.a('string');
                expect(res.body).to.have.nested.property('user.firstname').to.be.a('string');
                expect(res.body).to.have.nested.property('user.lastname').to.be.a('string');
                expect(res.body).to.have.nested.property('user.email').to.be.a('email');
                should.exist (res.body);
                expect(res.status).to.equal (200);
                done();
            });
        });
    });
});

