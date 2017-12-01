    const express = require('express')
    const router = express.Router()

    let friend = [
           { 
               fname:"Apisit",
               lname:"Sirichoke",
               email:"58160335@go.buu.ac.th",
               phone:"0987567846"
               //url:"",
               //note:""
           }
        ]

    //get tew










    //post chon
    router.post('/insertfriend', (req, res) =>
    {
        let insert = req.body
        friend.push(insert)
        res.json(friend)    
    }) 
    module.exports = router








    //put zuche










    //delete je









    
    //module.exports = router