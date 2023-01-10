var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1_img, car2_img, track;
var allPlayers, car1, car2;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
