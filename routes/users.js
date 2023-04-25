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
        res.send(`Get a user with the ID = ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update a user with the ID = ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete a user with the ID = ${req.params.id}`)
    })

module.exports = router