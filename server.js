const express = require('express');
const dotenv = require('dotenv');
const app = express()

// load config
dotenv.config({path:'./config/config.env'})

// database connection
const connectDB = require('./config/db');
connectDB()

// view engine
app.set('view engine','ejs')

// middleware
app.use(express.urlencoded({extended:false}));

// routes
app.use('/',require('./routes/home'));
app.use('/articles',require('./routes/articles'));


// server connection listen
const PORT = process.env.PORT ;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})
