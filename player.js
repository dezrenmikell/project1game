$(document).ready(function() {
  //initialize player arrays
  var comPlayer = [];
  var humPlayer = [];
  var pusher = 0;

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
});
