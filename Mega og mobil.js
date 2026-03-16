(function () {

var clickUrl = "https://www.bygtek.dk";

/* FIND SKÆRMSTØRRELSE */

var screenWidth = window.innerWidth;

var bannerWidth;
var bannerHeight;

if(screenWidth < 700){

bannerWidth = 300;
bannerHeight = 250;

}else{

bannerWidth = 1920;
bannerHeight = 600;

}

/* OPRET BANNER */

var banner = document.createElement("div");

banner.style.width = bannerWidth + "px";
banner.style.height = bannerHeight + "px";
banner.style.maxWidth = "100%";
banner.style.position = "relative";
banner.style.margin = "0 auto";
banner.style.overflow = "hidden";
banner.style.cursor = "pointer";
banner.style.fontFamily = "Arial";

document.currentScript.parentNode.appendChild(banner);

banner.onclick = function(){
window.open(clickUrl,"_blank");
};

/* BAGGRUNDSBILLEDE */

var img = document.createElement("img");

img.src = "https://kim4690.github.io/universal/banner.jpg";

img.style.width = "100%";
img.style.height = "100%";
img.style.objectFit = "cover";
img.style.position = "absolute";

banner.appendChild(img);

/* OVERLAY */

var overlay = document.createElement("div");

overlay.style.position = "absolute";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background =
"linear-gradient(to right, rgba(255,255,255,0.6), rgba(255,255,255,0.85))";

overlay.style.opacity = "0";
overlay.style.transition = "opacity 3s ease";

banner.appendChild(overlay);

/* TEKSTCONTAINER */

var container = document.createElement("div");

container.style.position = "absolute";
container.style.left = "50%";
container.style.top = "50%";
container.style.transform = "translate(-50%, -50%) scale(0.2)";
container.style.textAlign = "center";
container.style.opacity = "0";
container.style.transition =
"transform 2.5s cubic-bezier(.22,.61,.36,1), opacity 1.2s ease";

banner.appendChild(container);

/* TEKSTSTØRRELSE */

var labelSize;
var wordSize;

if(screenWidth < 700){

labelSize = 16;
wordSize = 34;

}else{

labelSize = 36;
wordSize = 120;

}

/* FAGSEKTION */

var label = document.createElement("div");

label.innerText = "Fagsektion";
label.style.fontSize = labelSize + "px";
label.style.color = "#153F78";

/* ORD */

var word = document.createElement("div");

word.style.fontSize = wordSize + "px";
word.style.fontWeight = "bold";

container.appendChild(label);
container.appendChild(word);

/* SEKTIONER */

var sections = [
"Entreprenør",
"VVS",
"El & Belysning",
"Trapper",
"Døre & Vinduer",
"Facader",
"Gulve",
"Tage",
"Værktøj",
"Indeklima",
"Biler",
"Kloak & Afvanding",
"Isolering",
"Nedrivning",
"Træ",
"Arbejdstøj"
];

var index = 0;

/* BAGGRUND */

function blurBackground(){

img.style.filter = "brightness(2.3) blur(6px)";
overlay.style.opacity = "1";

}

function clearBackground(){

img.style.filter = "brightness(1) blur(0)";
overlay.style.opacity = "0";

}

/* ANIMATION */

function animateWord(){

if(index >= sections.length){
endCycle();
return;
}

word.innerText = sections[index];

container.style.opacity = "0";
container.style.transform =
"translate(-50%, -50%) scale(0.2)";
word.style.color = "#9bb3d3";

setTimeout(function(){

container.style.opacity = "1";

container.style.transform =
"translate(-50%, -50%) scale(1.5)";

word.style.color = "#153F78";

},400);

setTimeout(function(){

container.style.opacity = "0";

index++;

setTimeout(animateWord,1600);

},3200);

}

function endCycle(){

container.style.opacity = "0";

clearBackground();

setTimeout(function(){

index = 0;

blurBackground();

setTimeout(animateWord,3500);

},6000);

}

function start(){

setTimeout(function(){

blurBackground();

setTimeout(animateWord,3500);

},2500);

}

start();

})();