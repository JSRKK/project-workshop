const express = require('express')
const bodyparser = require('body-parser')
const app = express()

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

var friends = [
    { name: 'dom', phone: '08754632663' },
    { name: 'robin', phone: '08754631234' }     
]

app.get('/friend/:id', (req,res) =>{
    let id = req.params.id
    res.json(friends[id])
})

app.get('/friend', (req,res) => {
    res.json(friends)
})

app.post('/friend', (req,res) => {
    let newFriend = res.body.name
    friends.push(newFriend)
})

app.listen(3000, () => console.log('Example server'))



