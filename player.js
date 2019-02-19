  //initialize player arrays
  let comPlayer = [];
  let humPlayer = [];
  let sequence;
  let turn;
  let success;
  let compTurn;
  let intervalId;
  let pokeCry = true;
  let win;
  let bestScore = 0;

  const score = document.querySelector('.meScore');
  const pikaBoard = document.querySelector('.pikachu');
  const charBoard = document.querySelector('.charmander');
  const squirtBoard = document.querySelector('.squirtle');
  const bulbaBoard = document.querySelector('.bulbs');
  const highScore = document.querySelector('.uScore');
  const startButton = document.querySelector('.starter');

  startButton.addEventListener('click',(event) =>{
    score.innerHTML = 0;
    highScore.innerHTML = 0;
    clearInterval(intervalId);
    //pokeRelease();
    play();
  });

  function play(){
    win = false;
    comPlayer = [];
    humPlayer = [];
    sequence = 0;
    intervalId = 0;
    turn = 1;
    success = true;
    //make number randomizer
    for(var i=0; i<20; i++){
      comPlayer.push(Math.floor(Math.random() * 4 + 1));
    }
    compTurn=true;
    intervalId = setInterval(gameTurn, 800)
  }
  function gameTurn(){
    if (sequence == turn){
      clearInterval(intervalId);
      compTurn = false;
      //pokeRelease();
    }
    if (compTurn){
      //pokeRelease();
      setTimeout(()=>{
        if (comPlayer[sequence]==1) pikaChoose();
        if (comPlayer[sequence]==2) charChoose();
        if (comPlayer[sequence]==3) squirtChoose();
        if (comPlayer[sequence]==4) bulbChoose(); 
        sequence++;
      }, 200);
    }
  }

  function pikaChoose(){
    if(pokeCry){
      let audio = document.querySelector('.pikaa');
      audio.play();
    }
    pokeCry = true;
    $('.pikachu').toggle('scale');
    $('.pikachu').toggle('scale');  
  }

  function charChoose(){
    if(pokeCry){
      let audio = document.querySelector('.charr');
      audio.play();
    }
    pokeCry = true;
    $('.charmander').toggle('scale');
    $('.charmander').toggle('scale');
  }
  function squirtChoose(){
    if(pokeCry){
      let audio = document.querySelector('.squirtt');
      audio.play();
    }
    pokeCry = true;
    $('.squirtle').toggle('scale');
    $('.squirtle').toggle('scale');
  }
  function bulbChoose(){
    if(pokeCry){
      let audio = document.querySelector('.bulbaa');
      audio.play();
    }
    pokeCry = true;
    $('.bulbs').toggle('scale');
    $('.bulbs').toggle('scale');
  }

  
  
  //make switch statement to access divs
   //create player actions
  $(".pikachu").click(function() {
    humPlayer.push(1);
    check();
    pikaChoose();
    if(!win) {
      setTimeout(()=>{
        //pokeRelease();
      }, 300);
    }
  });

  $(".charmander").click(function() {
    humPlayer.push(2);
    check();
    charChoose();
    if(!win) {
      setTimeout(()=>{
        //pokeRelease();
      }, 300);
    }
  });

  $(".squirtle").click(function() {
    humPlayer.push(3);
    check();
    squirtChoose();
    if(!win) {
      setTimeout(()=>{
        //pokeRelease();
      }, 300);
    }
  });

  $(".bulbs").click(function() {
    humPlayer.push(4);
    check();
    bulbChoose();
    if(!win) {
      setTimeout(()=>{
        //pokeRelease();
      }, 300);
    }
  });

  function check(){
    if(humPlayer[humPlayer.length-1] !== comPlayer[humPlayer.length-1])
     success=false;

     if(humPlayer.length ==20 && success){
       winGame();
      }
     if(success==false){
       setTimeout(()=>{
        $('.gameScreen').toggle('scale');
        $('.gameScreen').toggle('scale');
        alert("you suck!");
        if(bestScore < (turn-1)){
          bestScore=(turn-1);
        }

        highScore.innerHTML = bestScore;
        score.innerHTML = 0;
          play();
       });  
      
      }
      if (turn == humPlayer.length && success && !win){
        turn++;
        humPlayer = [];
        compTurn = true;
        sequence = 0;
        score.innerHTML = turn-1;
        intervalId = setInterval(gameTurn,800);

      }
    }
    function winGame(){
      highScore.innerHTML = turn;
      bestScore=turn;
      win=true;
    }
