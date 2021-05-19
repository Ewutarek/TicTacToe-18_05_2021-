console.log('Hi there! Welcome to afroendly match of Tic-Tac-Toe\n');
console.log('===================================================');
console.log('===================================================\n\n');

const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let x_count;
let o_count;
let winner;

let player = 'X';

let tictactoe = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9'
];

let winCombos = [[1, 2, 3], [4, 5, 6],
                 [7, 8, 9], [1, 4, 7],
                 [2, 5, 8], [3, 6, 9],  
                 [1, 5, 9], [3, 5, 7]];

const printBoard = () => {

    let line = "";
    for (let i = 1; i < 10; i++) 
    {
        line += tictactoe[i - 1] + ' | ';

        if (i % 3 === 0) 
        {
            console.log(line);
            console.log('____________')
            line = "";
        }

    }
}


const theWinner = () => 
{
  o_Count =0;
  x_Count=0;
  winner = "";
  for(let i = 0; i< winCombos.length; i++)
  {
    for(let j = 0; j< winCombos[i].length; j++)
    {
        if(tictactoe[winCombos[i][j]-1] === "X")
        {
          x_count++;
          winner = "X";
        }

        if(x_count == 3)
        {
          return true;
        }

    }
  }
  return false;
}




printBoard();


const chosenMove = (move) => {
  if(isNan(move) && move > 0)
  {
    return move -1;
  } else 
    {
      console.log(`Sorry ${move} is not avalid input. Enter a number from 1-9`);
      playGame();
      return null;
    }
} 

const makeMove = (move) => {
 
  let chosenMove = move - 1;
  for(var i=0; i < tictactoe.length; i++)
  {
    if(chosenMove == i && ((tictactoe[i] !== 'X') || (tictactoe[i] !== 'O')))
    {
      tictactoe[chosenMove] = player;

      if (player === 'X') 
      {
        player = 'O';
      } else if (player === 'O') 
        {
          player = 'X'
        } else {playGame}
    }
  }
  
   
  console.log('\n\n')
  printBoard();

  let checkWinner = theWinner();

  if (checkWinner == true) 
  {
        console.log(`Winner is ${winner}`)
        process.exit();
  }

  playGame();
}

const playGame = () => {

  let inPlay = false;

    for (i = 0; i < tictactoe.length; i++) {
        if ((tictactoe[i] !== 'X') || (tictactoe[i] !== 'O')) 
        {
            inPlay = true;
        }
    }

    if (inPlay === true)
    {
       rl.question(`Play your turn Player ${player}:  `, (answer) => {
        makeMove(answer);
      });
    }

 
}

playGame();





