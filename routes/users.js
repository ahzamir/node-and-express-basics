const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Users List')
})

router.get('/new', (req, res) => {
    res.send('New User Form')
})

router.post('/', (req, res) => {
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

module.exports = router