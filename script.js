
  window.onload = function() {
    // Get the score from local storage.
    var highscore = localStorage.getItem('highscore');
  
    // Update the score on the screen.
    document.getElementById('highscore').innerHTML = highscore;
  };

const button = document.getElementById('button');

// Add an event listener to the button.
button.addEventListener('click', () => {
  // Get the current score.
  var score = parseInt(document.getElementById('score').innerHTML);
    var highscore=localStorage.getItem('highscore');

  if(Math.floor(Math.random()*(100-score)))
  {
    score++;
  }
  else
  {
    if(score>highscore)
    {
        highscore=score;
        document.getElementById('highscore').innerHTML = highscore;
        localStorage.setItem('highscore', highscore)
    }
    
    score=0;
    alert('Sorry you lost the game');
  }
  

  // Update the score on the screen.
  document.getElementById('score').innerHTML = score;

  // Check if the game is over.
  if (score === 100) {
    // End the game.
    alert('Game over!');
  }
});

