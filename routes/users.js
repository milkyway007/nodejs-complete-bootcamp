const express = require("express");
const req = require("express/lib/request");
const router = express.Router();

function authenticate(request, response, next) {
  if (request.session) {
    if (request.session.name) {
      next();
    } else {
      response.redirect("/users/add-user");
    }
  } else {
    response.redirect("/users/add-user");
  }
}

router.get("/bank-accounts", authenticate, (request, response) => {
  response.send("bank accounts");
});

router.post("/add-user", (request, response) => {
  const name = request.body.name;
  const age = request.body.age;

  if (request.session) {
    request.session.name = name;
    request.session.age = age;

    // req.session.user = {
    //   name: name,
    //   age: age,
    // };
  }

  console.log(name);
  console.log(age);

  response.status(200).send();
});

router.get("/add-user", (request, response) => {
  response.render("add-user", {});
});

router.get("/", (request, response) => {
  const user = {
    name: request.session.name,
    age: request.session.age,
    address: {
      street: "Kuldnoka",
      city: "Tallinn",
      state: "Harjumaa",
    },
  };

  response.render("index", user);
});

module.exports = router;
