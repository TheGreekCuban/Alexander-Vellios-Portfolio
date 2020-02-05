$(document).ready(function(){
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

  fetch("/api/contact", options).then(response => {
    console.log(response)
  }).then(response => {
    clearForm()

    fetch("/api/email", options).then(response => {
      console("Email sent! ", response)
    }).catch(error => {
      console.log(error)
    })

  }).catch(error => {
    console.log(error)
  })
}

const clearForm = () => {
  document.getElementById("cForm").reset();
}

//Listen for form Submit  
document.getElementById("cForm").addEventListener("submit", submitForm);

