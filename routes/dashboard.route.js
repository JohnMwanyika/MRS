const express = require('express');
const router = express.Router();

// middleware to protect authenticated routes
router.use((req,res,next)=>{
    if(!req.session.user){
        return res.redirect('/login')
    }
    next();
})

router.get('/', (req, res) => {
    res.render('dashboard', {
        title: 'Welcome to MRS Dashboard',
        user: req.session.user
    })
})

router.get('/requests', (req, res) => {
    res.render('requests')
})


module.exports = router