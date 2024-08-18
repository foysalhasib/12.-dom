// ============     getElementById       ===================
document.getElementById("name").style.color = "green";
document.getElementById("name").style.fontSize = "60px";
document.getElementById("name").style.backgroundColor = "rgb(205, 92, 92)";
document.getElementById("name").style.textAlign = "center";

var today = document.getElementById("profession");

today.style.color = "salmon";
today.style.fontSize = "60px";
today.style.backgroundColor = "gray";
today.style.textAlign = "center";

//==================================================================
// ============     getElementsByClassName       ===================
//==================================================================
var life = document.getElementsByClassName("dreams")[0];

life.style.color = "blue";
life.style.fontSize = "60px";
life.style.backgroundColor = "gray";
life.style.textAlign = "center";

//==================================================================
// ============     getElementsByTagName       ===================
//==================================================================
document.getElementsByTagName("h5")[0].innerHTML = "I am American";

var love = document.getElementsByTagName("p")[0];

love.style.color = "white";
love.style.fontSize = "60px";
love.style.backgroundColor = "gray";
love.style.textAlign = "center";
