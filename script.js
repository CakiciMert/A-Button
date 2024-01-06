
window.onload = function() {
  ///// if it is first time loading

   if(!localStorage.getItem('totalScore')) {
     localStorage.setItem('totalScore', 0);
   }
   if(!localStorage.getItem('highScore')) {
     localStorage.setItem('highScore', 0);


   }
   /////
   /////getting data from storage///
   var totalScore =localStorage.getItem('totalScore');
   var highScore = localStorage.getItem('highScore');    
   document.getElementById('highScore').innerHTML = highScore;
   document.getElementById('totalScore').innerHTML = totalScore;
 };

 // Save the score to local storage when the page is closed.
 window.onbeforeunload = function () {
   localStorage.setItem('totalScore', document.getElementById('totalScore').innerHTML);
   localStorage.setItem('highScore', document.getElementById('highScore').innerHTML);
 };

const button = document.getElementById('button');

// Add an event listener to the button.
button.addEventListener('click', () => {
 // Get the current score.
 var score = parseInt(document.getElementById('score').innerHTML);
 var totalScore = parseInt(document.getElementById('totalScore').innerHTML);
 var highScore=parseInt(document.getElementById('highScore').innerHTML);
 if(Math.floor(Math.floor(Math.random()*100)> score))
 {
   score++;
   totalScore++;
 }
 else
 {
   if(score>highScore)
   {
       highScore=score;
       document.getElementById('highScore').innerHTML = highScore;
       localStorage.setItem('highScore', highScore);
   }
   
   score=0;
   alert('Sorry you lost the game');
 }
 



 // Update the score on the screen.
 document.getElementById('score').innerHTML = score;
 document.getElementById('totalScore').innerHTML = totalScore;

 // Check if the game is over.
 if (score === 100) {
   // End the game.
   alert('Game over!');
 }
});

const ReverseButton = document.getElementById('ReverseButton');
// Reverse///////////////////////////////////////////////////
ReverseButton.addEventListener('click', () => {
  var score = parseInt(document.getElementById('score').innerHTML);
  var totalScore = parseInt(document.getElementById('totalScore').innerHTML);
  
  if(Math.floor(Math.floor(Math.random()*100)< score))
  {
    
    totalScore+=100-score;
    document.getElementById('idiot').innerHTML=0;
   
    
    document.getElementById("score").innerHTML = 0;
    
    alert("you win idiot, you got "+(100-score)+" points")
  }
  else
  {

    document.getElementById('idiot').innerHTML++ ;
    totalScore-=5;
    
    score=0;
    
  }
  document.getElementById("totalScore").innerHTML = totalScore;
  localStorage.setItem('totalScore', totalScore);


});
////////////////////////////////////////////////////////////////
// Add an event listener to the slider.
document.addEventListener('DOMContentLoaded', function() {
 const slider = document.getElementById('slider');
 slider.value = 0;
 slider.addEventListener('input', () => {
   
   
   const playButton = document.getElementById('playButton');
   document.getElementById('playGameScore').innerHTML = -1 * slider.value;


   playButton.addEventListener('click', () => {
    let totalScore = document.getElementById('totalScore').innerHTML;
     // Check if the player has enough score to play the game.
   if(totalScore-slider.value>=0)
   {
     
     
     totalScore =totalScore- slider.value;
     
     slider.value=0;
     document.getElementById('playGameScore').innerHTML=0;
     
   }
   else
   {

     
     slider.value=0;
     document.getElementById("playButton").innerHTML = "Not Enough Score";
     
     setTimeout(function(){
       document.getElementById("playButton").innerHTML = "Play Game";
     }, 2000);
   }
   document.getElementById('totalScore').innerHTML = totalScore;
   
   localStorage.setItem('totalScore', totalScore);
   // Play the game.
   setTimeout(function() {
     
   }, 1000);
 });
   
   
 });
});

