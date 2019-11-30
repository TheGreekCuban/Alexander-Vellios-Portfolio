$(document).ready(function(){
  
    $('.sidenav').sidenav();
    $('.carousel').carousel({
      padding: 15,
      numVisible: 3,
      duration: 400,
      pressed: true,
    });

   


    $("a.carousel-item").click(function(event) {
      if($("a.carousel-item").hasClass("active")) {
        let picId = $("img.responsive-img").attr("pic")
        console.log("ID: ", picId)
      }
    })

  

  });