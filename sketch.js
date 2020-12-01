
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree;
var boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var stone;
var sling;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,700,1200,20);

	tree = new Tree(700,400,450,540);

	boy = new Boy(200,620,200,250);

	mango1 = new Mango(600,320,50,50);
	mango2 = new Mango(690,290,50,50);
	mango3 = new Mango(720,250,50,50);
	mango4 = new Mango(780,280,50,50);
	mango5 = new Mango(830,270,50,50);
	mango6 = new Mango(850,340,50,50);
	mango7 = new Mango(800,340,50,50);
	mango8 = new Mango(700,360,50,50);
	mango9 = new Mango(760,200,50,50);
	stone = new Stone(145,540,50,50);
	

	
	
	sling = new Slingshot(stone.body,{x:145,y:560});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);

  ground.display();
  tree.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display()
  

  stone.display();
  sling.display();



  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  


  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling.fly();

}

function detectCollision(object1,object2){
	var distance = dist(object1.body.position.x,object1.body.position.y,object2.body.position.x,object2.body.position.y);
	if(distance <= object2.r + object1.r){
		Matter.Body.setStatic(object2.body,false);
	}
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(stone.body);
  }
}


