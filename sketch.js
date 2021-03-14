const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine,world
var base
var box1,ball1
var box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15
var sling
function preload(){

}

function setup(){
    createCanvas(1000,600)
engine=Engine.create()
world=engine.world
base=new Ground(width/2,580,1000,10)
box1=new Box(500,500,50,50)
box2=new Box(500,450,50,50)
box3=new Box(500,400,50,50)
box4=new Box(500,350,50,50)
box5=new Box(500,300,50,50)
box6=new Box(500,250,50,50)
box7=new Box(500,200,50,50)
box8=new Box(500,150,50,50)
box9=new Box(600,500,50,50)
box10=new Box(600,450,50,50)
box11=new Box(600,400,50,50)
box12=new Box(600,350,50,50)
box13=new Box(600,300,50,50)
box14=new Box(600,250,50,50)
box15=new Box(600,200,50,50)
ball1=new Ball(300,50,50,50)
sling=new Rope(ball1.body,{x:250,y:40})

}


function draw(){
background(225)

Engine.update(engine)
base.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
ball1.display()
sling.display()
}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly()
}