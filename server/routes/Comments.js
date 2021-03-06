const express = require('express')
const router = express.Router()
const { Comments } = require('../models')
const { validateToken } = require('../middlewares/AuthMiddleware')

router.get("/:postId", async (req, res) => {
    const postId = req.params.postId
    const comments = await Comments.findAll({ where: { PostId: postId } })
    res.json(comments)
})

router.post('/', validateToken, async (req, res) => {
    const comment = req.body
    const username = req.user.username
    comment.username = username
    console.log(`comment::> `, comment)
    await Comments.create(comment)
    res.json({ type: 'success', message: "Comment Upload Successfully" })
})


router.delete("/:commentId", validateToken, async (req, res) => {
    // console.log(`req`, req.params)
    const commentId = req.params.commentId
    await Comments.destroy({
        where: {
            id: commentId
        }
    })
    res.json({ type: 'success', message: "Comment Delete Successfully" })
})
// router.delete()

module.exports = router;