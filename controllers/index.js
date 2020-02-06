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
   db.Person.create(request.body).then(dbPerson => {
       response.json({
           status: "success OK 200",
           contact: dbPerson
       })
   }).catch(error => {
       response.json(error)
   })  
})


//This route is used to take the information and send to our email!
router.post("/api/email", (request, response) => {
    db.Mail(request.body)   

    console.log("Request: ", request.body) 
})

module.exports = router
