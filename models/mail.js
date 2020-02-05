require("dotenv").config();
const nodemailer = require("nodemailer")

const Mail = (request) => {

    console.log("Request: ", request)

    const output = `
        <p>You have a new inquiry from Alexandervellios.com</p>
        <h4>Details:</h4>
        <br>
        <p>Name: ${request.name}</p>
        <p>Phone: ${request.phone}</p>    
        <p>Email: ${request.email}</p>
        <br>
        <br>
        <hr>
        <p>Message: ${request.message}</p>        
    `

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
        user: process.env.email, // generated ethereal user
        pass: process.env.password // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // send mail with defined transport object
    let mailOptions = {
        from: '"Admin" <av@agavepv.com>', // sender address
        to: "av@agavepv.com", // list of receivers
        subject: "Alex Vellios - Someone is interested in working with you!", // Subject line
        text: "Do we need this?",
        html: output // html body
    };                

    transporter.sendMail(mailOptions, (error, info) => {
        
        if(error) {
            console.log(error)
        }

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    })
}

// Export the Article model
module.exports = Mail;