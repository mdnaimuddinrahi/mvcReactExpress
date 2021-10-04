const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = require('./models')

//Routers for post
const postRouter = require('./routes/Posts')
app.use("/posts", postRouter)

//Routers for comments
const commentsRouter = require('./routes/Comments')
app.use("/comments", commentsRouter)


//Routers for users
const usersRouter = require('./routes/Users')
app.use("/auth", usersRouter)


//Routers for likes
const likesRouter = require('./routes/Likes')
app.use("/likes", likesRouter)

db.sequelize.sync().then(() => {
    app.listen(3080, () => {
        console.log('Server running on port 3080')
    })
})


