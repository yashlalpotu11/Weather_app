const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3002;

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


// app.get("*", (req, res) =>{
//     res.render("404error", {
//         errorMsg : "Opps! page notfound"
//     })
// })

app.listen(port, ()=>{
    console.log(`Server is live on port ${port}`);
})