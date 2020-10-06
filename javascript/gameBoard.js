// import StartGame from './user-interface.js';
import Player from './player.js';
import GameFlow from './gameFlow.js';

const Board = (players, fieldOfWinner) => {
  const allPlayers = Player('X', 'O').getAllPlayers(players);
  const playersBoardArr = GameFlow.boardReset();
  const copyOfBoard = (passedBoardArr) => passedBoardArr.map(arr => arr.slice());
  let currBoard = copyOfBoard(playersBoardArr);


  const produceDiagonals = boardArr => {
    const ordinaryArr = GameFlow.convertBoardArrToOrdinarryArr(boardArr);
    const forwardDiagonal = [ordinaryArr[0], ordinaryArr[4], ordinaryArr[8]];
    const antDiagonal = [ordinaryArr[2], ordinaryArr[4], ordinaryArr[6]];
    return [forwardDiagonal, antDiagonal];
  };

  const produceVerticals = boardArr => {
    const ordinaryArr = GameFlow.convertBoardArrToOrdinarryArr(boardArr);
    const leftVertical = [ordinaryArr[0], ordinaryArr[3], ordinaryArr[6]];
    const middleVertical = [ordinaryArr[1], ordinaryArr[4], ordinaryArr[7]];
    const rightVertical = [ordinaryArr[2], ordinaryArr[5], ordinaryArr[8]];
    return [leftVertical, middleVertical, rightVertical];
  };

  const gameBoardContainer = document.querySelector('#gamebord-container');
  const displayBoard = (board = playersBoardArr) => {
    gameBoardContainer.innerHTML = '';
    for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < board[i].length; j += 1) {
        const boardCell = document.createElement('div');
        boardCell.setAttribute('class', 'board-cell');
        boardCell.setAttribute('class', 'centers-h-v');
        boardCell.dataset.i = i;
        boardCell.dataset.j = j;

        const boardCellContent = document.createElement('p');
        boardCellContent.innerText = board[i][j];

        boardCell.appendChild(boardCellContent);
        gameBoardContainer.appendChild(boardCell);
      }
    }
  };

  const displayWinnerOrDraw = (field, winner) => {
    field.classList.remove('hidden-element');
    if (winner) { field.innerHTML = `Wow, ${winner.name} has won the game!`; } else { field.innerHTML = 'This is a draw!'; }
  };

  const updateBoard = (clickEvent, currentPlayer) => {
    const { i, j } = clickEvent.target.dataset;
    for (let n = 0; n < playersBoardArr.length; n += 1) {
      for (let m = 0; m < playersBoardArr[n].length; m += 1) {
        if (i == n && j == m) {
          playersBoardArr[i][j] = currentPlayer.mark;
        }
      }
    }
    currBoard = copyOfBoard(playersBoardArr);
    Player().changeCurrentPlayer(allPlayers, currentPlayer);
    displayBoard(currBoard);
    const winRow = GameFlow.checkWin(currBoard);
    const winDiagonal = GameFlow.checkWin(produceDiagonals(currBoard));
    const winVertical = GameFlow.checkWin(produceVerticals(currBoard));
    if (winRow || winDiagonal || winVertical) {
      displayWinnerOrDraw(fieldOfWinner, currentPlayer);
      gameBoardContainer.setAttribute('disabled', 'disabled');
    } else if (GameFlow.checkDraw(currBoard)) {
      displayWinnerOrDraw(fieldOfWinner);
      gameBoardContainer.setAttribute('disabled', 'disabled');
    }
  };

  gameBoardContainer.addEventListener('mousedown', event => {
    updateBoard(event, allPlayers[0]);
  });
  return { displayBoard };
};


export default Board;
