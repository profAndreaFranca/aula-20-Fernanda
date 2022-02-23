const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var ball,ground;

function setup() {
    createCanvas(600,600);

    engine = Engine.create();
    world = engine.world;

    var ball_options={
        isStatic: false,
        restitution: 1.0,
        frictionAir:0.01,
        density:1
    }

    var ground_options={
        isStatic: true
    }

    //criando um corpo circular
    ball = Bodies.circle(300,100,50,ball_options)
    //adicionando o corpo ao mundo
    World.add(world,ball);

    //criando um corpo retangular
    ground = Bodies.rectangle(300,580,600,20,ground_options)
    World.add(world,ground);

  
}

function draw() {
  background(0)
  Engine.update(engine);

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50,50)

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,20)
}

