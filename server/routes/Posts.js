const express = require('express')
const { validateToken } = require('../middlewares/AuthMiddleware')
const router = express.Router()
const { Posts } = require('../models')

router.get('/', async (req, res) => {
    const listOfPosts = await Posts.findAll()
    res.json(listOfPosts)
})

router.get('/byId/:id', async (req, res) => {
    const id = req.params.id
    const post = await Posts.findByPk(id)
    res.json(post)
})

router.post('/', async (req, res) => {
    const post = req.body
    const saveData = await Posts.create(post)
    res.json({ message: "Post Upload Successfully", type: "success", data: saveData })
    // return saveData
})



module.exports = router;