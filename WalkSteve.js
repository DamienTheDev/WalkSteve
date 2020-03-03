// Sprite Creation
var steve = createSprite(30,295);
var grass = createSprite(200,380);
var cloud = createSprite(40,80);
var cloud2 = createSprite(120,200);
var cloud3 = createSprite(250,30);
var play = createSprite(200,145);
play.setAnimation("play");
play.scale=3;
var score = 0;
cloud.scale = 0.31;
cloud2.scale = 0.3;
cloud3.scale = 0.25;

cloud.visible = false;
cloud2.visible = false;
cloud3.visible = false;
grass.visible = false;
steve.visible = false;
background("skyblue");
play.visible = true;
drawSprites();

// TITLE AND VERSION
textSize(50);
fill("black");
textFont("cursive");
text("Walk Steve",80,70);
textSize(12);
text("Version 2.0!",320,375);

// PROMPTS WARNING
// None Currently

// Animations
grass.setAnimation("dirt");
steve.setAnimation("SteveStill");
cloud.setAnimation("cloud");
cloud2.setAnimation("cloud");
cloud3.setAnimation("cloud");

drawSprites();


// Animations
function draw() {
  textSize(12);
  textFont("arial");

// Menu
// Play
  if (mousePressedOver(play)) {

cloud.visible = true;
cloud2.visible = true;
cloud3.visible = true;
grass.visible = true;
steve.visible = true;
play.visible = false;

}

if (play.visible==false) {

if (steve.visible==true) {
  background("skyblue");
  drawSprites();
}
  
  // Cloud Movement
  if (cloud.x<600) {
    cloud.x = cloud.x+1;
  } else {
    cloud.x = cloud.x-600;
  }
  if (cloud2.x<600) {
    cloud2.x = cloud2.x+1;
  } else {
    cloud2.x = cloud2.x-600;
  }
  if (cloud3.x<600) {
    cloud3.x = cloud3.x+1;
  } else {
    cloud3.x = cloud3.x-600;
  }

  // Movement Right
  if (keyDown("d")) {
    steve.setAnimation("SteveWalkRight");
    if (keyDown("shift")) {
      steve.x = steve.x+2;
    } else {
    steve.x = steve.x+1;
    }
    if (steve.x<420) {
    drawSprites();
    if (play.visible==false) {
    }
  } else {
    steve.x = steve.x-420;
    if (score<=4) {
      score = score + 1;
    } else {
      if (score<=39) {
    var number = randomNumber(0,150);
    number;
    if (number==69) {
      background("red");
      cloud.visible = false;
      cloud2.visible = false;
      cloud3.visible = false;
      grass.visible = false;
      steve.visible = false;
      play.visible = false;
      drawSprites();
      textSize(50);
      text("YOU DIED",100,100);
      playSound("death.mp3",false);
    } else {
      score = score + 1;
    }
      } else {
        var number2 = randomNumber(1,10);
        number2;
        if (number2==4) {
          background("red");
          cloud.visible = false;
          cloud2.visible = false;
          cloud3.visible = false;
          grass.visible = false;
          steve.visible = false;
          play.visible = false;
          drawSprites();
          textSize(50);
          text("YOU DIED",100,100);
          playSound("death.mp3",false);
        } else {
          score = score + 2;
        } 
      }
    drawSprites();
  }
  }
  }
  
  // Movement Left
  if (keyDown("a")) {
    steve.setAnimation("SteveWalkLeft");
    if (keyDown("shift")) {
      steve.x = steve.x - 2;
    } else {
    steve.x = steve.x-1;
  }
    if (steve.x<-20) {
      steve.x = steve.x + 420;
    }
      drawSprites();
      if (score<=4) {
      } else { if (score<=39) {
      var number3 = randomNumber(0,150);
      number3;
      if (number3==69) {
        background("red");
        cloud.visible = false;
        cloud2.visible = false;
        cloud3.visible = false;
        grass.visible = false;
        steve.visible = false;
        play.visible = false;
        drawSprites();
        textSize(50);
        text("YOU DIED",100,100);
        playSound("death.mp3",false);
      } else {
      drawSprites();
    }
      } else {
        var number4 = randomNumber(1,10);
        number4;
        if (number4==4) {
          background("red");
          cloud.visible = false;
          cloud2.visible = false;
          cloud3.visible = false;
          grass.visible = false;
          steve.visible = false;
          play.visible = false;
          drawSprites();
          textSize(50);
          text("YOU DIED",100,100);
          playSound("death.mp3",false);
        }
      }
  }
  }
  
  // Movement Up / Jump
  if (keyWentDown("space")) {
    if (steve.y>290) {
    steve.setAnimation("SteveJump");
    steve.y = steve.y-12;
    if (steve.y>0) {
      steve.x = steve.x+6;
      drawSprites();
      steve.y = steve.y+6;
      drawSprites();
    } else {
      steve.y = steve.y+380;
      drawSprites();
    }
  }
  }
  
  // Movement Up / Jump (Alt Keybind)
  if (keyWentDown("w")) {
    if (steve.y>290) {
    steve.setAnimation("SteveJump");
    steve.y = steve.y-12;
    if (steve.y>0) {
      steve.x = steve.x+6;
      drawSprites();
      steve.y = steve.y+6;
      drawSprites();
    } else {
      steve.y = steve.y+380;
      drawSprites();
    }
  }
  }
  
  // Movement Down / Crouch
  if (keyWentDown("s")) {
      steve.setAnimation("SteveCrouch");
      steve.x = steve.x + 5;
    if (steve.x<400) {
      drawSprites();
    } else {
      steve.x = steve.x-400;
      drawSprites();
    }
  }
  
  // If Any Key Up Reset Animation
  if (keyWentUp("d")) {
    setTimeout(function delay() {
      steve.setAnimation("SteveStill");
    },400);
    drawSprites();
  }
  if (keyWentUp("a")) {
    setTimeout(function delay() {
      steve.setAnimation("SteveStillLeft");
    },400);
    drawSprites();
  }
  if (keyWentUp("s")) {
    setTimeout(function delay() {
      steve.setAnimation("SteveStill");
    },400);
    drawSprites();
  }
  if (keyWentUp("w")) {
    setTimeout(function delay() {
      steve.y = steve.y+6;
      steve.setAnimation("SteveStill");
    },400);
    drawSprites();
  }
  if (keyWentUp("space")) {
    setTimeout(function delay() {
      steve.y = steve.y+6;
      steve.setAnimation("SteveStill");
    },400);
    drawSprites();
  }
  
  if (steve.y>295) {
    setTimeout(function delay() {
      steve.y = 295;
    },600);
  }
  
  // Variable Frames
  var frame = World.frameCount;
  frame;
  
  // FPS COUNT
  if (steve.visible==true) {
    fill("black");
    noStroke();
    var fps = round(World.frameRate);
    var fps2 = ceil(World.frameRate);
    var fps3 = floor(World.frameRate);
    text("FPS:",10,20);
    text(fps,40,20);
    text("[ ⬆:",55,20);
    text(fps2,75,20);
    text("⬇:",90,20);
    text(fps3,100,20);
    text("]",115,20);
    text("Frames Elapsed:",10,35);
    text(frame,105,35);
  }
  
  // Score
  if (steve.visible==true) {
    text("Score: "+score,10,55);
  }
  if (steve.visible==false) {
    text("Score: "+score,100,200);
  }
  
  /* Console FPS Count / Elapsed Frames
  Removed Due To Lag */
  
  if (steve.visible==true) {
  if (mouseIsOver(steve)) {
    text("I'm Steve",steve.x+15,steve.y-15);
  }
  }
 
// Levels
 if (score<=4) {
  grass.setAnimation("dirt");
  fill("black");
  text("Level 1",300,20);
}
  if (score==5) {
  grass.setAnimation("dirt2");
  fill("black");
  text("Level 2",300,20);
}
if (score==10) {
  grass.setAnimation("dirt3");
  fill("black");
  text("Level 3",300,20);
}
if (score==20) {
  grass.setAnimation("dirt4");
  fill("black");
  text("Level 4",300,20);
}
if (score==40) {
  grass.setAnimation("dirt5");
  fill("red");
  text("LEVEL 5",300,20);
}
 
}
}

