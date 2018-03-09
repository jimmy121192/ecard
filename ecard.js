var canMagicDust,dustCtx,windowX,windowY;
var dusts = new Array();

document.addEventListener('DOMContentLoaded',function(event){
    // get window size
    windowX = window.innerWidth;
    windowY = window.innerHeight;


    // parallax layers
    function doParallax(cursorX,cursorY){
        var pointX = (windowX/2) - cursorX;
        var pointY = (windowY/2) - cursorY;

        document.getElementById('layer-1').style.transform = 'translate3d('+(pointX/40)+'px, '+(pointY/40)+'px, 0px)';
        document.getElementById('layer-2').style.transform = 'translate3d('+(pointX/20)+'px, '+(pointY/30)+'px, 0px)';
    }


    // do parallax on mouse move
    window.addEventListener('mousemove',function(move){
        doParallax(move.pageX,move.pageY);

});
});



//snow effect;

var canvas = document.getElementById('snow'),
    ctx = canvas.getContext('2d'),
    width = ctx.canvas.width = document.body.offsetWidth,
    height = ctx.canvas.height = document.body.offsetHeight,
    animFrame = window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame,
    snowflakes = [];

window.onresize = function() {
  width = ctx.canvas.width = document.body.offsetWidth,
    height = ctx.canvas.height = document.body.offsetHeight;
}

function update() {
  for (var i = 0; i < snowflakes.length; i++) {
    snowflakes[i].update();
  }
}

function Snow() {
  this.x = random(0, width);
  this.y = random(-height, 0);
  this.radius = random(0.5, 3.0);
  this.speed = random(1, 3);
  this.wind = random(-0.5, 3.0);
}

Snow.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'lightpink';
  ctx.fill();
  ctx.closePath();
}

Snow.prototype.update = function() {
  this.y += this.speed;
  this.x += this.wind;

  if (this.y > ctx.canvas.height) {
    this.y = 0;
    this.x = random(0, width);
  }
}

function createSnow(count) {
  for (var i = 0; i < count; i++) {
    snowflakes[i] = new Snow();
  }
}

function draw() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  for (var i = 0; i < snowflakes.length; i++) {
    snowflakes[i].draw();
  }
}

function loop() {
  draw();
  update();
  animFrame(loop);
}

function random(min, max) {
  var rand = (min + Math.random() * (max - min)).toFixed(1);
  rand = Math.round(rand);
  return rand;
}

createSnow(150);
loop();


//jimmy muzik

$(document).ready(function() {
  var backgroundMusicURL =
    "./sound/serenadetospring.mp3";
  var backgroundMusic = new Audio(backgroundMusicURL);
  var musicState = "Not Playing";

  $("#jimmy").click(function() {
    if (musicState === "Not Playing") {
      backgroundMusic.play();
      musicState = "Playing";
      
    } else if (musicState === "Playing") {
      backgroundMusic.pause();
      musicState = "Not Playing";
    
    }
  });

  
  });


//facts

var text = document.getElementById("text");
var step = 0;

document.getElementById("next").addEventListener("click", function(){
if (step > 9) {
 
 step = 10;

 document.getElementById("facts").style.backgroundImage = "url(./img/fact"+step+".png)";
 document.getElementById("fact"+step).style.display = "block";
 

}
else{

text.style.top = "100px";

step = step + 1;

document.getElementById("facts").style.backgroundImage = "url(./img/fact"+step+".png)";
document.getElementById("fact"+step).style.display = "block";

}
});

document.getElementById("previous").addEventListener("click", function(){
if (step < 2) {
 step = 1;

 document.getElementById("facts").style.backgroundImage = "url(./img/fact"+step+".png)";
}
else {

text.style.top = "100px";
step = step - 1;
document.getElementById("facts").style.backgroundImage = "url(./img/fact"+step+".png)";
}

});



