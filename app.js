const express = require("express")
const port = 8081
const app = express()
const handlebars = require("express-handlebars")
const puppeteer = require("puppeteer")


async function GetMoviesRotten(select){
    let option = ['movies_in_theaters','movies_at_home']
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.rottentomatoes.com/browse/'+option[select]+'/?page=1');
    array = await page.evaluate(function(){
        let arr = []
        let GroupImageThumbnail = document.querySelectorAll('.posterImage')
        for(let i =  0; i<GroupImageThumbnail.length;i++){
            arr.push(GroupImageThumbnail[i].src)
        }
        return arr
    })   
    await browser.close();
   
    return array
}


app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static(__dirname + '/public'));


app.get("/",async function(req,res){
    let arr = await GetMoviesRotten(0)
    let arr_home = await GetMoviesRotten(1)
    res.render("index",{
        ThumbMoviesPopular: arr,
        ThumbMoviesHome: arr_home
    })
})


app.listen(port,function(){
    console.log("Servidor rodando https://localhost:"+port)
})