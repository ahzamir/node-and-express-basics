const express = require('express')
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => {
    res.send('Users List')
})

router.get('/new', (req, res) => {
    res.render('users/new', { firstName: "placeholder name"})
})

router.post('/', (req, res) => {
    console.log(req.body.firstName)
    res.send('Create a new User')
})

router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get a user with the ID = ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update a user with the ID = ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete a user with the ID = ${req.params.id}`)
    })

const users = [{ name: 'Zamir' }, { name: 'Zaki' }, { name: 'Zia' }]
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router