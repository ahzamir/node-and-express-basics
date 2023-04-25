const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(logger)

app.get('/', (req, res) => {
    console.log("Hello")
    res.render('index', { name: 'Zamir' })
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}
const userRouter = require('./routes/users')

app.use('/users', userRouter)
app.listen(3000, () => console.log('Server running on port 3000'))