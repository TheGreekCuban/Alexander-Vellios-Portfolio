const express = require("express")
const path = require("path")
const router = express.Router()
const nodeMailer = require("nodemailer")
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
       console.log("Db Person: ", dbPerson)
       response.json({
           status: "success OK 200",
           contact: dbPerson
       })
   }).catch(error => {
       response.json(error)
   })  
})


//This route is used to post new contact info to the database!
router.post("/api/email", (request, response) => {

    console.log(request.body)

    const output = `
        <p>You have a new inquiry from Alexandervellios.com</p>
        <h4>Details:</h4>
        <hr>
        <p>Name: ${request.body.name}</p>
        <p>Phone: ${request.body.phone}</p>    
        <p>Email: ${request.body.email}</p>    
        <p>Message: ${request.body.message}</p>        
    `
        console.log("This route was hit")
 })

module.exports = router
