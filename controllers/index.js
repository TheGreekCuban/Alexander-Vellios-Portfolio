const express = require("express")
const path = require("path")
const router = express.Router()
const db = require("../models")

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

router.get("/contact.html", (request, response) => {
    response.sendFile(path.join(__dirname, "../public/html/contact.html"))
})

router.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../public/html/aboutme.html"))
})

//This route is used to post new contact info to the database!
router.post("/api/contact", (request, response) => {
    console.log(request)
   db.Person.create(request.body).then(dbPerson => {
       console.log(dbPerson)
   }).catch(error => {
       response.json(error)
   })  
})

module.exports = router
