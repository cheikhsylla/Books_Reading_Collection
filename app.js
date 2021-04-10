const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Book = require('./models/book');

// conect to the mongodb
const dbURI='mongodb+srv://cheikh:al-Faruq4@books.sfd85.mongodb.net/learnedbook?retryWrites=true&w=majority';

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=>app.listen(3000))
    .catch((err)=>console.log(err));

const book=require('./router/book')

// register view engine
app.set('view engine','ejs');

// listen for request 
// app.listen(3000);

//middleware & static files
app.use(express.static('public'));
// /home page 
app.get('/',(req,res)=>{
    
    res.render('home');
})

app.get('/add-book',(req,res)=>{
    const book = new Book({
        author:'dienf sylla',
        bookName:'learn java',
        finished:'20/02/2021'
    });
    book.save()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>console.log(err));
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


app.get('/all-book',(req,res)=>{
    Book.findById('6071f88ca22e703248eac402')
        .then(result=>{
            res.send(result)
        })
        .catch(err=>console.log(err));
})