//day and night


  document.getElementById("night").addEventListener("click", function(){
  document.getElementById("layer-2").style.display = "none";
  document.getElementById("layer-1").style.display = "none";
  document.getElementById("snow").style.display = "none";
  document.getElementById("stars").style.display = "block";
  document.getElementById("twinkling").style.display = "block";
  document.getElementById("lanterns").style.display = "block";
  document.getElementById("cherry1").style.width = "20%";
  document.getElementById("cherry1").style.height = "25%";
  document.getElementById("cherry1").style.right = "-500px";
  document.getElementById("cherry2").style.width = "25%";
  document.getElementById("cherry2").style.left = "-500px";
  document.getElementById("cherry2").style.height = "22%";
  document.getElementById("facts").style.display = "none";
  document.getElementById("text").style.display = "none";
  document.getElementById("temple").style.display = "none";
  document.getElementById("jimmy").style.display = "none";
  document.getElementById("name").style.display = "block";
  document.getElementById("bus").style.display = "none";
  document.getElementById("animals").style.display = "none";
  document.getElementById("container").style.display = "none";
  document.getElementById("firework").style.display = "none";
  document.getElementById("gift").style.display = "none";
  document.getElementById("wish").style.display = "none";
    document.getElementById("redenvelope").style.display = "none";
    document.getElementById("usd").style.display = "none";
  document.getElementById("wish").style.display = "none";
  document.getElementById("music").innerHTML ="<audio autoplay style='display: none;'><source src='./sound/sky.mp3'></audio>";
});


  document.getElementById("day").addEventListener("click", function(){
  document.getElementById("layer-2").style.display = "block";
  document.getElementById("layer-1").style.display = "block";
  document.getElementById("snow").style.display = "block";
  document.getElementById("stars").style.display = "none";
  document.getElementById("twinkling").style.display = "none";
  document.getElementById("lanterns").style.display = "none";
  document.getElementById("cherry1").style.width = "25%";
  document.getElementById("cherry1").style.height = "32%";
  document.getElementById("cherry1").style.right = "-30px";
  document.getElementById("cherry2").style.width = "40%";
  document.getElementById("cherry2").style.left = "-20px";
  document.getElementById("cherry2").style.height = "35%";
  document.getElementById("facts").style.display = "block";
  document.getElementById("text").style.display = "block";
  document.getElementById("temple").style.display = "block";
  document.getElementById("jimmy").style.display = "block";
  document.getElementById("name").style.display = "none";
  document.getElementById("bus").style.display = "block";
  document.getElementById("bus").style.right = "-50px";
  document.getElementById("animals").style.display = "block";
  document.getElementById("container").style.display = "block";
  document.getElementById("firework").style.display = "block";
  document.getElementById("gift").style.display = "block";
  document.getElementById("wish").style.display = "none";
  document.getElementById("redenvelope").style.display = "block";
    document.getElementById("usd").style.display = "none";
  document.getElementById("music").innerHTML ="";

});


 //lantern's sound
 
function wisp1(){
  
  document.getElementById("sound").innerHTML ="<audio autoplay style='display: none;'><source src='./sound/wisp1.mp3'></audio>";
}

function wisp2(){
  
  document.getElementById("sound").innerHTML ="<audio autoplay style='display: none;'><source src='./sound/wisp2.mp3'></audio>";
}


//bus

document.getElementById("bus").addEventListener("click", function(){
document.getElementById("bus").style.right = "2000px";
document.getElementById("sound").innerHTML ="<audio autoplay style='display: none;'><source src='./sound/cowmoo.mp3'></audio>";
});
 var animals = document.getElementById("animals");
animals.addEventListener("click", function(){

animals.style.animation ="flying 20s infinite";
document.getElementById("sound").innerHTML ="<audio autoplay style='display: none;'><source src='./sound/airplane.mp3'></audio>";

});

document.getElementById("container").addEventListener("click", function(){

document.getElementById("sound").innerHTML ="<audio autoplay style='display: none;'><source src='./sound/doghowling.mp3'></audio>";
}); 

document.getElementById("firework").addEventListener("click", function(){

document.getElementById("sound").innerHTML ="<audio autoplay style='display: none;'><source src='./sound/fireworks.mp3'></audio>";
document.getElementById("firework").style.height ="0px";

});

document.getElementById("cherry1").addEventListener("mouseenter", function(){
document.getElementById("cherry1").style.width="30%";
document.getElementById("cherry1").style.height="37%";

});
document.getElementById("cherry1").addEventListener("mouseleave", function(){
document.getElementById("cherry1").style.width="25%";
document.getElementById("cherry1").style.height="32%";
});
document.getElementById("cherry2").addEventListener("mouseenter", function(){
document.getElementById("cherry2").style.width="45%";
document.getElementById("cherry2").style.height="40%";

});
document.getElementById("cherry2").addEventListener("mouseleave", function(){
document.getElementById("cherry2").style.width="40%";
document.getElementById("cherry2").style.height="35%";
});

document.getElementById("gift").addEventListener("mouseenter", function(){
document.getElementById("gift").style.width="80px";
document.getElementById("gift").style.height="80px";

});
document.getElementById("gift").addEventListener("mouseleave", function(){
document.getElementById("gift").style.width="60px";
document.getElementById("gift").style.height="60px";
});

function mygift(){
  var x = document.getElementById("wish");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function mymoney(){
  var y = document.getElementById("usd");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}