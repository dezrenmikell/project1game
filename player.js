
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
    play();
  });

  function play(){
    win = false;
    comPlayer = [];
    humPlayer = [];
    sequence = 0;
    intervalId = 0;
    turn = 1;
  

  }


  //make number randomizer
  var selector = Math.floor(Math.random() * 4 + 1);
  //make switch statement to access divs
  switch (selector) {
    case 1:
      pikaChoose();
      comPlayer.push(selector);
      break;

    case 2:
      charChoose();
      comPlayer.push(selector);
      break;

    case 3:
      squirtChoose();
      comPlayer.push(selector);
      break;

    case 4:
      bulbChoose();
      comPlayer.push(selector);
      break;
  }

  //create player actions
  $(".pikachu").click(function() {
    pikaChoose();
    pusher = 1;
    console.log(pusher);
    humPlayer.push(pusher);
  });

  $(".charmander").click(function() {
    charChoose();
    pusher = 2;
    humPlayer.push(pusher);
    console.log(pusher);
  });

  $(".squirtle").click(function() {
    squirtChoose();
    pusher = 3;
    humPlayer.push(pusher);
    console.log(pusher);
  });

  $(".bulbs").click(function() {
    bulbChoose();
    pusher = 4;
    humPlayer.push(pusher);
    console.log(pusher);
  });

