const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log("Hello")
    res.render('index', { name: 'Zamir' })
})

app.listen(3000, () => console.log('Server running on port 3000'))