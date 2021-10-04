const express = require('express')
const { validateToken } = require('../middlewares/AuthMiddleware')
const router = express.Router()
const { Likes } = require('../models')

// router.get('/', async (req, res) => {
//     const listOfPosts = await Posts.findAll()
//     res.json(listOfPosts)
// })

// router.get('/byId/:id', async (req, res) => {
//     const id = req.params.id
//     const post = await Posts.findByPk(id)
//     res.json(post)
// })

router.post('/', validateToken, async (req, res) => {
    const { PostId } = req.body
    const UserId = req.user.id
    const found = await Likes.findOne({ where: { PostId: PostId, UserId: UserId } })
    if (!found) {
        await Likes.create({ PostId: PostId, UserId: UserId })
        res.json({ message: "Like Upload Successfully", type: "success" })
    } else {
        await Likes.destroy({
            where: { PostId: PostId, UserId: UserId }
        })
        res.json({ message: "Like Deleted", type: "success" })
    }
    // return saveData
})



module.exports = router;