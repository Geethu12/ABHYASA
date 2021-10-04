class Game {
  constructor(){}
  
  
 async start(){
    if(gameState === 0){
      user = new User();
      var userCountRef = await database.ref('userCount').once("value");
      if(userCountRef.exists()){
        userCount = userCountRef.val();
        user.getCount();
       
      }
      User.getuserInfo();
     
      form = new Form()
      form.display();
      
    }
  }
  play(){
    
    //image(bg1,0,0,displayWidth,displayHeight)
    image(kidsimg,300,100,240,225)
    image(adultsimg,630,100,260,220)
    image(eldersimg,1000,100,260,227)
   
   
    slogan=createSprite(700,600,50,50);
    slogan.addImage(sloganImg);
    slogan.scale=0.3;
   
     b1 = createButton('START');
     b1.position(360,350);
     b1.size(100,50);
     b1.mousePressed(()=>{
          
    removeElements();
    gameState=2;
     })
     b2 = createButton('START');
     b2.position(710,350);
     b2.size(100,50);
     b2.mousePressed(()=>{
          
      removeElements();
      gameState=2;
       })
     b3 = createButton('START');
     b3.position(1080,350);
     b3.size(100,50);
     b3.mousePressed(()=>{
          
      removeElements();
      gameState=2;
       })
    
  }
  email(){
  
    user.getuserInfo();

  }
    kidsyoga(){
    var title = createElement('h2')
    title.html("1. SUKHASANA (EASY SITTING POSE)");
    title.position(displayWidth-1300, 100);
    var title2 = createElement('h2')
    title2.html("2. BALASANA (CHILD’S POSE)");
    title2.position(displayWidth-1300, 200);
    var title3 = createElement('h2')
    title3.html("3. ARDHA PADMASANA (HALF-LOTUS POSE)");
    title3.position(displayWidth-1300, 300);
    var title4 = createElement('h2')
    title4.html("4. BHUJANGASANA (COBRA POSE)");
    title4.position(displayWidth-1300, 400);
    var title5 = createElement('h2')
    title5.html("5. PASCHIMOTTANASANA (SEATED FORWARD FOLD)");
    title5.position(displayWidth-1300, 500);
    var title5 = createElement('h2')
    title5.html("6. VRKSASANA (TREE POSE)");
    title5.position(displayWidth-1300, 600);
    
    
    var title1 = createElement('h1')
    title1.html("KIDS YOGA");
    title1.position(displayWidth-750, 10);
   
    var button1=createButton("START");
    button1.position(displayWidth-650,125);
    button1.mousePressed(()=>{
       
   removeElements();
    gameState=3;
    })
    var button2=createButton("START");
    button2.position(displayWidth-650,225);
    button2.mousePressed(()=>{
       
   removeElements();
    gameState=4;
    })
    var button3=createButton("START");
    button3.position(displayWidth-650,325);
    button3.mousePressed(()=>{
       
   removeElements();
    gameState=5;
    })
    var button4=createButton("START");
    button4.position(displayWidth-650,425);
    button4.mousePressed(()=>{
       
   removeElements();
    gameState=6;
    })
    var button5=createButton("START");
    button5.position(displayWidth-650,525);
    button5.mousePressed(()=>{
       
   removeElements();
    gameState=7;
    })
    var button6=createButton("START");
    button6.position(displayWidth-650,625);
    button6.mousePressed(()=>{
       
   removeElements();
    gameState=8;
    })
    }
  
}