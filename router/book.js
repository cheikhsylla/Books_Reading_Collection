const express = require('express');
const router = express.Router();



router.get('/',(req,res)=>{
    res.send('<h1> oh yes that working ! </h1>');
})


module.exports=router;