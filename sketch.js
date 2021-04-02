const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ball,ground

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world
  
  ball = Bodies.circle(200, 200, 20); 
  World.add(world,ball);
  
  ground = Bodies.rectangle(200, 390, 200, 20)
  World.add(world,ground);
}


function draw() {
  background(255,255,255);  
  ellipseMode (RADIUS);
  ellipse (ball.position.x, ball.position.y , 20 , 20);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,20);
}