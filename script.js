document.addEventListener("DOMContentLoaded",function(){
  var navigation = document.getElementById("navigation");
  var contentSections = document.querySelector("#content section");

  window.addEventListener("scroll" , function(){
    var scrollPoistion = window.scrollY;

    if(scrollPoistion>50){
      navigation.style.backgroundColor = "#555";
    }
    else {
      navigation.style.backgroundColor = "#333";
    }

    contentSections.forEach(function (section){
      var sectionTop = section.offsetTop - navigation.clientHeight;
      var sectionBottom = sectionTop + section.clientHeight;

      if(scrollPoistion >= sectionTop && scrollPoistion < sectionBottom){
        var currentActive = navigation.querySelector(".active");
        if(currentActive){
          currentActive.classList.remove("active");
        }
        var correspondingLink = navigation.querySelector('a[href="#' + section.id + '"]');
        if(correspondingLink){
          correspondingLink.classList.add("active");
        }
      }
    })
  })
}
)