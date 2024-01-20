var sidenav = document.getElementById("side-navbar");
var footedout= document.getElementById("food");
//console.log(sidenav.innerHTML);
function closefunction()
{
    console.log("closed");
    sidenav.style.display ="none";
}
function show()
{
    sidenav.style.display= 'block';
    console.log("opened");   
}
function footerin(){
    footedout.classList.toggle('footer-out');
}