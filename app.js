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
    var tittle = "Home"
    res.render('index')
});
const factory = require("./factory-functions/file-factory-function");
var factoryFunction = factory();

app.get('/upload', async function(req,res){
    res.render("upload")
})

app.get("/stream", async function(req,res){
    res.render("stream")
})
///setData
app.post('/setData', async function(req,res){
    var data = req.body;
    console.log(data)
    res.redirect('/upload');
});
app.listen(PORT, ()=>{
    console.log("server started :" + PORT)
});