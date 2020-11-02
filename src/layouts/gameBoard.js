import Player from '../components/player';
import GameFlow from '../components/gameFlow.js';
import { produceDiagonals, produceVerticals } from '../helpers/gameBoardHelper';


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

  const displayWinnerOrDraw = (field, winner, optionsDiv, newRoundBtn) => {
    field.classList.remove('hidden-element');
    newRoundBtn.classList.remove('hidden-element');
    optionsDiv.classList.remove('hidden-element');
    if (winner) { field.innerHTML = `Wow, ${winner.name} has won the game!`; } else { field.innerHTML = 'This is a draw!'; }
  };

  const displayCurrentPlayer = (field, currentPlayer, otherPlayer) => {
    field.classList.remove('hidden-element');
    field.innerHTML = `${currentPlayer.name} has made a move, ${otherPlayer.name}, it's your turn!`;
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

    const winRow = GameFlow.checkWin(currBoard);
    const winDiagonal = GameFlow.checkWin(produceDiagonals(
      currBoard, GameFlow.convertBoardArrToOrdinarryArr
    ));
    const winVertical = GameFlow.checkWin(produceVerticals(
      currBoard, GameFlow.convertBoardArrToOrdinarryArr
    ));
    const draw = GameFlow.checkDraw(currBoard);
    if (isPlayed) {
      displayCurrentPlayer(fieldOfWinner, currentPlayer, otherPlayer);
    }

    if (winRow || winDiagonal || winVertical) {
      displayWinnerOrDraw(fieldOfWinner, currentPlayer, optionsDiv, newRoundBtn);
      gameBoardContainer.setAttribute('disabled', 'disabled');
      playersBoardArr = GameFlow.boardReset();
    } else if (draw) {
      displayWinnerOrDraw(fieldOfWinner, undefined, optionsDiv, newRoundBtn);
      gameBoardContainer.setAttribute('disabled', 'disabled');
      playersBoardArr = GameFlow.boardReset();
    }
  };

  gameBoardContainer.addEventListener('mousedown', event => {
    updateBoard(event, allPlayers[0], allPlayers[1]);
  });
  return { displayBoard };
};

export default Board;