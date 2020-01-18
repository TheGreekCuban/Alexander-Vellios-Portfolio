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

  console.log(name)
}

//Function to get form values
const getInputVal = id => {
  return document.getElementById(id).value;
}

//Listen for form Submit  
document.getElementById("cForm").addEventListener("submit", submitForm);

