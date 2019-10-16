const express = reqiure("express")

const router = express.Router()

router.get("/", (request, response) => {
    response.sendfile(__dirname + "public/aboutme.html")
})












module.exports = router