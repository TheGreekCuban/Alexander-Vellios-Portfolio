$(document).ready(function () {
  $('.sidenav').sidenav();
});

//Submit form function  
const submitForm = (e) => {
  e.preventDefault();

  //Get All Form Values
  const name = getInputVal("first_name")
  const phone = getInputVal("icon_telephone")
  const email = getInputVal("email")
  const message = getInputVal("textarea")

  saveMessage(name, phone, email, message)
}

//Function to get form values
const getInputVal = id => {
  return document.getElementById(id).value;
}

//Function that saves message to database
const saveMessage = (name, phone, email, message) => {
  let data = {
    name: name,
    phone: phone,
    email: email,
    message: message
  }

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }

  fetch("/api/contact", options)
    .then(response => {
      console.log(response.status)
      clearForm(options);
    }).catch(error => {
          console.log(error)
    })
  
}

const clearForm = (options) => {
  //This takes the options argument and passes it into activate nodemailer which handles the second fetch.
  
  activateNodemailer(options)
  alert("Thank you, your message has been sent. I will be in touch with you shortly!")
  document.getElementById("cForm").reset();
}


const activateNodemailer = options => {
  //Once the info is entered, clear the form and then hit another route to send them email. 
  fetch("/api/email", options).then(response => {
    console.log("mail sent! :D")
  }).catch(console.error)
}

//Listen for form Submit  
document.getElementById("cForm").addEventListener("submit", submitForm);
