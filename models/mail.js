require("dotenv").config();
const nodemailer = require("nodemailer")


const Mail = (request) => {

    console.log("Mail backend request: ", request)

    const output = `
        <p>Name: ${request.name}</p>
        <p>Phone: ${request.phone}</p>    
        <p>Email: ${request.email}</p>
        <p>Message: ${request.message}</p>        
    `

    // call the main function which will take care of the nodemailer.
    main(output)
}

async function main(output) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.email, // generated ethereal user
            pass: process.env.password // generated ethereal password
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Admin" <hello@adigivelli.com>', // sender address
        to: "hello@digivelli.com", // list of receivers
        subject: "Alex Vellios - Someone is interested in working with you!", // Subject line
        html: output // html body
    });

 

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// Export the model
module.exports = Mail; 