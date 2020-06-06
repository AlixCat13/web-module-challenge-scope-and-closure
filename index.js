// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter1 is outside the scope of the function while counter2 is outside of the scope of the function.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Counter1 uses the closure because it closes out the function.
 * 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * Counter 1 is preferable when you want to invoke the function using something outside of the scope. You would use counter2 when you want to reference something inside the scope of the function.
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(min, max){

    let score = Math.floor(Math.random() * (max - min));
    return score;

}

console.log(inning(0,3));
console.log(inning(0,3));
console.log(inning(0,3));
console.log(inning(0,3));
console.log(inning(0,3));
console.log(inning(0,3));
console.log(inning(0,3));
console.log(inning(0,3));
console.log(inning(0,3));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 



function finalScore(score, rounds){
  let max = 15;
  let min = 0;

  let game = {
    "Home": Math.floor(Math.random() * (max - min)),    
    "Away": Math.floor(Math.random() * (max - min))
      }    

  function inning(){

    for(let i=0; i < rounds; i++){

    game.Home += points;
    game.Away += points;

    }        
  }
  return game;
}
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each point in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(innings, rounds) {

  let max = 3;
  let min = 0;

  let FirstInning = {
    H: Math.floor(Math.random() * (max - min)),   
    A: Math.floor(Math.random() * (max - min))
      }
      
  let SecondInning = {
    H: Math.floor(Math.random() * (max - min)) + FirstInning.H,   
    A: Math.floor(Math.random() * (max - min)) + FirstInning.A
      }

  let ThirdInning = {
    H: Math.floor(Math.random() * (max - min)) + SecondInning.H,   
    A: Math.floor(Math.random() * (max - min)) + SecondInning.A
      }

  let FourthInning = {
    H: Math.floor(Math.random() * (max - min)) + ThirdInning.H,   
    A: Math.floor(Math.random() * (max - min)) + ThirdInning.A
      }

  let FifthInning = {
    H: Math.floor(Math.random() * (max - min)) + FourthInning.H,   
    A: Math.floor(Math.random() * (max - min)) + FourthInning.A
      }

  let SixthInning = {
    H: Math.floor(Math.random() * (max - min)) + FifthInning.H,   
    A: Math.floor(Math.random() * (max - min)) + FifthInning.A
      }

  let SeventhInning = {
    H: Math.floor(Math.random() * (max - min)) + SixthInning.H,   
    A: Math.floor(Math.random() * (max - min)) + SixthInning.A
      }

  let EighthInning = {
    H: Math.floor(Math.random() * (max - min)) + SeventhInning.H,   
    A: Math.floor(Math.random() * (max - min)) + SeventhInning.A
      }

  let NinthInning = {
    H: Math.floor(Math.random() * (max - min)) + EighthInning.H,   
    A: Math.floor(Math.random() * (max - min)) + EighthInning.A
      }

  let FinalScore = {
    H: NinthInning.H,   
    A: NinthInning.A
  }

  function inning(){

    for(let i=0; i < nine; i++){

      FirstInning += points,
      SecondInning += points,
      ThirdInning += points,
      FourthInning += points,
      FifthInning += points,
      SixthInning += points,
      SeventhInning += points,
      EighthInning += points,
      NinthInning += points;
      FinalScore += points;
    
    } 
  }
     console.log("1st Inning:",FirstInning.H, "-",FirstInning.A);
     console.log("2nd Inning:",SecondInning.H, "-",SecondInning.A);
     console.log("3rd Inning:",ThirdInning.H, "-",ThirdInning.A);
     console.log("4th Inning:",FourthInning.H, "-",FourthInning.A);
     console.log("5th Inning:",FifthInning.H, "-",FifthInning.A);
     console.log("6th Inning:",SixthInning.H, "-",SixthInning.A);
     console.log("7th Inning:",SeventhInning.H, "-",SeventhInning.A);
     console.log("8th Inning:",EighthInning.H, "-",EighthInning.A);
     console.log("9th Inning:",NinthInning.H, "-",NinthInning.A);
     console.log("Final Score:",FinalScore.H, "-", FinalScore.A);
}

console.log(scoreboard(inning, 9));



