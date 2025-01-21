const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const catchAsync = require('./utils/cathAsync')
const ExpressError = require('./utils/ExpressError')
const Review = require('./models/reviews.js');
const { campgroundSchema } = require('./validationSchema.js');
const joi = require('joi')
// const ExpressError=re
const methodOverride = require('method-override');
const Campground = require('./models/campground');
const mongoose = require('mongoose');
const { title } = require('process');
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
app.engine('ejs', ejsMate)

const validateCampground = (req, res, next) => {
    const { error } = campgroundSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}


app.get('/', (req, res) => {
    res.render('home');
});

// Route for creating a new campground form
app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new');
});
app.post('/campgrounds', validateCampground, catchAsync(async (req, res, next) => {

    // res.send(req.body.campgrounds)
    // if (!req.body.campground) throw new ExpressError('invalid camp data', 400);
    // const campgroundSchema = joi.object({
    //     campground: joi.object({
    //         title: joi.string().required(),
    //         price: joi.number().required().min(0)

    //     }).required()

    // })
    // const { error } = campgroundSchema.validate(req.body);
    // if (error) {
    //     const msg = error.details.map(el => el.message).join(',')
    //     throw new ExpressError(msg, 400)
    // }
    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`)

}))
app.get('/campgrounds/:id/edit', catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render('campgrounds/edit', { campground });
}))
// Route for listing all campgrounds
app.get('/campgrounds', catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });
}));

// Route for showing details of a single campground
app.get('/campgrounds/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    res.render('campgrounds/show', { campground });
}));
app.put('/campgrounds/:id', validateCampground, catchAsync(async (req, res) => {
    const campground = await Campground.findByIdAndUpdate(req.params.id, { ...req.body.campground })
    res.redirect(`/campgrounds/${campground._id}`);
}))
app.delete('/campgrounds/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds')
}))
app.post('/campgrounds/:id/reviews', catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
}))
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
