let randomNumbers;
let wins;
let losses;
let scorebox;
let soccerPlayers;


$(document).ready(function(){
let randomNumbers = Math.floor(Math.random() * 101) + 19;
$("#randomNumber").html("" + randomNumbers);
 Start();
});

// for(let i = 0; i < parseInt(soccerPlayers.length); i++){
//     scorebox = parseInt(soccerPlayers[i]);
// }

$(document).ready(function(){
  
let scorebox = Math.floor(Math.random() * 12) + 1;

$(".image1").click(function(){
    $("#scorebox").html("" + scorebox);
});
$(".image2").click(function(){
    $("#scorebox").html("" + scorebox);
});
$(".image3").click(function(){
    $("#scorebox").html("" + scorebox);
});
$(".image4").click(function(){
    $("#scorebox").html("" + scorebox);
});

});

// // result part 
// if(randomNumbers === scorebox){
//     alert("You won!");
//     wins++;
//     $(".wins").html(wins);
//     $(".scorebox").html(0);
//     reset();
// }
// else(scorebox > randomNumbers){
//     alert("You lost!");
//     losses++;
//     $(".losses").html(losses);
//     $(".scorebox").html(0);
//     reset();
// }


