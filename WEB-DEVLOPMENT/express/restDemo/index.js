const express = require('express');
const app = express();
const path = require('path')
const { v4: getId } = require('uuid');
const methodOverride = require('method-override');
getId();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
let comments = [{
    id: getId(),
    username: 'todd',
    comment: 'this is funny'
},
{
    id: getId(),
    username: 'han',
    comment: 'this is '
},
{
    id: getId(),
    username: 'greg',
    comment: 'this  funny'
}
]
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})
app.get('/comments/new', (req, res) => {
    res.render('comments/new', { comments })
})
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', { comment })
})
app.post('/comments', (req, res) => {
    // console.log(req.body);
    const { username, comment } = req.body;
    comments.push({ username, comment, id: getId() })
    res.redirect('/comments')
})
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    // const foundcomment=comments.find(c=>c.id===id)
    comments = comments.filter(c => c.id !== id)
    res.redirect('/comments')
})
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newcomment = req.body.comment
    const foundcomment = comments.find(c => c.id === id)
    foundcomment.comment = newcomment;
    res.redirect('/comments')

})
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
})
app.get('/tacos', (req, res) => {
    res.send('this is get')
})
app.post('/tacos', (req, res) => {
    console.log(req.body)
    res.send('this is post')
})
app.listen(3000, () => {
    console.log("listeniong 3000")
})

