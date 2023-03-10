

// Hiding and showing the navigation on smaller screen

var navLinks = document.querySelector('nav');
var showButton = document.querySelector('.fa-bars')
var hideButton = document.querySelector('.fa-times')



//This function shows the navigation and removes the "bars" button
showButton.onclick = function showMenu() {
	navLinks.style.right = "0";
	showButton.style.display = "none";
}


//This function hides the navigation and shows the "bars" button again, also
hideButton.onclick = function hideMenu() {
	navLinks.style.right = "-200px";
	showButton.style.display = "block";
	showButton.style.top = "-550px";
}






// Making the blue border around the active nav elements

var btns = document.querySelectorAll('nav ul > li a')

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}






// Making the images in the portfolio gallery filterable 

const filterContainer = document.querySelector(".port-nav ul"); 
const galleryItems = document.querySelectorAll(".img-wrapper");

filterContainer.addEventListener("click", (event) =>{
   if(event.target.classList.contains("port-button")){

   	filterContainer.querySelector(".active").classList.remove("active");

   	event.target.classList.add("active");

   	const filterValue = event.target.getAttribute("data-filter");

   	galleryItems.forEach((item) =>{

       if(item.classList.contains(filterValue) || filterValue === 'all'){
       	item.classList.remove("hide");
       	 item.classList.add("show");
       }

       else{
       	item.classList.remove("show");
       	item.classList.add("hide");
       }

   	 });
   }
 });






// Hiding and showing the port-navigation on smaller screens

var portNav = document.querySelector('.port-nav')
var portShowButton = document.querySelector('.fa-arrow-left')
var portHideButton = document.querySelector('.fa-window-close')


portShowButton.onclick = function showPortMenu() {
  portNav.style.right = "0";
  portShowButton.style.display = "none";
}



portHideButton.onclick = function hidePortMenu() {
  portNav.style.right = "-300px";
  portShowButton.style.display = "block";
  // portShowButton.style.top = "-550px";
}
