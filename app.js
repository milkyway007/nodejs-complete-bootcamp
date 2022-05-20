const express = require("express");
const bodyParser = require("body-parser");
const mustacheExpress = require("mustache-express");
const session = require("express-session");
const path = require("path");
const userRoutes = require("./routes/users");
const app = express();
const PORT = 4000;

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

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

const VIEWS_PATH = path.join(__dirname, "./views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/users", authenticate, userRoutes);

app.use("/css", express.static("css"));

app.engine("mustache", mustacheExpress(VIEWS_PATH + "/partials", ".mustache"));
app.set("views", VIEWS_PATH);
app.set("view engine", "mustache");

app.listen(PORT, () => {
  console.log("Server is running on PORT: " + PORT);
});
