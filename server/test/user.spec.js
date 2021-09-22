const chai = require("chai");
const chaiHttp = require("chai-http");
const { app } = require("../app.js");
const fs = require("fs");
const path = require("path");
const expect = chai.expect;
const User = require("../models/User");

chai.should();
chai.use(chaiHttp);

describe(`profile picture upload`, () => {
  it("uploading without logging in should return status 401", (done) => {
    chai
      .request(app)
      .post("/users/upload/profile-photo")
      .set("content-type", "multipart/form-data")
      .attach(
        "image",
        fs.readFileSync(path.resolve("../demo", "images/signup.png")),
        "dashboard.png"
      )
      .then(function (res) {
        expect(res.status).to.equal(401);
      })
      .then(done, done);
  }).timeout(null);
  it("uploading a photo after signing up a user should return status code 200", (done) => {
    const agent = chai.request.agent(app);
    agent
      .post("/auth/register")
      .send({
        username: "usernameTest",
        email: "testing@test.test",
        password: "1235678",
      })
      .then(function (res) {
        expect(res).to.have.status(201);
        return agent
          .post("/users/upload/profile-photo")
          .set("content-type", "multipart/form-data")
          .attach(
            "image",
            fs.readFileSync(path.resolve("../demo", "images/signup.png")),
            "dashboard.png"
          )
          .then(function (res) {
            expect(res).to.have.status(200);
            return agent.delete("/users/profile-photo").then(function (res) {
              expect(res).to.have.status(200);
              done();
            });
          });
      });
    after(async function () {
      await User.deleteOne({
        username: "usernameTest",
        email: "testing@test.test",
      });
      agent.close();
    });
  }).timeout(null);
});
