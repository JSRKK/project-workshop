    const express = require('express')
    const router = express.Router()

    let friend = [
           { 
               fname:"",
               lname:"",
               email:"",
               phone:"",
               url:"",
               note:""
           }
        ]

    //get tew










    //post chon










    //put zuche










    //delete je
    router.delete('/contacts/:id', (req, res) => {
        const deletedIndex = friend.findIndex(friend => friend.id === req.params.id)
        friend.splice(deletedIndex, 1)
        res.send(friend)
    })





    module.exports = router