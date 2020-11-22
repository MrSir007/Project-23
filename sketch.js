var helicopterIMG, helicopter, package, packageIMG;
var packageBody, ground;
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
  helicopterIMG = loadImage("helicopter.png")
  packageIMG = loadImage("package.png")
}

function setup() {
  createCanvas(800,700);
  rectMode(CENTER);

  package = createSprite(width/2, 80, 10,10);
  package.addImage(packageIMG);
  package.scale = 0.2;

  helicopter = createSprite(width/2, 200, 10,10);
  helicopter.addImage(helicopterIMG);
  helicopter.scale = 0.6;

  ground = createSprite(width/2, height-35, width,10);
  ground.shapeColor = color(255);

  engine = Engine.create();
  world = engine.world;

  packageBody = Bodies.circle(width/2,200,5, {restitution: 0.9, isStatic:true});
  World.add(world,packageBody);
	
  ground = Bodies.rectangle(width/2,650, width,10, {isStatic:true});
  World.add(world,ground);

  box1 = createSprite(330,620,20,80, {isStatic: true});
  box1.shapeColor = "Red";
  World.add(world,box1);
  box2 = createSprite(400,650,120,20, {isStatic: true});
  box2.shapeColor = "Red";
  World.add(world,box2);
  box3 = createSprite(470,620,20,80, {isStatic: true});
  box3.shapeColor = "Red";
  World.add(world,box3);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  package.x = packageBody.position.x;
  package.y = packageBody.position.y;
  drawSprites();
}

function keyPressed() {
  if (keyCode == DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	  Matter.Body.setStatic(packageBody,false);
  } else if (keyCode == RIGHT_ARROW) {
    helicopter.x = helicopter.x + 20;
    translation = {x: 20, y: 0}
    Matter.Body.translate(packageBody,translation);
  } else if (keyCode == LEFT_ARROW) {
    helicopter.x = helicopter.x - 20;
    translation = {x: -20, y: 0}
    Matter.Body.translate(packageBody,translation);
  }
}