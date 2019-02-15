$(document).ready(function(){
    //generate random numbers (between 1&4)to select between different divs
    const pokeChoice = [$('.pikachu'), $('.charmander'), $('.squirtle'), $('.bulbs')];
    
    var selector = Math.floor((Math.random()*4)+1);
    console.log(selector);

    //create switch statements to pick sound and animation for the random location chosen
    switch(selector){
        //pikachu
        case 1:
            console.log('pika');
         break;
        //charmander
         case 2:
            console.log('char');
          break;
        //squirtle 
          case 3:
            console.log('squirt');
           break;
        //bulbasaur
          case 4:
            console.log('bulba');
            break;

    }
    //create event listeners for player moves
    $('.pikachu').on('click', function(){
        $('.pika').trigger('play');
    })
    $('.charmander').on('click', function(){
        $('.charr').trigger('play');
    })
    $('.squirtle').on('click', function(){
        $('.squirt').trigger('play');
    })
    $('.bulbs').on('click', function(){
        $('.bulba').trigger('play');
    })
});