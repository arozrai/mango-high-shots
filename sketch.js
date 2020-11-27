
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

	tree1=new Tree(400,355,500,600)

	ground1=new Ground(400,670,800,30)

	boy1=new Boy(100,555,100,200)

	rock1=new Rock(100,400,70)

	sling1=new Sling(rock1.body,{x:70,y:510})

	mano1=new Mango(350,150,30)
	mano2=new Mango(350,300,30)
	mano3=new Mango(300,250,60)
	mano4=new Mango(330,200,40)
	mano5=new Mango(400,270,50)
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
	manoBodyBodyPosition=lmano.body.position
	rockBodyPosition=lrock.body.position
	var distance=dist(rockBodyPosition.x,rockBodyPosition.y,manoBodyBodyPosition.x,manoBodyBodyPosition.y)
	if(distance<=lmano.radius+lrock.radius){
       Matter.Body.setStatic(lmano.body,false)
	}
}

function keyPressed(){
	if(keyCode===space){
		Mater.Body.setPosition(rock1.body,{x:100,y:400})
		sling1.attach(rock1.body)
	}
}