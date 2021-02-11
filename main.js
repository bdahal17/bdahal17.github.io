"use strict";
const aboutMe = document.querySelector(".aboutMeButton");
const changingDisplayAboutMe = document.querySelector(".pop");
const emoji = document.querySelector(".emoji");
const prompt = document.querySelector(".email");
changingDisplayAboutMe.style.display = "none";
aboutMe.addEventListener("click", function () {
  changingDisplayAboutMe.style.display = "flex";
});
emoji.addEventListener("click", function () {
  changingDisplayAboutMe.style.display = "none";
});
prompt.addEventListener("click", function () {
  alert("bdahal17@gmail.com");
});
