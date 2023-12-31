
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

