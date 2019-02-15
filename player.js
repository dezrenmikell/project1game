$(document).ready(function(){

    //make number randomizer
   var selector= Math.floor((Math.random() * 4) + 1);
   //make switch statement to access divs
   switch(selector){
       case 1:
       document.querySelector('.pika').play();
       $( ".pikachu" ).toggle( "scale" );
       $( ".pikachu" ).toggle( "scale" );
       break;

       case 2:
       document.querySelector('.charr').play();
       $( ".charmander" ).toggle( "scale" );
       $( ".charmander" ).toggle( "scale" );
       break;

       case 3:
       document.querySelector('.squirt').play();
       $( ".squirtle" ).toggle( "scale" );
       $( ".squirtle" ).toggle( "scale" );
       break;

       case 4:
       document.querySelector('.bulba').play();
       $( ".bulbs" ).toggle( "scale" );
       $( ".bulbs" ).toggle( "scale" );
       break;
   }

    $( ".pikachu" ).click(function() {
        document.querySelector('.pika').play();
        $( ".pikachu" ).toggle( "scale" );
        $( ".pikachu" ).toggle( "scale" );
        
    });
      $( ".bulbs" ).click(function() {
        document.querySelector('.bulba').play();
        $( ".bulbs" ).toggle( "scale" );
        $( ".bulbs" ).toggle( "scale" );
      });
      $( ".charmander" ).click(function() {
        document.querySelector('.charr').play();
        $( ".charmander" ).toggle( "scale" );
        $( ".charmander" ).toggle( "scale" );
      });
      $( '.squirtle' ).click(function() {
        document.querySelector('.squirt').play();
        $( ".squirtle" ).toggle( "scale" );
        $( ".squirtle" ).toggle( "scale" );
      });
});