"use strict";
//variables---------------------------------------------------
//variables---------------------------------------------------
const aboutMe = document.querySelector(".aboutMeButton");
const changingDisplayAboutMe = document.querySelector(".pop");
const emoji = document.querySelector(".emoji");
const prompt = document.querySelector(".email");
const projectOne = document.querySelector(".projectOne");
const projectTwo = document.querySelector(".projectTwo");
const projectThree = document.querySelector(".projectThree");
const projectFour = document.querySelector(".projectFour");
const projectFive = document.querySelector(".projectFive");
const projectSix = document.querySelector(".projectSix");
const projectSeven = document.querySelector(".projectSeven");
const switchOne = document.querySelector(".switchOne");
const switchTwo = document.querySelector(".switchTwo");
const switchThree = document.querySelector(".switchThree");
const switchFour = document.querySelector(".switchFour");
const switchFive = document.querySelector(".switchFive");
const switchSix = document.querySelector(".switchSix");
const switchSeven = document.querySelector(".switchSeven");
//------------------------------functions-------------
//------------------------------functions-------------
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
//------------------------------Card one event-------------
//------------------------------Card one event-------------
projectOne.addEventListener("mouseover", function () {
  switchOne.style.backgroundColor = "gray";
});
projectOne.addEventListener("mouseout", function () {
  switchOne.style.backgroundColor = "black";
});
//------------------------------Card Two event-------------
//------------------------------Card Two event-------------
projectTwo.addEventListener("mouseover", function () {
  switchTwo.style.backgroundColor = "gray";
});
projectTwo.addEventListener("mouseout", function () {
  switchTwo.style.backgroundColor = "black";
});
//------------------------------Card Three event-------------
//------------------------------Card Three event-------------
projectThree.addEventListener("mouseover", function () {
  switchThree.style.backgroundColor = "gray";
});
projectThree.addEventListener("mouseout", function () {
  switchThree.style.backgroundColor = "black";
});
//------------------------------Card Four event-------------
//------------------------------Card Four event-------------
projectFour.addEventListener("mouseover", function () {
  switchFour.style.backgroundColor = "gray";
});
projectFour.addEventListener("mouseout", function () {
  switchFour.style.backgroundColor = "black";
});
//------------------------------Card Five event-------------
//------------------------------Card Five event-------------
projectFive.addEventListener("mouseover", function () {
  switchFive.style.backgroundColor = "gray";
});
projectFive.addEventListener("mouseout", function () {
  switchFive.style.backgroundColor = "black";
});
//------------------------------Card Six event-------------
//------------------------------Card six event-------------
projectSix.addEventListener("mouseover", function () {
  switchSix.style.backgroundColor = "gray";
});
projectSix.addEventListener("mouseout", function () {
  switchSix.style.backgroundColor = "black";
});
//------------------------------Card Seven event-------------
//------------------------------Card Seven event-------------
projectSeven.addEventListener("mouseover", function () {
  switchSeven.style.backgroundColor = "gray";
});
projectSeven.addEventListener("mouseout", function () {
  switchSeven.style.backgroundColor = "black";
});
changingDisplayAboutMe.addEventListener("mouseover", function () {
  switchFour.style.backgroundColor = "gray";
});
