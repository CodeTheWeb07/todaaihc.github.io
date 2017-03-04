$(window).scroll(function() {
if ($(this).scrollTop() > 10) {  
    $('.navigationBarslide').addClass("scrolled");
  } else {
    $('.navigationBarslide').removeClass("scrolled");
  }
});
function showtoggle(id) {
   var x = document.getElementById(id);
   if (x.className.indexOf("show") == -1) {
       x.className += " show";
   } else {
       x.className = x.className.replace(" show", "");
   }
}
$(document).ready(function(){
    $("#sd_btn").click(function() {
        $("#locationmap").slideToggle("slow");
    });
});
function maptoggle() {
    var text = document.getElementById('maptoggle');
    if (text.innerHTML === "Hide") {
        text.innerHTML = "Show";
    } else {
        text.innerHTML = "Hide";
    }
}
function titlecontact(){
    document.title = "TodaaiHc | Contact Us"
}
function titleabout(){
    document.title = "TodaaiHc | About Us"
}
function titlehome(){
    document.title = "TodaaiHc | Home"
}
setTimeout('$("#introhr").show()',900);