const express = require('express');
const app = express();

const book=require('./router/book')

// register view engine
app.set('view engine','ejs');

// listen for request 
app.listen(3000);

//middleware & static files
app.use(express.static('public'));
// /home page 
app.get('/',(req,res)=>{
    
    res.render('home');
})

// about page 
app.get('/about',(req,res)=>{
    res.render('about');
})

// Book router 

app.use('/book',book);

//redirected link 
app.get('/about-me',(req,res)=>{
    res.redirect('about');
})




