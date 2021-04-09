const express = require('express');
const router = express.Router();

// setting the static middleware for this route 
router.use(express.static('public'));

router.get('/create',(req,res)=>{
    res.render('newbook');
})


module.exports=router;