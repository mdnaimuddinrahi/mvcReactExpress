const express = require('express')
const { validateToken } = require('../middlewares/AuthMiddleware')
const router = express.Router()
const { Posts, Likes } = require('../models')


router.get('/', async (req, res) => {
    const listOfPosts = await Posts.findAll({ include: [Likes] })
    res.json(listOfPosts)
})

router.get('/byId/:id', async (req, res) => {
    const id = req.params.id
    const post = await Posts.findByPk(id)
    res.json(post)
})

router.post('/', validateToken, async (req, res) => {
    const post = req.body
    post.username = req.user.username
    post.UserId = req.user.id
    const saveData = await Posts.create(post)
    res.json({ message: "Post Upload Successfully", type: "success", data: saveData })
    // return saveData
})

router.delete('/:postId', validateToken, async (req, res) => {
    const postId = req.params.postId
    await Posts.destroy({
        where: {
            id: postId
        }
    })
    res.json({ type: 'success', message: "Post Delete Successfully" })
})

router.get('/byuserId/:id', async (req, res) => {
    const id = req.params.id
    const listOfPosts = await Posts.findAll({ where: { UserId: id }, include: [Likes] })
    res.json(listOfPosts)
})

module.exports = router;