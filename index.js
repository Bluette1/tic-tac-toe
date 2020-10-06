// create  player factory
const Player = (playerName = 'John', playerMark = 'X') => {
    const name = playerName;
    const mark = playerMark;
    return { name, mark };
};

// create board factory
const Board = (array = [1, 2, 3, 4, 5, 6, 7, 8, 9]) => {
    let board = array;


    const printBoard = () => {
        boardString = `
             |            ${board[0]}            |            ${board[1]}            |            ${board[2]}             |
             |            _            |            _            |            _           |
             |            ${board[3]}            |            ${board[4]}            |            ${board[5]}            |
             |          _          |          _          |         _          |
             |            ${board[6]}            |            ${board[7]}            |            ${board[8]}            |
             `;

        return boardString;
    }

    const checkValid = (posn) => {
        if (typeof board[posn - 1] === 'number') {
            return true;
        }
        return false;
    };

    const updateBoard = (posn, symbol) => {
        board[posn - 1] = symbol;
    };

    const checkRows = (grid) => {
        let win = undefined;
        grid.forEach((row) => {
            if (row[0] === row[1] && row[1] === row[2]) {
                win = row[0];
            }
        });
        return win;
    };

    const checkColumns = () => {
        transposedGrid = [
            [board[0], board[3], board[6]],
            [board[1], board[4], board[7]],
            [board[2], board[5], board[8]],
        ];
        if (checkRows(transposedGrid)) {
            return checkRows(transposedGrid);
        }
    };

    const checkDiagonals = () => {
        diagonals = [
            [board[0], board[4], board[8]],
            [board[2], board[4], board[6]],
        ];
        if (checkRows(diagonals)) {
            return checkRows(diagonals);
        };
    };

    const checkWin = () => {
        grid = [
            [board[0], board[1], board[2]],
            [board[3], board[4], board[5]],
            [board[6], board[7], board[8]]
        ];

        // check the rows
        if (checkRows(grid)) {
            return checkRows(grid);
        }
        // check the columns
        if (checkColumns()) {
            return checkColumns();
        }
        // check the diagonals
        if (checkDiagonals()) {
            return checkDiagonals();
        }
    };

    return {
        printBoard,
        checkWin,
        checkValid,
        updateBoard,
        set board(array) {
            board = array;
        }
    };
};

