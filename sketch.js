const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,bodies;
var paperball,paper1;
var ground1;
var dustbin1,dustbin2,dustbin3;


function setup() {
  var canvas = createCanvas(400,400);
 
engine = Engine.create();
world = engine.world; 
bodies = Bodies.rectangle(200,100,50,50);
paper1 = new Paper(80,200,20);
ground1 = new Ground(200,390,400,20);
dustbin1 = new Dustbin(300,370,80,20);
dustbin2 = new Dustbin(350,350,20,60);
dustbin3 = new Dustbin(250,350,20,60);
}

function draw() {
  background(0); 
  Engine.update(engine);
rectMode(CENTER);
paper1.display();
ground1.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();

keypressed();
}
 function keypressed(){
   if(keyCode===UP_ARROW){
     Matter.Body.applyForce(paperball.Body.paperball.Body.position,{x:85,y:85})
   }
 }