$(document).ready(function(){
  
    $('.sidenav').sidenav();
    $('.carousel').carousel({
      padding: 15,
      numVisible: 3,
      duration: 400,
      pressed: true,
    });

   


    $(".carousel").click(function(event) {
      console.log("hello")
      let log = $(this).find(".active").attr("itemid")
      console.log(log)
    })

  

  });