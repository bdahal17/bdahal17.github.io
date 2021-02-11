"use strict";
const aboutMe = document.querySelector(".aboutMeButton");
const changingDisplayAboutMe = document.querySelector(".pop");
const emoji = document.querySelector(".emoji");
changingDisplayAboutMe.style.display = "none";
aboutMe.addEventListener("click", function () {
  changingDisplayAboutMe.style.display = "flex";
});
emoji.addEventListener("click", function () {
  changingDisplayAboutMe.style.display = "none";
});
