$(document).ready(function(){
//initialize player arrays
    var comPlayer = [];
    var humPlayer = [];
    var pusher=0;
    
    //start game logic  
    var controller1=true; 
    var controller2=true;
    //while loop to keep game playing    
       //while(controller1==true){
         //  while (controller2==true){

    //make number randomizer
   var selector = Math.floor((Math.random() * 4) + 1);
   //make switch statement to access divs
   if(selector==1){
       
       $( ".pikachu" ).toggle( "scale" );
       $( ".pikachu" ).toggle( "scale" );
        comPlayer.push(selector);
    }
       else if(selector == 2){
       
       $( ".charmander" ).toggle( "scale" );
       $( ".charmander" ).toggle( "scale" );
       comPlayer.push(selector);
        }

       else if( selector == 3){
       
       $( ".squirtle" ).toggle( "scale" );
       $( ".squirtle" ).toggle( "scale" );
       comPlayer.push(selector);
        }

       else if( selector== 4){
       
       $( ".bulbs" ).toggle( "scale" );
       $( ".bulbs" ).toggle( "scale" );
       comPlayer.push(selector);
        }
        controller2=false;
 if(comPlayer.length == (humPlayer.length +1)){

//create player actions
    $( ".pikachu" ).click(function() {
        document.querySelector('.pika').play();
        $( ".pikachu" ).toggle( "scale" );
        $( ".pikachu" ).toggle( "scale" );
        pusher =1;
        console.log(pusher);
        humPlayer.push(pusher);
        controller2=true;

        
    });
      
      $( ".charmander" ).click(function() {
        document.querySelector('.charr').play();
        $( ".charmander" ).toggle( "scale" );
        $( ".charmander" ).toggle( "scale" );
        pusher=2;
        humPlayer.push(pusher);
        console.log(pusher);
        controller2=true;
      });
      $( '.squirtle' ).click(function() {
        document.querySelector('.squirt').play();
        $( ".squirtle" ).toggle( "scale" );
        $( ".squirtle" ).toggle( "scale" );
        pusher=3;
        humPlayer.push(pusher);
        console.log(pusher);
        controller2=true;
        });
      $( ".bulbs" ).click(function() {
        document.querySelector('.bulba').play();
        $( ".bulbs" ).toggle( "scale" );
        $( ".bulbs" ).toggle( "scale" );
        pusher=4;
        humPlayer.push(pusher);
        console.log(pusher);
        controller2=true;
    });
    

      console.log(comPlayer);
      console.log('yo');
      console.log(humPlayer);
    }
    else{
       controller1=false;
       console.log('game over');
    }
    //}
//}
   console.log(humPlayer);
});