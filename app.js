const express = require('express');
const app = express();

const book=require('./router/book')


// listen for request 
app.listen(3000);

// /home page 
app.get('/',(req,res)=>{
    res.sendFile('./views/home.html',{root:__dirname});
})

// Book router 

app.use('/book',book);

