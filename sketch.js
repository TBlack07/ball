
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var left,right
var ball
var ball_options

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,685,800,15)
	left = new Ground(500,600,15,150)
	right = new Ground(650,600,15,150)
	ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	}
	ball = Bodies.circle(50,630,30)
	World.add(world,ball)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show()
  left.show()
  right.show()
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0.1})
	}

}


