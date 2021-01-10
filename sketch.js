var  database;
var allPlayers;
var gameState=0;

var playerCount=0;

var form,player,game;

function setup(){
  createCanvas(500,500);
  database = firebase.database();
  console.log(database);
  game = new Game();
  game.getState();
 game.start();

 
}

function draw(){
  background("white");
  
  
}

