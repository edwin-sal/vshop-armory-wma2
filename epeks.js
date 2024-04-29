const baril1 = document.getElementById("baril1");
const baril2 = document.getElementById("baril2");
const baril3 = document.getElementById("baril3");
const mainBG = document.getElementById("main-bg");

// FOR BARIL 1
baril1.addEventListener("mouseover", function () {
  console.log("BARIL 1 - IN")
  mainBG.style.backgroundImage = "url('./images/products/m16-1.png')";
  baril1.style.opacity = "0.5";
  baril2.style.opacity = "0.5";
  baril3.style.opacity = "0.5";
});

baril1.addEventListener("mouseout", function () {
  console.log("BARIL 1 - OUT");
  mainBG.style.backgroundImage = "url('./images/products/m16-bg.png')";
  baril1.style.opacity = "100";
  baril2.style.opacity = "100";
  baril3.style.opacity = "100";
});

// FOR BARIL 2
baril2.addEventListener("mouseover", function () {
  console.log("BARIL 2 - IN")
  mainBG.style.backgroundImage = "url('./images/products/m16-2.png')";
  baril1.style.opacity = "0.5";
  baril2.style.opacity = "0.5";
  baril3.style.opacity = "0.5";
});

baril2.addEventListener("mouseout", function () {
  console.log("BARIL 2 - OUT");
  mainBG.style.backgroundImage = "url('./images/products/m16-bg.png')";
  baril1.style.opacity = "100";
  baril2.style.opacity = "100";
  baril3.style.opacity = "100";
});

// FOR BARIL 3
baril3.addEventListener("mouseover", function () {
  console.log("BARIL 3 - IN")
  mainBG.style.backgroundImage = "url('./images/products/m16-3.png')";
  baril1.style.opacity = "0.5";
  baril2.style.opacity = "0.5";
  baril3.style.opacity = "0.5";
});

baril3.addEventListener("mouseout", function () {
  console.log("BARIL 3 - OUT");
  mainBG.style.backgroundImage = "url('./images/products/m16-bg.png')";
  baril1.style.opacity = "100";
  baril2.style.opacity = "100";
  baril3.style.opacity = "100";
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}