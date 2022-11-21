//Please see in full screen
let rubik;
let words; 
let nostalgiaArray;
let textSizing;
let randomSizing;
let jellyfishTint = 3;
let flowersALL = [];
let cubes = 100;
let square = 60;
function preload() {
  rubik = loadFont("Rubik.ttf")
  jellyfish = loadImage("jellyfish.png")
  motherboard = loadImage("motherboard.png")
  powerpuff = loadImage("powerpuff.png")
  scooby = loadImage("scooby.png")
  vogueMask = loadImage("vogueMask.jpeg")
  vogue = loadImage("vogue.jpeg")
  mag = loadImage("mag.png")
  char = loadImage("characters.jpeg")
  flower = loadImage("flower.png")
  back = loadImage("background.png")
  tv = loadImage("tv.png")
  raven = loadImage("raven.gif")
  pauseButton = loadImage("pauseButton.png")
  gravityFalls = loadImage("gravityFalls.gif")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  vogue.loadPixels();
  vogueMask.loadPixels();
  motherboard.loadPixels();
  jellyfish.loadPixels();
  scooby.loadPixels();
  mag.loadPixels();
  char.loadPixels();
  flower.loadPixels();
  back.loadPixels();
  raven.loadPixels();
  pauseButton.loadPixels();
  tv.loadPixels();
  gravityFalls.loadPixels();
  textFont(rubik);
  background(255);
  image(vogue, windowWidth/4, 0)
  vogueMask.mask(motherboard)
  vogueMask.filter(GRAY)
  image(vogueMask, windowWidth/4, 0)
  for (let i = 0; i < 40; i++) {
    flowersALL.push(new (flowersObj))
  }
}

function motherboardFunc(){
  motherboard.resize(400,400)
  var loc = [random(0,motherboard.width),random(0,motherboard.height)]
	noStroke()
  colour = motherboard.get(loc[0],loc[1])
  fill(colour)
  for (let i = 0; i < 150; i = i+1){
     circle(loc[0],loc[1],random(1,random(1,20)))
  }
}
class flowersObj{
  constructor(x,y,xSpeed,ySpeed) {
    this.x = random(0, width)
    this.y = random(0, height)
    this.xSpeed = random(-3, 3)
    this.ySpeed = random(-3, 3)
  }
  create() {
    image(flower, this.x, this.y)
    flower.resize(70,70)
  }
  move() {
    if (this.x < 10 || this.x > 287)
      this.xSpeed *= -1
    if (this.y < 10 || this.y > 287)
      this.ySpeed *= -1
    this.x += this.xSpeed
    this.y += this.ySpeed
  }
}

function draw(){
  console.log(frameCount)
  if (frameCount < 2000){
    push()
      translate(windowWidth/3, windowHeight/4)
      motherboardFunc()
    pop()
      push()
        imageMode(CENTER);
        angleMode(DEGREES);
        translate(windowWidth/2.1, windowHeight/2.8)
        scale(0.2)
        rotate(50);
        image(scooby, 0,0)
      pop()
      push()
        scale(0.25)
        image(powerpuff, windowWidth/.5, windowHeight/.55)
      pop()
      push()
      translate(windowWidth/1.9, windowHeight/30)
      for(var i=0; i < jellyfishTint; i++){
        tint(163, 147, 245);
        image(jellyfish,i*40,140,jellyfish.width/2,jellyfish.height/2);
      }
      pop()
      fill("#34457d")
      textSize(100);
      text("Nostalgia", windowWidth/3.9, windowHeight/1.05)
      randomSizing = random(1,7)
      stroke(255)
      fill("#7d93db")
      nostalgiaArray = rubik.textToPoints("Nostalgia", windowWidth/3.9, windowHeight/1.05, 100)
      for (let i=0; i < nostalgiaArray.length; i++){
        ellipse(nostalgiaArray[i].x, nostalgiaArray[i].y, randomSizing, randomSizing)
      }
  }
  if (frameCount > 2000 && frameCount < 2550){
    background(255)
    image(back,0,0)
    translate(windowWidth/11, windowHeight/7)
    if (frameCount > 2015 && frameCount < 2250){
      squaremap = map(mouseX, 0, char.height, 40, 0);
      for (x = 0; x < width; x += cubes) {
        for (y = 0; y < height; y += cubes) {
          square = char.get(x, y, cubes, cubes)
          image(square, x + random(-squaremap, +squaremap), y + random(-squaremap, +squaremap))
        }
      }
    }
    if(frameCount > 2251 && frameCount < 2350){
      gravityFalls.resize(1181, 604)
      image(gravityFalls, 0, 0)
    }
    if(frameCount > 2351 && frameCount < 2450){
      raven.resize(1181, 604)
      image(raven, 0, 0)
    }
    push()
    translate(-100, -100)
    image(tv, 0,0)
    pop()
    for (let i = 0; i < 40; i++) {
      flowersALL[i].create()
      flowersALL[i].move()
    }
  }
}
 function mousePressed() {
    gravityFalls.pause();
    raven.pause();
  }
  function mouseReleased() {
    gravityFalls.play();
    raven.play();
  }
