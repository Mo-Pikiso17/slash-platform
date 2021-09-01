const express = require("express");
const exhbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static('public'));
app.engine("handlebars", exhbs({defaultLayout: "main", layoutsDir: "views/layouts"}));
app.set("view engine", "handlebars");



app.get("/", async function(req, res){
    res.render('index')
});

app.listen(PORT, ()=>{
    console.log("server started :" + PORT)
});