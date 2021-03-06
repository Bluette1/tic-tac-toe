import Player from '../components/player';
import GameFlow from '../components/gameFlow.js';
import {
  produceDiagonals,
  produceVerticals,
  displayCurrentPlayer,
  checkWin,
  checkDraw,
  checkWinOrDraw,
} from '../helpers/gameBoardHelper';

const Board = (players, fieldOfWinner, optionsDiv, newRoundBtn) => {
  const allPlayers = Player('X', 'O').getAllPlayers(players);
  const gameBoardContainer = document.querySelector('#gamebord-container');
  let playersBoardArr = GameFlow.boardReset();
  const copyOfBoard = (passedBoardArr) => passedBoardArr.map(arr => arr.slice());
  let currBoard = copyOfBoard(playersBoardArr);

  const displayBoard = (board = playersBoardArr) => {
    gameBoardContainer.innerHTML = '';
    for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < board[i].length; j += 1) {
        const boardCell = document.createElement('div');
        boardCell.setAttribute('class', 'board-cell');
        boardCell.setAttribute('class', 'centers-h-v');
        boardCell.dataset.i = i;
        boardCell.dataset.j = j;

        const boardCellContent = document.createElement('h1');
        boardCellContent.innerText = board[i][j];
        if (board[i][j] === 'X' || board[i][j] === 'O') {
          boardCell.setAttribute('disabled', 'disabled');
        }

        boardCell.appendChild(boardCellContent);
        gameBoardContainer.appendChild(boardCell);
      }
    }
  };

  const winOrDrawDisplay = (currBoard, isPlayed, currentPlayer, otherPlayer) => {
    const winRow = checkWin(currBoard, GameFlow.checkWin);
    const winDiagonal = checkWin(produceDiagonals(
      currBoard, GameFlow.convertBoardArrToOrdinarryArr,
    ), GameFlow.checkWin);
    const winVertical = checkWin(produceVerticals(
      currBoard, GameFlow.convertBoardArrToOrdinarryArr,
    ), GameFlow.checkWin);
    const draw = checkDraw(currBoard, GameFlow.checkDraw);

    if (isPlayed) {
      displayCurrentPlayer(fieldOfWinner, currentPlayer, otherPlayer);
    }
    const boardReset = checkWinOrDraw(
      winRow,
      winDiagonal,
      winVertical,
      draw,
      fieldOfWinner,
      currentPlayer,
      optionsDiv,
      newRoundBtn,
      gameBoardContainer,
    );

    if (boardReset) {
      playersBoardArr = GameFlow.boardReset();
    }
  };

  const updateBoard = (clickEvent, currentPlayer, otherPlayer) => {
    let isPlayed;
    const { i, j } = clickEvent.target.dataset;
    for (let n = 0; n < playersBoardArr.length; n += 1) {
      for (let m = 0; m < playersBoardArr[n].length; m += 1) {
        if (i == n && j == m) {
          if (playersBoardArr[i][j] === 'X' || playersBoardArr[i][j] === 'O') {
            isPlayed = false;
          } else {
            playersBoardArr[i][j] = currentPlayer.mark;
            isPlayed = true;
          }
        }
      }
    }
    currBoard = copyOfBoard(playersBoardArr);
    if (isPlayed) {
      Player().changeCurrentPlayer(allPlayers, currentPlayer);
    }

    displayBoard(currBoard);

    winOrDrawDisplay(currBoard, isPlayed, currentPlayer, otherPlayer);
  };

  gameBoardContainer.addEventListener('mousedown', event => {
    updateBoard(event, allPlayers[0], allPlayers[1]);
  });
  return { displayBoard };
};

export default Board;