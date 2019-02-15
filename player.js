$(document).ready(function(){
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