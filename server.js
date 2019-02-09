const express = require('express');
const hbs = require('hbs');


const port = process.env.PORT || 3000;
var app = express();
hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear()
})
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'))
app.get('/',(req,res)=>{
    res.render('help.hbs',{
        title: 'Home',
        //currentYear : new Date().getFullYear()
    });
});
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        title:'About',
       // currentYear : new Date().getFullYear()
    });
})

app.listen(port)