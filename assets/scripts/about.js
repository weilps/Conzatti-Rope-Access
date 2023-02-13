// Script for hovering the team

const loicT = document.getElementById("loic");
const amauryT = document.getElementById("amaury");
const techniciansT = document.getElementById("technicians");

const noneD = document.getElementById("none");
const loicD = document.getElementById("Loic");
const amauryD = document.getElementById("Amaury");
const techniciansD = document.getElementById("Technicians");

loicT.addEventListener("mouseover", function () {
  noneD.style.display = "none";
  loicD.style.display = "block";
  amauryD.style.display = "none";
  techniciansD.style.display = "none";
});

loicT.addEventListener("mouseout", function () {
  noneD.style.display = "flex";
  loicD.style.display = "none";
  amauryD.style.display = "none";
  techniciansD.style.display = "none";
});

amauryT.addEventListener("mouseover", function () {
  noneD.style.display = "none";
  loicD.style.display = "none";
  amauryD.style.display = "block";
  techniciansD.style.display = "none";
});

amauryT.addEventListener("mouseout", function () {
  noneD.style.display = "flex";
  loicD.style.display = "none";
  amauryD.style.display = "none";
  techniciansD.style.display = "none";
});

techniciansT.addEventListener("mouseover", function () {
  noneD.style.display = "none";
  loicD.style.display = "none";
  amauryD.style.display = "none";
  techniciansD.style.display = "block";
});

techniciansT.addEventListener("mouseout", function () {
  noneD.style.display = "flex";
  loicD.style.display = "none";
  amauryD.style.display = "none";
  techniciansD.style.display = "none";
});
