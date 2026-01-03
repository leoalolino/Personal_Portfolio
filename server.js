const express = require('express')
const app = express()
const db = require('./db')
app.set('view engine', 'ejs')
app.use(express.json())

app.get('/', (req, res) => {
    res.render('profile');
});



app.listen(3000, () => {
    console.log('http://localhost:3000')
})