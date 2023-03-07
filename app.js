var navLinksObject=document.getElementById("navbar")
var overlayObject=document.getElementById("overlay")
var closeBtn=document.getElementById("closebtn");

var openBtn=document.getElementById("opnbtn");

var bodyobce=document.getElementById("body");

const navOpen = () => {
    navLinksObject.classList.add('show');
    overlayObject.classList.add('active');
   document.body.style= 'visibility: visible; height: 100vh; width:100vw; overflow:hidden;';
 }
 
 const navClose = () => {
    navLinksObject.classList.remove('show');
    overlayObject.classList.remove('active');
   document.body.style= 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
 }
 
 openBtn.addEventListener('click', navOpen);
 
 closeBtn.addEventListener('click', navClose);
 
 overlayObject.addEventListener('click', navClose)



 /*AOS SCRIPTS*/


 AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
