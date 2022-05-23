const express = require("express");
const path = require("path");
const hbs = require("hbs");
const alert = require("alert");
const Register = require("./models/register"); //importing register.js file which contains the schema of user details
require("./db/connection"); // importing connection module

const app = express(); //assigning express() all methods to app

const port = process.env.PORT || 5000; //port number

//all paths
const staticPath = path.join(__dirname, "../public");
const partialPath = path.join(__dirname, "./partials");

app.use(express.static(staticPath)); // it will check for index.html in public dirctory

app.set("view engine", "hbs"); // setting up the hbs template engine with node

hbs.registerPartials(partialPath); //registering the partials

//-------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//--------*/

//routing------  --------------------------------

app.get("", (req, resp) => {
  resp.render("index");
});

app.get("/home", (req, resp) => {
  resp.render("home");
});

app.get("/about", (req, resp) => {
  resp.render("about");
});
app.get("/login", (req, resp) => {
  resp.render("login");
});
app.get("/registration", (req, resp) => {
  resp.render("registration");
});

//---------------------------------

app.get("/sports", (req, resp) => {
  resp.render("sports");
});
app.get("/politics", (req, resp) => {
  resp.render("politics");
});
app.get("/entertainment", (req, resp) => {
  resp.render("entertainment");
});
app.get("/tech", (req, resp) => {
  resp.render("tech");
});
app.get("/utkaluniversity", (req, resp) => {
  resp.render("utkaluniversity");
});
app.get("*", (req, resp) => {
  resp.render("404");
});

//post methods

//create a new user in our database
app.post("/register", async (req, resp) => {
  //post login
  //loginpage
  try {
    //  console.log(req.body.email); //printing user entered email on console
    // resp.send(req.body.email); //printing user entered email on webpage

    const password = req.body.password;
    const cpassword = req.body.cpassword;
    if (password == cpassword) {
      const registerUsers = new Register({
        //   //  login is the model of "userDetails" schema and we are creating an object of it
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        cpassword: req.body.cpassword,
      });

      const registered = await registerUsers.save();
      resp.status(201).render("login"); //if data submission is successful then render the login page
    } else {
      alert("passwords are not same");
      resp.render("registration");
    }
  } catch (error) {
    resp.status(400).send(error);
  }
});
 
//---------------------

app.listen(port);
