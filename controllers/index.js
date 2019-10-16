const express = require("express")

const router = express.Router()

router.get("/", (request, response) => {
    response.sendfile(__dirname + "views/aboutme.html")
})












module.exports = router