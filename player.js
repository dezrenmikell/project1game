$(document).ready(function(){
//initialize player arrays
    var comPlayer = [];
    var humPlayer = [];
    var pusher=0;
    
    //make number randomizer
   var selector = Math.floor((Math.random() * 4) + 1);
   //make switch statement to access divs
   if(selector==1){
       
      pikaChoose();
        comPlayer.push(selector);
    }
       else if(selector == 2){
       charChoose();
       comPlayer.push(selector);
        }

       else if( selector == 3){
       squirtChoose();
       comPlayer.push(selector);
        }

       else if( selector== 4){
       
        bulbChoose();
       comPlayer.push(selector);
        }
       
 

//create player actions
    $( ".pikachu" ).click(function() {
        pikaChoose();
        pusher =1;
        console.log(pusher);
        humPlayer.push(pusher);
        controller2=true;

        
    });
      
      $( ".charmander" ).click(function() {
        charChoose();
        pusher=2;
        humPlayer.push(pusher);
        console.log(pusher);
        controller2=true;
      });
      $( '.squirtle' ).click(function() {
        squirtChoose();
        pusher=3;
        humPlayer.push(pusher);
        console.log(pusher);
        controller2=true;
        });
      $( ".bulbs" ).click(function() {
        bulbChoose();
        pusher=4;
        humPlayer.push(pusher);
        console.log(pusher);
        controller2=true;
    });
    

      console.log(comPlayer);
      console.log('yo');
      console.log(humPlayer);
    
    
       controller1=false;
       console.log('game over');
   
   console.log(humPlayer);
});