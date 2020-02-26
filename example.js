function dblClick() {
  console.log("You clicked on the header!");
}
function poopPants() {
  console.log("PARAGRAPH PARAGRAPH PARAGRAPH");
}
function mouseyPousey() {
  console.log("GET AWAY FROM ME!");
}
function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  cursor = "Alexander Hamilton is " + x + " years old and " + y + " feet tall";
  document.getElementById("focusArea").innerHTML = cursor
  // console.log("cursor")
  // var messageDiv = document.querySelector("div.target-me");
  // console.log("message div");
  // messageDiv.innerHTML = "OWIE!";
}
function flukeyPukey() {
  var poopSpan = document.querySelector(".poop");
  poopSpan.innerHTML = "fork throwers!!";
}
function ozonePogo() {
  var poopSpan = document.querySelector(".poop");
  poopSpan.innerHTML = "FLAME EATERS!!"
}
function changeImage() {
  var scareButton = document.querySelector(".scare-button")
  scareButton.innerHTML = " ";
  let change = document.querySelectorAll('img').forEach(function(item) {
    item.src = "https://media.giphy.com/media/l3V0G6RGynhmcetpK/giphy.gif";
  })
}
function changeImageBack() {
  var scareButton = document.querySelector(".scare-button")
  scareButton.innerHTML = "SCARE ME";
  let change = document.querySelectorAll('img').forEach(function(item) {
    item.src = "";
  })
}

function spookyThings(){
  var spookies = [
  {name: "spiders", reason: "creepy and crawly"},
  {name: "proximity mines", reason: "they go boom boom"},
  {name: "sitting too close at a baseball game", reason: "foul balls look like they hurt"}
  ];

  var spookyList = "";

  spookies.forEach(function(spook) {
    spookyList += `<li>${spook.name} - ${spook.reason} </li>`
  });

  var spookiesElement = document.querySelector(".spookies");
  spookiesElement.innerHTML = spookyList;
}