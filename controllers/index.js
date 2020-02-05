require("dotenv").config();
const express = require("express")
const path = require("path")
const router = express.Router()
const nodemailer = require("nodemailer")
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


//This route is used to take the information and send to our email!
router.post("/api/email", (request, response) => {

    const output = `
        <p>You have a new inquiry from Alexandervellios.com</p>
        <h4>Details:</h4>
        <br>
        <p>Name: ${request.body.name}</p>
        <p>Phone: ${request.body.phone}</p>    
        <p>Email: ${request.body.email}</p>
        <br>
        <br>
        <hr>
        <p>Message: ${request.body.message}</p>        
    `

0
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
            user: process.env.email, // generated ethereal user
            pass: process.env.password // generated ethereal password
            }
        });

        // send mail with defined transport object
        let mailOptions = {
            from: '"Admin 👻" <av@agavepv.com>', // sender address
            to: "av@agavepv.com", // list of receivers
            subject: "Alex Vellios - Someone is interested in working with you!", // Subject line
            html: output // html body
        };                

        transporter.sendMail(mailOptions, (error, info) => {
            if(error) {
                response.json(error)
            }

            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        })
})


module.exports = router
