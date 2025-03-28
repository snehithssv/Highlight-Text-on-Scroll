document.addEventListener("DOMContentLoaded", function() {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
      triggerElement: ".scroll-text",
      triggerHook: 0.5, 
      duration: "100%" 
    })
    .on("progress", function(e) {
      var progress = e.progress; 

      if (progress > 0.7) {
        progress = 0.7; 
      }

      var backgroundSize = progress * 150; 
      document.querySelector(".scroll-text span").style.backgroundSize = `${backgroundSize}% 100%`;

      if (progress >= 0.3) {
        document.querySelector(".scroll-text span").classList.add("highlighted");
      } else {
        document.querySelector(".scroll-text span").classList.remove("highlighted");
      }
    })
    .addTo(controller); 
});