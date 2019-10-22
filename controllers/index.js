const express = require("express")
const path = require("path")
const router = express.Router()

router.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "../public/html/home.html"))
})

router.get("/home.html", (request, response) => {
    response.sendFile(path.join(__dirname, "../public/html/home.html"))
})

router.get("/aboutme.html", (request, response) => {
    response.sendFile(path.join(__dirname, "../public/html/aboutme.html"))
})

router.get("/projects.html", (request, response) => {
    response.sendFile(path.join(__dirname, "../public/html/projects.html"))
})

router.get("/mini-projects.html", (request, response) => {
    response.sendFile(path.join(__dirname, "../public/html/mini-projects.html"))
})

router.get("/contact.html", (request, response) => {
    response.sendFile(path.join(__dirname, "../public/html/contact.html"))
})

router.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../public/html/aboutme.html"))
})
module.exports = router