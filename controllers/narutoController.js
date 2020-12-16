const router = require('express')
const models = require('../models')

router.get('/',(req,res)=>{
    models.Character.find().then((foundcharacters)=>{
        res.status(200).json({Character: foundcharacters})
    })
})

router.get('./:id',(req,res)=>{
    models.Character.find({_id: req.params.id}).then((Character)=>{
        res.status(200).json({Character})
    })
})

router.post('/',(req,res)=>{
    models.Character.create(req.body).then((Character)=>{
        res.status(201).json({Character})
    }).catch((err)=>{
        res.send(err)
    })
})

router.put('/:id',(req,res)=>{
    res.send('hello')
})

router.delete('/:id',(req,res)=>{
    res.send('delete')
})
