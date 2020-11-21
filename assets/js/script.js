
var myNav = document.getElementById('navbar');
var navlink = document.getElementsByClassName('nav-link');
$("#navbar").addClass("navbarsm");
window.onscroll = function () {

    "use strict";
    if (document.body.scrollTop >= 350 || document.documentElement.scrollTop >= 350) {
        myNav.classList.add("nav-black");
        myNav.classList.remove("navbarsm");
        myNav.classList.remove("nav-normal");
        for (var i = 0; i < navlink.length; i++) {
            navlink[i].classList.add('nav-white');
        }
    }
    else {
        myNav.classList.add("nav-normal");
        myNav.classList.remove("nav-black");
        myNav.classList.add("navbarsm");
        for (var i = 0; i < navlink.length; i++) {
            navlink[i].classList.remove('nav-white');
        }
    }
};
function send() {
    document.getElementById('thanks').innerHTML = "We have received your message, " + document.getElementById('username').value + ".";
}
const toggelButton = document.querySelector('button');

toggelButton.addEventListener("click",()=>{

  document.querySelector('.navigation__icon').classList.toggle('active');});