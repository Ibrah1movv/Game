var all_letters  = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  var wins = 0;
  var losses = 0;
  var guessesLeft = 9;
  var letters = [];
  var answer =
  all_letters[Math.floor(Math.random() * all_letters.length)];
  function restartGame(){
      guessesLeft=9;
      letters=[];
     answer = all_letters[Math.floor(Math.random() * all_letters.length)];
     document.getElementById('left').innerText = 'Guesses Left:' + guessesLeft;
     document.getElementById('letters').innerText= 'Your Guesses so far:' + letters.join(',');

  }
  function game(){
      if(guessesLeft>0){
        var user_input = prompt('Enter your guess').toLowerCase();
        console.log(answer);
        console.log(user_input);
        letters.push(user_input);
        console.log(letters);   
        guessesLeft--;
        document.getElementById('left').innerText='Guesses Left:' + guessesLeft;
        document.getElementById('letters').innerText= 'Your Guesses so far:' + letters.join(',');
        if(user_input===answer){
            wins++;
            document.getElementById('win').innerText = "WINS: " + wins;
            restartGame();
            alert("congratulations");
        }
      }
      else{
          alert('Game over');
          losses++;
          document.getElementById('lose').innerText='Loses: ' + losses;
          restartGame();
      }
  }
 