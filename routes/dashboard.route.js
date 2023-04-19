const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('dashboard',{
        title:'Welcome to MRS Dashboard'
    })
})

router.get('/requests',(req,res)=>{
    res.render('requests')
})


module.exports = router