const express = require("express");
const exhbs = require("express-handlebars");
const body = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(body.urlencoded({extended: false}));
app.use(body.json());
app.use(express.static('public'));
app.engine("handlebars", exhbs({defaultLayout: "main", layoutsDir: "views/layouts"}));
app.set("view engine", "handlebars");



app.get("/", async function(req, res){
    res.render('index')
});

app.listen(PORT, ()=>{
    console.log("server started :" + PORT)
});