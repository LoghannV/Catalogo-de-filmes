const express = require("express")
const port = 8081
const app = express()
const handlebars = require("express-handlebars")

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static(__dirname + '/public'));


app.get("/",function(req,res){
    res.render("index")
})


app.listen(port,function(){
    console.log("Servidor rodando https://localhost:"+port)
})