/* Change Log
    Version 1.0 Release
    Added Ability To Move Steve
    
    Version 1.2
    Added Smoother Animations
    Added Clouds
    Basic Bug Fixes
    Issues In This Version:
      Jump Animation Resetting To Quickly
  
    Version 1.2
    Added On-Screen FPS Counter
    Added On-Screen Frames Elapsed Counter
    Added Console Frames Elapsed Counter
    
    Version 1.2.1
    Added Console FPS Counter
    
    Version 1.2.1.1
    Removed Console FPS and Frames Elapsed Counter Due To Lag
    
    Version 1.2.1.2
    Added Option Asking If You Would Like FPS Counter
    
    Version 1.2.1.3
    Added A Changelog (This LOL)
    
    Version 1.3
    Bug Fixes:
      Jump Animation No Longer Resets To Quickly
    Issues Found In This Version
      When Spam Jumping You Will Float
      
    Version 1.4
    Bug Fixes:
      When Spam Jumping You Will No Longer Float
    Issues Found In This Version:
      When Spam Jumping You Will Sink
      
    Version 1.5
      Bug Fixes:
        When Spam Jumping You Will No Longer Sink
      Issues Found In This Version:
        When Resetting Steve Jump Position Steve Shakes
        Sometimes Jump Does Not Work (Only When Spamming)
          WORK AROUND --> Wait Until Jump Position Resets Before Jumping Again
          
    Version 1.6
      Removed Feature Asking If You Would Like FPS Shown Because of Bug (Only Temporarily)
      Added a prompt to warn about current bugs
    Issues Found In This Version
      No Matter What You Chose When Asked If FPS Is Shown (Removed Feature Temporarily)
      Jump Doesn't Work After You Have Spammed Jump (Cause of a Prior Bug)
    
    Version 1.7
    Changed Required Y Position For Jump
      Bug Fixes:
        Jump No Longer Stops Working After Spamming Jump
      Issues In This Version:
        Only Prior Bugs
    
    Version 1.8
    Re-Enabled FPS On Screen Prompt
    Now Shows All Prompt Responses In Console
      Bug Fixes:
    When Chosing If FPS Is Shown You Will Now Get The Proper Response
    
    Version 1.8.2
    Changed Cloud Animations
    
    Version 1.9
    Added Music
    Issues Found In This Version:
      Alt Keybind For Jump Animation Resetting Too Quickly
    
    Version 1.9.2
    Bug Fixes:
      Alt Keybind For Jump Animation No Longer Resets Too Quickly
      
    Version 1.9.2.1
      Added Score For When You Move Forward
      
    Version 1.9.3
      Added Functionality For Mouse Hovering Over Steve (Test It Yourself)
      Changed The Version Numbers To Be More Detailed
      
    Version 1.10
      ADDED MENU!!!
    Future Menu: FPS Toggle Instead Of Prompt.
      Bug: Steve Can Move On Play Screen
    
    Version 1.11
      Removed Audio
      Changed Location Of Game Code Under The Play Button's If Statement
        Bug: Would Only Move If Mouse Was Currently Being Clicked
        
    Version 1.11.1
      Reverted Location Of Code Due To Bug
        Bug: Score Increases On Play Screen
        
    Version 1.11.2
      Bug Fixes
        Score No Longer Increases On Play Screen
        Steve Can No Longer Move While On Menu
        
    Version 1.12
      Added Deaths, Everytime You Go Off Screen You Have A 1/100 Chance To Die
      Changed Scoring To Give 1 point Every Time You Go Off Screen (right)
      
    Version 1.12.1
      Added Score To Death Screen
      When Moving Left You Have A 1/150 Chance To Die Instead Of 1/100 (unlike right still being 1/100)
      Bug: Score shows tinily under main score after death
      
    Version 1.12.1.1
      Added Spriting (Use Shift To Sprint)
      
    Version 1.12.1.2
      FPS Is Now Rounded To The Nearest Whole Number
      
    Version 1.12.1.3
      Added Rounded Numbers For FPS (Rounded Up and Rounded Down) For More In-Depth FPS
      Changed Change Log To Have Even More In Depth Numbers [RELEASE.VERSION.SMALL.ONEADDED]
      
    Version 1.12.1.4
      Added Death Sound Effect
      
    Version 2.0!!
      Added Levels
        5 Levels
          1: No Possibility In Death +1 Score Going Right
          2: 1/150 Chance of Death (Left) and 1/100 Chance of Death (Right) +1 Score Going Right
          3: 1/150 Chance of Death (Left) and 1/100 Chance of Death (Right) +1 Score Going Right
          4: 1/150 Chance of Death (Left) and 1/100 Chance of Death (Right) +1 Score Going Right
          5: 1/10 Chance of Death (Left and Right) +2 Score Going Right
            NOTE: Later Levels May Be More Buggy Due To It Being Difficult To Getting There
      Added Version Counter and Title On Screen
      Various Bug Fixes!
      -Removed James Charles  
    
*/

/* Notes
    Jumping Is Only Available To Move Right
    Crouching Is Only Available To Go Right
*/

/* Credits
  Created By GoldenSpyro (Damien)
  DEVELOPED By
    Damien Davis-Neff / GoldenSpyro
  IDEAS
    GoldenSpyro
  CLOUDS
    Clouds By Clipart-Library.com
    Cloud Animations By GoldenSpyro
  STEVE
    Steve By GoldenSpyro
    Steve Animations By GoldenSpyro
  GRASS
    Grass Inspired By Minecraft (Mojang / Microsoft)
    Grass Created By GoldenSpyro
  SOUND
    Original Death Sound From Minecraft (Mojang / Microsoft)
*/

// Game Not Rated
// This Game Is A Simple Platformer
