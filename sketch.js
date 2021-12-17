var spaceShip,spaceShipImage;
var ISS, ISSImage;
var Alien, AlienImage;

var Mercury, MercuryImage;
var Venus, VenusImage;
var Earth, EarthImage;
var Mars, MarsImage;
var Jupiter, JupiterImage;
var Saturn, SaturnImage;
var Uranus, UranusImage;
var Neptune, NeptuneImage;

var gameState = 1;


function preload (){
    bgImage = loadImage("Images/BackgroundImage.gif");
    spaceShipImage = loadImage("Images/MainCharacter.png");
    ISSImage = loadImage("Images/DestinationImage.png");
    AlienImage = loadAnimation("Images/Enemy2Image.png", "Images/Enemy1Image.png");

    MercuryImage = loadImage("Images/MercuryImg.png");
    VenusImage = loadImage("Images/VenusImg.png");
    EarthImage = loadImage("Images/EarthImg.png");
    MarsImage = loadImage("Images/MarsImg.png");
    JupiterImage = loadImage("Images/JupiterImg.png");
    SaturnImage = loadImage("Images/SaturnImg.png");
    UranusImage = loadImage("Images/UranusImg.png");
    NeptuneImage = loadImage("Images/NeptuneImg.png");
}

function setup (){
    createCanvas (1000,600);
    spaceShip = createSprite(80,560,40,40);
    spaceShip.addImage("SpaceshipImage", spaceShipImage);
    spaceShip.scale = 0.1;

    ISS = createSprite(880,75,40,40);
    ISS.addImage("ISS", ISSImage);
    ISS.scale = 0.3;

    Alien = createSprite(350,150,40,40);
    Alien.addAnimation("Alien", AlienImage);
    Alien.scale = 0.15;


    Mercury = createSprite(320,540,40,40);
    Mercury.addImage("Mercury", MercuryImage);
    Mercury.scale = 0.07;

    Venus = createSprite(280,360,40,40);
    Venus.addImage("Venus", VenusImage);
    Venus.scale = 0.07;

    Earth = createSprite(260,130,40,40);
    Earth.addImage("Earth", EarthImage);
    Earth.scale = 0.04;
}


function draw (){
    background (bgImage);
    text(mouseX + "," + mouseY, mouseX, mouseY);
    
    if (gameState == 1){
        if (keyIsDown(RIGHT_ARROW)){
            spaceShip.x = spaceShip.x + 2;
        }

        if (keyIsDown(LEFT_ARROW)){
            spaceShip.x = spaceShip.x - 2;
        }

        if (keyIsDown(UP_ARROW)){
            spaceShip.y = spaceShip.y - 2;
        }

        if (keyIsDown(DOWN_ARROW)){
            spaceShip.y = spaceShip.y + 2;
        }
    }
    else if (gameState == 0){
        text("Game Over");
    }


    
    drawSprites();
}