// create  game factory
const Game = () => {
    let board = Board([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    let turnCounter = 0;
    let firstPlayer = null;
    let secondPlayer = null;

    const updateBoard = (posn) => {
        board.updateBoard(posn, checkPlayer().symbol);
    };

    const printBoard = () => {
        return board.printBoard();
    };

    const checkValid = (posn) => {
        return board.checkValid(posn);
    };
    const checkPlayer = () => {
        if (turnCounter % 2 === 0) {
            name = firstPlayer.name;
            symbol = firstPlayer.mark;
        } else {
            name = secondPlayer.name;
            symbol = secondPlayer.mark;
        }
        return {
            name,
            symbol
        };
    };

    const checkWin = () => {
        if (board.checkWin()) {
            return true;
        }
        return false;
    };

    const playerInfo = () => `
    The players are
     ${firstPlayer.name}(${firstPlayer.mark}) and ${secondPlayer.name}(${secondPlayer.mark})
    `;

    const verifyUpdate = (posn) => {
        posn = parseInt(posn);
        if (![1, 2, 3, 4, 5, 6, 7, 8, 9].includes(posn)) {
            return 'Please select another number between 1 and 9';
        }
        if (!checkValid(posn)) {
            return 'The chosen position is already taken.';
        }
        updateBoard(posn);

        return true;
    };
    return {
        get turnCounter() {
            return turnCounter;
        },
        set turnCounter(num) {
            turnCounter = num;
        },
        printBoard,
        playerInfo,
        set firstPlayer(player) {
            firstPlayer = Player(player.name, player.mark);
        },
        set secondPlayer(player) {
            secondPlayer = Player(player.name, player.mark);
        },

        set board(array) {
            board = Board(array);
        },
        checkPlayer,
        verifyUpdate,
        checkWin
    };
};

const startGameBtn = document.querySelector('#start-game-btn');
const playerDetailsForm = document.querySelector('#start-game-form');
const submitPlayersBtn = document.querySelector('#submit-player-details');
const firstPlayer = document.querySelector('#player-one-name');
const secondPlayer = document.querySelector('#player-two-name');
const changeSymbolsForm = document.querySelector('#change-player-mark');
const submitMarksBtn = document.querySelector('#submit-marks-btn');
const board = document.querySelector('#board');
const playerInfo = document.querySelector('#player-info');
const turnInfo = document.querySelector('#turn-info');
const choosePosnForm = document.querySelector('#choose-posn');
const choosePosnBtn = document.querySelector('#submit-position');
const chosenPosn = document.querySelector('#position');
const validationInfo = document.querySelector('#validation-info');
const winnerInfo = document.querySelector('#winner-info');
const playAgainBtn = document.querySelector('#play-again-btn');
const topSection = document.querySelector('#top-section');

const displayBoard = (game) => {
    board.textContent = '';
    stringBoard = game.printBoard().split('\n');
    stringBoard.forEach((line) => {
        row = document.createElement('span');
        row.textContent = line;
        board.appendChild(row);
    });
}

const play = (game) => {
    turnInfo.textContent = `${game.checkPlayer().name}(${game.checkPlayer().symbol}), it is your turn to play.
    Choose the number to play:`;

    choosePosnForm.classList.remove('hidden');

    displayBoard(game);
    choosePosnBtn.addEventListener('click', (evt) => {
        evt.stopImmediatePropagation();
        let position = chosenPosn.value;
        let verified = game.verifyUpdate(position);

        if (verified === true) {
            validationInfo.classList.add('hidden');
            if (game.turnCounter >= 4 && game.checkWin()) {
                winnerInfo.textContent = `There is a WINNER: ${game.checkPlayer().name}!!`;
                winnerInfo.classList.remove('hidden');
                playAgainBtn.classList.remove('hidden');
                choosePosnForm.classList.add('hidden');
                turnInfo.classList.add('hidden');
                game.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                game.turnCounter = 0;
                startGame();
            } else {

                game.turnCounter += 1;
                if (game.turnCounter === 9) {
                    winnerInfo.textContent = 'DRAW';
                    winnerInfo.classList.remove('hidden');
                    playAgainBtn.classList.remove('hidden');
                    choosePosnForm.classList.add('hidden');
                    turnInfo.classList.add('hidden');
                    game.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                    game.turnCounter = 0;
                    startGame();
                } else {
                    play(game);
                }
            }
        } else {
            validationInfo.textContent = verified;
            validationInfo.classList.remove('hidden');
        }
    });
}

const startGame = () => {
    startGameBtn.addEventListener('click', (evt) => {
        evt.stopImmediatePropagation();
        playerDetailsForm.classList.remove('hidden');
        startGameBtn.classList.add('hidden');
    });

    playAgainBtn.addEventListener('click', () => {
        playerDetailsForm.reset();
        playAgainBtn.classList.add('hidden');
        startGameBtn.classList.remove('hidden');
        board.textContent = '';
        playerInfo.textContent = '';
        turnInfo.textContent = '';
        turnInfo.classList.remove('hidden');
        winnerInfo.textContent = '';
        validationInfo.textContent = '';
        choosePosnForm.classList.add('hidden');
    });

    game = Game();
    let playerOne = '';
    let playerTwo = '';
    submitPlayersBtn.addEventListener('click', (evt) => {
        evt.stopImmediatePropagation();
        evt.preventDefault();
        playerOne = firstPlayer.value;
        playerTwo = secondPlayer.value;
        game.firstPlayer = { name: playerOne, mark: 'X' };
        game.secondPlayer = { name: playerTwo, mark: 'O' };
        playerInfo.textContent = game.playerInfo();

        playerDetailsForm.classList.add('hidden');
        changeSymbolsForm.reset();
        changeSymbolsForm.classList.remove('hidden');
        playerInfo.after(changeSymbolsForm);
    });

    submitMarksBtn.addEventListener('click', (evt) => {
        evt.stopImmediatePropagation();
        const changeMarks = document.querySelector('input[name=change-symbols]:checked').value;
        if (changeMarks != 'keep-symbols') {
            game.firstPlayer = { name: playerOne, mark: 'O' };
            game.secondPlayer = { name: playerTwo, mark: 'X' };
        }
        playerInfo.textContent = game.playerInfo();
        topSection.appendChild(playerInfo);
        changeSymbolsForm.classList.add('hidden')

        play(game);

    });
}

startGame();