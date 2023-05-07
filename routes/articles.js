const express = require('express');
const router = express.Router();

const Article = require('../model/article')

// GET send all articles(/articles)
router.get('/new', (req,res) => {
    res.render('articles/new')
})


// GET display one article(/articles/:id)
router.get('/:id', async (req,res) => {
    try {
        const article = await Article.findOne({_id : req.params.id})
        if(!article){res.redirect('/')}
        res.render('articles/show',{article:article})
    } catch (err) {
        console.log(err);
        res.send('404 error')
    }
})

// POST add one articles(/articles/new)
router.post('/', async (req,res) => {
    try {
        await Article.create(req.body);
        res.redirect('/')
    } catch (err) {
        console.log(err);
        res.redirect('/')
    }
})


module.exports = router;

