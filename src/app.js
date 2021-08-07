'use strict';

const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3002;

// const serverless = require('serverless-http');
// const router = express.Router();

//public static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../template/views");
const partials_path = path.join(__dirname, "../template/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

//Routing
app.get("/", (req, res)=>{
    res.render('index')
})

app.get("/about", (req, res)=>{
    res.render('about')
})

app.get("/weather", (req, res)=>{
    res.render('weather')
})

app.get("*", (req, res) =>{
    res.render("error", {
        errorMsg : "Opps! page not found"
    })
})

// module.exports = app;
// module.exports.handler = serverless(app);

app.listen(port, ()=>{
    console.log(`Server is live on port ${port}`);
})