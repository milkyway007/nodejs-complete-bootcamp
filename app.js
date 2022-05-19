const express = require("express");
const bodyParser = require("body-parser");
const mustacheExpress = require("mustache-express");
const path = require('path');
const app = express();
const PORT = 4000;

const VIEWS_PATH = path.join(__dirname, './views');

app.use('/css', express.static('css'));

app.engine("mustache", mustacheExpress(VIEWS_PATH + '/partials', '.mustache'));
app.set("views", VIEWS_PATH);
app.set("view engine", "mustache");

app.use(bodyParser.urlencoded({extended: false}));

app.get("/add-user", (request, response) => {
  response.render("add-user", {});
});

app.post("/add-user", (request, response) => {
  const name = request.body.name;
  const age = request.body.age;

  console.log(name);
  console.log(age);
});

app.get("/users", (request, response) => {
  let users = [
    {
      name: "Lida",
      age: 16,
    },
    {
      name: "Sergei",
      age: 35,
    },
    {
      name: "Maria",
      age: 25,
    },
  ];

  users = [];

  response.render("users", { users: users });
});

app.get("/", (request, response) => {
  const user = {
    name: "Lida",
    address: {
      street: "Kuldnoka",
      city: "Tallinn",
      state: "Harjumaa",
    },
  };

  response.render("index", user);
});

app.listen(PORT, () => {
  console.log("Server is running on PORT: " + PORT);
});
