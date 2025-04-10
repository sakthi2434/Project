document.querySelector(".hmm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting us! We’ll get back to you soon.");
    this.reset();
  });
var opennav=document.querySelector(".openNavbar")

function showNavbar()
{
   opennav.style.left="0"
}

function closeNavbar()
{
    opennav.style.left="-60%"
}
