    const express = require('express')
    const router = express.Router()
    const friends = require('./db')

    //get tew










    //post chon










    //put zuche
    router.put('/contacts/:id', (req, res) => {
        const updateIndex = friends.findIndex(friends => friends.id === req.params.id)
        res.json(Object.assign(friends[updateIndex], req.body))
      })






    //delete je









    
    module.exports = router