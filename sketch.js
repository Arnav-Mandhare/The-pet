//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dog1,dog2;
function preload()
{
  dog = loadImage(250,250,50,50);
  
  foodStock = dataBase.ref('food')
  foodStock.on("value",readStock)
  
}

function setup() {
  createCanvas(500,500);
  
  dog = createSprite(250,250,50,50);
  image(dog,250,250,50,50)
  
}


function draw() {  

  background(46, 139, 87);

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog)
}

  drawSprites();
  //add styles here
  textSize(5);
  fill(black);
  stroke(4);
  text("Note:Press up arrow to feed drago milk",50,100)
}

function readStock(data){
foodS=data.val();
}

function writeStock('/'){

  if(x<0){
    x=0;
  }else{
    x=x+1
  }

  database.ref('/').update({
    food:x
  })
  
  

}
