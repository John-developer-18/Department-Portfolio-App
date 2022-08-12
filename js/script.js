
//Function for the dark theme
var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("darktheme");
    if (document.body.classList.contains("darktheme")) {
        icon.src = "images/sun.png";
    } else {
        icon.src = "images/moon.png";
    }
}

//Functions for the hide and show of the harmburger menu items
function showNav(){
  document.getElementById("ham").style.display = "block";
 }
 
function hideHam(){
    document.getElementById("ham").style.display = "none";
}

//Functions for the ratings
 function rating(){
     document.getElementById("rating1").style.display = "block";
     document.getElementById("overlay").style.display = "block";
 }

 function rating2(){
     document.getElementById("rating1").style.display = "none";
     document.getElementById("overlay").style.display = "none";
 }
//Functions for the star ratings
$(document).ready(function() {

if ((screen.width>700)) {
// if screen size is 1025px wide or larger
$(".dropdown").css('display', 'none !important'); // you can also use $(".yourClass").hide();
}

});


