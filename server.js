const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log("Hello")
    res.render('index', { name: 'Zamir' })
})

app.get('/users', (req, res) => {
    res.send('Users List')
})

app.get('/users/new', (req, res) => {
    res.send('New User Form')
})
app.listen(3000, () => console.log('Server running on port 3000'))