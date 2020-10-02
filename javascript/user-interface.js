const startGameBtn = document.querySelector('#start-game-btn');
const namesForm = document.querySelector('#names-form');
const gameboardSection = document.querySelector('#gamebord-section');

const StartGame = () => {
  const startNewGame = (gameRounds = 0) => {
    startGameBtn.addEventListener('click', () => {
      if (gameRounds === 0) {
        namesForm.classList.remove('hidden-element');
      } else {
        displayGameboard();
      }
    });
  };

  const initializeGame = () => {
    const names = getPlayersNames();
    if (names.length > 0) {
      displayGameboard();
    } else {
      alert('Enter both names');
    }
  };

  const noErrors = (field) => (!!field.value);

  // function to expose publically
  const getPlayersNames = () => {
    const playerOneNameField = document.querySelector('#player-one-name');
    const playerTwoNameField = document.querySelector('#player-two-name');
    const names = [];
    if (noErrors(playerOneNameField) && noErrors(playerTwoNameField)) {
      names.push(playerOneNameField.value);
      names.push(playerOneNameField.value);
    }
    return names;
  };

  const displayGameboard = () => {
    document.querySelector('#intro-section').classList.add('hidden-element');
    gameboardSection.classList.remove('hidden-element');
  };

  return {
    getPlayersNames, displayGameboard, startNewGame, initializeGame,
  };
};

export default StartGame();
