const express = require("express");
const Handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser"); //To get the data from a form
const path = require("path");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

// Enviroment variables
require('dotenv').config()


//Database
const db = require("./config/database");

// Test DB connection
db.authenticate()
  .then(() => console.log("Database connected ..."))
  .catch((err) => console.log(`Error: ${err}`));

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => res.render("index"));

//Middlewares
// Read and parse Body
app.use(express.json());
// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  })
);
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "handlebars");
// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Clients routes
app.use("/clientes", require("./routes/clients"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
