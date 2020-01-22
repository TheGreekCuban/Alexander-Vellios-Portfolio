require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")


//Save the initialization of express to the app variable
const app = express()

//Create a variable that willl be the PORT
const PORT = process.env.PORT || 3030

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/contactedme"
// Connect to the Mongo DB
// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true
// })

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/contactedme");

const db = mongoose.connection

db.on("error", console.error.bind(console, "connection error: "))
db.once("open", function() { console.log("Connected to Mongoose`!") })

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Import the routes and give the server access to them
const routes = require("./controllers/index")

app.use(routes)

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});
