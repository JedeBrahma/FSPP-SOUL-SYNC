// DEPENDENCIES

const express = require("express");
const cors = require("cors");
// CONFIGURATION
const app = express();

//CONTROLLERS
const entriesController = require("./controllers/entriesController.js");

// MIDDLEWARE
app.use(cors());
app.use(express.json());

app.use("/entries", entriesController);

// ROUTES
//home
app.get("/", (req, res) => {
    res.send("Welcome to Soul Sync !")
});
//404
app.get("*", (req, res) => {
    res.status(404).send("oops - page not found!")
});

// EXPORT
module.exports = app;
