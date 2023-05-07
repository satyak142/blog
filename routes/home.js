const express = require('express');
const router = express.Router();

const Article = require('../model/article')

// GET send all blog articles in home(/)
router.get('/', async (req,res) => {
    try {
        const articles = await Article.find().sort({createdAt:'desc'}).lean();
        res.render('articles/index',{ articles : articles })
    } catch (err) {
        console.log(err);
        res.send('404 error')
    }
})




module.exports = router;

