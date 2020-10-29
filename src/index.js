import './assets/styles/index.css';
import Board from './layouts/gameBoard';

const introHeader = document.querySelector('#intro-header');
const optionsDiv = document.querySelector('#options-div');
const namesForm = document.querySelector('#names-form');
const gameBoardSection = document.querySelector('#gamebord-section');
const startGameBtn = document.querySelector('#start-game-btn');
const playBtn = document.querySelector('#play-btn');
const playerOneField = document.querySelector('#player-one-name');
const playerTwoField = document.querySelector('#player-two-name');
const newRoundBtn = document.querySelector('#new-round-btn');
const gameBoardContainer = document.querySelector('#gamebord-container');

const triggers = () => {
  const startNewGame = () => {
    startGameBtn.addEventListener('click', () => {
      namesForm.classList.remove('hidden-element');
      gameBoardSection.classList.add('hidden-element');
      namesForm.reset();
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
        namesForm.classList.add('hidden-element');
        introHeader.classList.add('hidden-element');
        gameBoardSection.classList.remove('hidden-element');
        gameBoardContainer.setAttribute('disabled', false);
        Board(getPlayersNames(), introHeader, optionsDiv, newRoundBtn).displayBoard();
      }
    });
  };
  const playNewRound = () => {
    newRoundBtn.addEventListener('click', () => {
      if (getPlayersNames().length !== 0) {
        optionsDiv.classList.add('hidden-element');
        namesForm.classList.add('hidden-element');
        introHeader.classList.add('hidden-element');
        gameBoardSection.classList.remove('hidden-element');
        gameBoardContainer.setAttribute('disabled', false);
        Board(getPlayersNames(), introHeader, optionsDiv, newRoundBtn).displayBoard();
      }
    });
  };
  return { startNewGame, play, playNewRound };
};

triggers().startNewGame();
triggers().play();
triggers().playNewRound();