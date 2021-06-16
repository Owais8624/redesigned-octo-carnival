const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var snow1Img, snow2Img, snow3Img, snow4Img, snow5Img;

var bg = "sprites/snow1.png"; 
function preload() {
  getBackgroundImg();
}




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}