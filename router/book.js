const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
// // conect to the mongodb
// const dbURI='mongodb+srv://cheikh:al-Faruq4@books.sfd85.mongodb.net/learnedbook?retryWrites=true&w=majority';

// mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
//     .then((result)=>app.listen(3000))
//     .catch((err)=>console.log(err));
// setting the static middleware for this route 
router.use(express.static('public'));




router.get('/create',(req,res)=>{
    res.render('newbook');
})


module.exports=router;