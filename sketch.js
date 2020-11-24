
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree1, ground1, boy1, rock1, sling1
var mano1, mano2, mano3, mano4, mano5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree1=new Tree(600,355,300,600)

	ground1=new Ground(400,670,800,30)

	boy1=new Boy(100,555,100,200)

	rock1=new Rock(100,400,20)

	sling1=new Sling(rock1.body,80,500)

	mano1=new Mango(500,100,20)
	mano2=new Mango(530,300,30)
	mano3=new Mango(450,250,10)
	mano4=new Mango(500,200,40)
	mano5=new Mango(600,270,50)
	Engine.run(engine);
  
}


function draw() {
  background(255);
  
  tree1.display()
  ground1.display()
  boy1.display()
  rock1.display()
  sling1.display()
 
  mano1.display()
  mano2.display()
  mano3.display()
  mano4.display()
  mano5.display()

  detectCollision(rock1,mano1)
  detectCollision(rock1,mano2)
  detectCollision(rock1,mano3)
  detectCollision(rock1,mano4)
  detectCollision(rock1,mano5)
  drawSprites()
}

function mouseDragged(){
	Matter.Body.setPosition(rock1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   sling1.fly()
}

function detectCollision(lrock,lmano){
	manoBodyPosition=lmano.body.position
	rockBodyPosition=lrock.body.position
	var distance=dist(rockBodyPosition.x,rockBodyPosition.y,manoBodyPosition.x,manoBodyPosition.y)
		if(distance<=lmano.radius+lrock.radius){
            Matter.Body.setStatic(lmano.body,false)
		}
	
}