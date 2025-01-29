const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash')
const catchAsync = require('./utils/catchAsync.js')
const ExpressError = require('./utils/ExpressError')
const Review = require('./models/reviews.js');
const { campgroundSchema, reviewSchema } = require('./validationSchema.js');
const joi = require('joi')
const campgrounds = require('./routes/campgrounds');
const reviewRoutes = require('./routes/reviewRoutes');
// const ExpressError=re
const methodOverride = require('method-override');
const Campground = require('./models/campground');
const mongoose = require('mongoose');
const { title } = require('process');
const reviews = require('./models/reviews.js');
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/YELP-CAMP');
    console.log('Connection established');
}

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(flash())
app.use(express.static(path.join(__dirname, 'public')))
const sessionsConfig = {
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionsConfig))
app.engine('ejs', ejsMate)

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.use('/campgrounds', campgrounds)
app.use('/campgrounds/:id/reviews', reviewRoutes)
app.get('/', (req, res) => {
    res.render('home');
});



app.all(/(.*)/, (req, res, next) => {
    next(new ExpressError('page not found error', 404))
})
app.use((err, req, res, next) => {
    const { message = 'you fucked up!!', statusCode = 500 } = err;
    if (!err.message) err.message = 'you fucked up'
    res.status(statusCode).render('error', { err })
})
app.listen(3000, () => {
    console.log('Serving on port 3000');
});
