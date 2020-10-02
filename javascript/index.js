import StartGame from './user-interface.js';

const playBtn = document.querySelector('#play-btn');
const startGameBtn = document.querySelector('#start-game-btn');

playBtn.addEventListener('click', () => {
  StartGame.initializeGame();
});
startGameBtn.addEventListener('click', () => {
  StartGame.startNewGame();
});


// create  player factory
const Player = (playerName = 'John', playerMark = 'X') => {
  const name = playerName;
  const mark = playerMark;
  return { name, mark };
};

// create board factory
const Board = () => {
  const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];


  const printBoard = () => {
    board_string = ` | $ { board[0] } | $ { board[1] } | $ { board[2] } |
                    |
                    ___ | ___ | ___ |
                    |
                    $ { board[3] } | $ { board[4] } | $ { board[5] } |
                    |
                    ___ | ___ | ___ |
                    |
                    $ { board[6] } | $ { board[7] } | $ { board[8] } |
                    |
                    |
                    |
                    | `;
  };

  const checkValid = (posn) => {
    if (typeof posn === 'number') {
      return true;
    }
    return false;
  };

  const updateBoard = (posn, symbol) => {
    board[posn - 1] = symbol;
  };

  const checkRows = (grid) => {
    grid.forEach((row) => {
      if (row[0] === row[1] && row[1] === row[2]) {
        return row[0];
      }
    });
  };

  const checkColumns = (grid) => {
    transposedGrid = [
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],
    ];
    return checkRows(diagonals);
  };

  const checkDiagonals = () => {
    diagonals = [
      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];
    return checkRows(diagonals);
  };

  const checkWin = () => {
    grid = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],
    ];

    // check the rows
    if (checkRows(grid)) {
      return checkRows(grid);
    }
    // check the columns
    if (checkColumns(grid)) {
      return checkColumns(grid);
    }
    // check the diagonals
    if (checkDiagonals(grid)) {
      return checkDiagonals(grid);
    }
  };

  return {
    printBoard,
    checkWin,
    checkValid,
    updateBoard,
  };
};

// create  game factory
const Game = () => {
  const board = Board();
  let turnCounter = 0;
  const firstPlayer = null;
  const secondPlayer = null;


  const players = (firstPlayer, secondPlayer) => {
    firstPlayer = Player(firstPlayer, 'X');
    secondPlayer = Player(secondPlayer, 'o');
  };

  const changeSymbol = (firstPlayer, secondPlayer) => {
    firstPlayer = Player(firstPlayer, '0');
    secondPlayer = Player(secondPlayer, 'X');
  };

  const updateBoard = (posn) => {
    board.updateBoard(posn, checkPlayer());
  };

  const printBoard = () => {
    board.printBoard;
  };

  const checkValid = (posn) => {
    board.checkValid(posn);
  };
  const checkPlayer = () => {
    if (turnCounter % 2 === 0) {
      player = firstPlayer.name;
    } else {
      player = secondPlayer.name;
    }
    return player;
  };

  const checkWin = () => {
    if (board.checkWin) {
      return true;
    }
    return false;
  };

  const turnIncrease = () => {
    turnCounter += 1;
  };

  const playerInfo = () => `The players are ${first_player.name}(${first_player.mark}) and ${second_player.name}
        "(${second_player.mark})`;


  const verifyUpdate = (posn) => {
    if (![0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(posn)) {
      return 'Please select another number between 1 and 9';
    }
    if (!check_valid(posn)) {
      return 'Chosen number is used before';
    }
    updateBoard(posn);

    return true;
  };


  return { turnCounter };
};