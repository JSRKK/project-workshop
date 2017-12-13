
const express = require('express')
const router = express.Router()
const friends = require('./db')

//get je
router.get('/contacts', (req, res) => {
    let name = req.query.name
    let resFriend = []
    if (name) {
        for (let i = 0; i < friends.length; i++) {
            if (friends[i].fname === name)
                resFriend.push(friends[i])
        }
        res.json(resFriend)
    }
    else {
        res.json(friends)
    }
})

router.get('/contacts/:id', (req, res) => {
    res.json(friends.find(friends => friends.id === req.params.id))
})

//post chon
router.post('/insertfriend', (req, res) => {
    let insert = req.body
    friend.push(insert)
    res.json(friend)
})

//put zuche
router.put('/contacts/:id', (req, res) => {
    const updateIndex = friends.findIndex(friends => friends.id === req.params.id)
    res.json(Object.assign(friends[updateIndex], req.body))
})


module.exports = router

