const chai = require("chai");
const chaiHttp = require("chai-http");
const { app, server } = require("../app.js");
var mongoose = require("mongoose");

chai.should();
chai.use(chaiHttp);

describe(`TASK API`, () => {
  after((done) => {
    mongoose.connection.close();
    server.close();
    done();
  });
  describe("/GET /", () => {
    it("it should return 200 and message", (done) => {
      chai
        .request(app)
        .get(`/`)
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.eq("API is running");
          done();
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
