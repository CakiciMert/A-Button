
const button = document.getElementById('button');

button.addEventListener('click', () => {
  // Get the current score.
  var score = parseInt(document.getElementById('score').innerHTML);


  if(Math.floor(Math.random()*(100-score)))
  {
    score++;
  }
  else
  {
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