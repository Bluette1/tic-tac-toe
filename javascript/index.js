import Board from './gameBoard.js';

const introHeader = document.querySelector('#intro-header');
// const introSection = document.querySelector('#intro-section');
const optionsDiv = document.querySelector('#options-div');
const namesForm = document.querySelector('#names-form');
const gameBoardSection = document.querySelector('#gamebord-section');
const startGameBtn = document.querySelector('#start-game-btn');
const playBtn = document.querySelector('#play-btn');
const playerOneField = document.querySelector('#player-one-name');
const playerTwoField = document.querySelector('#player-two-name');

const triggers = () => {
  const startNewGame = () => {
    startGameBtn.addEventListener('click', () => {
      namesForm.classList.remove('hidden-element');
    });
  };

  const getPlayersNames = () => {
    const players = [];
    if (playerOneField.value && playerTwoField.value) {
      players.push(playerOneField.value);
      players.push(playerTwoField.value);
    } else {
      introHeader.innerHTML = 'Please Enter you names both!';
    }
    return players;
  };
  const play = () => {
    playBtn.addEventListener('click', () => {
      if (getPlayersNames().length !== 0) {
        optionsDiv.classList.add('hidden-element');
        introHeader.classList.add('hidden-element');
        gameBoardSection.classList.remove('hidden-element');
        Board(getPlayersNames(), introHeader).displayBoard();
      }
    });
  };
  return { startNewGame, play };
};

triggers().startNewGame();
triggers().play();
