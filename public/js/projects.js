$(document).ready(function(){
  
    $('.sidenav').sidenav();
    $('.carousel').carousel({
      padding: 15,
      numVisible: 3,
      duration: 400,
      pressed: true,
    });

   

    let activeElement = null

    function activeElementChanged(newElement) {
        let oldElementId = $(activeElement).find("img.responsive-img").attr("itemid")
        activeElement = newElement
        let itemId = $(newElement).find("img.responsive-img").attr("itemid")
        changeDescriptionText(itemId, oldElementId)
    }
    
    function changeDescriptionText(itemId, oldElementId) {
      console.log(itemId, oldElementId)
      $("#p" + oldElementId).css("display", "none")
      $("#p" + itemId).fadeIn(1500)
    }

    //This is a helper function that listens for the change in the current active element. First it saves the active element to currentActiveElement. If that variable is not = to the activeElement, the active element change function it called. Otherwise the requestAnimationTimeFrame function is continuously iterating, waiting for the change.
    let activeElementListener = function () {
        let currentActiveElement = $("a.carousel-item.active").get(0)
        if(currentActiveElement !== activeElement) {
            activeElementChanged(currentActiveElement)
        }
        requestAnimationFrame(activeElementListener)
    }

    //This method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.

    //Note: Your callback routine must itself call requestAnimationFrame() if you want to animate another frame at the next repaint.
    requestAnimationFrame(activeElementListener)
  });