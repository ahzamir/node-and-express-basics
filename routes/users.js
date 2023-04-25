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

router.get('/:id', (req, res) => {
    res.send(`Get a user with ID ${req.params.id}`)
})

module.exports = router