const chai = require("chai");
const chaiHttp = require("chai-http");
const { app } = require("../../app.js");
const generateToken = require("../../utils/generateToken");
const db = require("../db");

chai.should();
chai.use(chaiHttp);

before(async () => {
  await db.connect();
});
after(async () => {
  await db.clear();
  await db.close();
});

describe(`AUTH TEST SUITE`, async () => {
  const user = await User.create({
    username: "tolatwo",
    email: "tola2@gmail.com",
    password: "password",
  });
  const token = generateToken(user._id);
  describe("/POST /auth/register", () => {
    it("it should return newly created user", (done) => {
      const user = {
        username: "teste",
        email: "test12@email.com",
        password: "passwordlongone1",
      };
      chai
        .request(app)
        .post(`/auth/register`)
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          done(err);
        });
    });
    it("it should return status code 400 for existing email", (done) => {
      const user = {
        username: "testes",
        email: "test12@email.com",
        password: "passwordlongone1",
      };
      chai
        .request(app)
        .post(`/auth/register`)
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");
          done(err);
        });
    });
    it("it should return status code 400 for existing username", (done) => {
      const user = {
        username: "teste",
        email: "test121@email.com",
        password: "passwordlongone1",
      };
      chai
        .request(app)
        .post(`/auth/register`)
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a("object");
          done(err);
        });
    });
  });
  describe("/POST /auth/login", () => {
    it("it should return status code 200 to login registered user", (done) => {
      const user = {
        email: "test12@email.com",
        password: "passwordlongone1",
      };
      chai
        .request(app)
        .post(`/auth/login`)
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("success");
          done(err);
        });
    });
    it("it should return status code 401 for invalid username", (done) => {
      const user = {
        email: "test121@email.com",
        password: "passwordlongone1",
      };
      chai
        .request(app)
        .post(`/auth/login`)
        .send(user)
        .end((err, res) => {
          res.should.have.status(401);
          done(err);
        });
    });
    it("it should return status code 401 for invalid password", (done) => {
      const user = {
        email: "test12@email.com",
        password: "passwordlongone12",
      };
      chai
        .request(app)
        .post(`/auth/login`)
        .send(user)
        .end((err, res) => {
          res.should.have.status(401);
          done(err);
        });
    });
  });
  describe("/GET /auth/user", () => {
    it("it should return status code 200 for authorised user", (done) => {
      chai
        .request(app)
        .get(`/auth/user`)
        .set("Cookie", `token=${token}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("success");
          done(err);
        });
    });
    it("it should return status code 401 for unauthorised user", (done) => {
      chai
        .request(app)
        .get(`/auth/user`)
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a("object");
          done(err);
        });
    });
  });
  describe("/GET /auth/logout", () => {
    it("it should return successful message on logout", (done) => {
      chai
        .request(app)
        .get(`/auth/logout`)
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.eq("You have successfully logged out");
          done();
        });
    });
  });
});
