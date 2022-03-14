const express = require("express");
const app = express();
const path = require('path');
const helmet = require("helmet");

// Common Middlewere
app.use(helmet());
app.use(express.static("public"));
app.use(express.urlencoded());
app.use(express.json());

// Use Handlebars view engine, checkout: https://handlebarsjs.com/guide/
app.set("view engine", "hbs");
// Setting view directory
app.set("views", path.join(__dirname, 'views'));


app.get("/", (req, res) => {
    console.log(__dirname)
    res.render("index", {
        name: "Hello, Mike",
        job: "Software Engineer",
        country: {
            name: "Yala",
            description: "Best city in Thailand"
        }
    })
})

app.get("/favorite", (req, res) => {
    res.render("favorite", {
        html: "<img src='apple-logo.jpg' width='100' height='100'>"
    })
})

app.listen(3000);