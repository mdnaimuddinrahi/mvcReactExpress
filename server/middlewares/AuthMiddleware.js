const { verify } = require("jsonwebtoken")

const validateToken = (req, res, next) => {

    const accessToken = req.header("accessToken")
    if (!accessToken) return res.json({ error: "User not Logged in!" })
    try {
        const validToken = verify(accessToken, "importantfulusecret");
        req.user = validToken
        if (validToken) {
            return next()
        }
    } catch (errorMsg) {
        return res.json({ error: errorMsg })
    }
}

module.exports = { validateToken }