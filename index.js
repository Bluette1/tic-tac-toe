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
        boardString = `
             |${board[0]}|${board[1]}|${board[2]}|
             |_|_|_|
             |${board[3]}|${board[4]}|${board[5]}|
             |_|_|_|
             |${board[6]}|${board[7]}|${board[8]}|
             |_|_|_| 
             `;

        return boardString;
    }



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
    let firstPlayer = null;
    let secondPlayer = null;

    const updateBoard = (posn) => {
        board.updateBoard(posn, checkPlayer());
    };

    const printBoard = () => {
        return board.printBoard();
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

    const playerInfo = () => `
    The players are
     ${ firstPlayer.name }(${ firstPlayer.mark }) and ${ secondPlayer.name }(${secondPlayer.mark})
    `;


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
    return {
        turnCounter,
        printBoard,
        playerInfo,
        set firstPlayer(player) {
            firstPlayer = Player(player.name, player.mark);
        },
        set secondPlayer(player) {
            secondPlayer = Player(player.name, player.mark);
        }
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

const startGame = () => {
    startGameBtn.addEventListener('click', () => {
        playerDetailsForm.classList.remove('hidden');
        startGameBtn.classList.add('hidden');
    });

    const game = Game();
    let playerOne = '';
    let playerTwo = '';
    submitPlayersBtn.addEventListener('click', () => {
        playerOne = firstPlayer.value;
        playerTwo = secondPlayer.value;
        game.firstPlayer = { name: playerOne, mark: 'X' };
        game.secondPlayer = { name: playerTwo, mark: 'O' };
        playerInfo.textContent = game.playerInfo();

        stringBoard = game.printBoard().split('\n');
        stringBoard.forEach((line) => {
            row = document.createElement('span');
            row.textContent = line;
            board.appendChild(row);
        });

        playerDetailsForm.classList.add('hidden');
        changeSymbolsForm.classList.remove('hidden');

        // if (!isNoErrors()) {
        //     const myBook = new Book(title, pages, author, readStatus);
        //     addBookToLibrary(myBook);
        //     newBookForm.reset();
        //     displayBooks();
        // }
    });

    submitMarksBtn.addEventListener('click', () => {
        const changeMarks = document.querySelector('input[name=change-symbols]:checked').value;
        if (changeMarks) {
            game.firstPlayer = { name: playerOne, mark: 'O' };
            game.secondPlayer = { name: playerTwo, mark: 'X' };

            playerInfo.textContent = game.playerInfo();
            changeSymbolsForm.replaceWith(playerInfo);
        }
    });
}

startGame();
// console.log('Welcome to Tic Tac Toe!');
// // loop do# rubocop: todo Metrics / BlockLength
// let gameOn = true;
// while (gameOn) {
//     console.log("Would you like to play a game of tic tac toe? Please enter ' [y] es ' or ' [n] o '");
// }
// puts "Would you like to play a game of tic tac toe? Please enter '[y]es' or '[n]o'"
// play_game = gets.chomp[0].downcase
// let playGame =
// while % w[y n].include ? (play_game) == false
// puts "Please enter '[y]es' or '[n]o'"
// play_game = gets.chomp.downcase
// end
// if play_game[0] == 'y'
// puts 'We are going to start the game shortly after asking you a few more questions'
// game = Game.new
// puts 'What is the name of first player'
// first_player = gets.chomp.capitalize
// puts 'What is the name of second player'
// second_player = gets.chomp.capitalize
// game.players(first_player, second_player)
// puts game.print_board
// puts game.player_info
// puts 'Do you want to change the symbols of players. If yes, push [y]'
// chosen = gets.chomp.downcase
// game.change_symbol(first_player, second_player) if chosen[0] == 'y'
// puts game.player_info
// loop do
//     game.check_player
// puts "It is #{game.check_player.keys[0]}'s turn"
// loop do
//     puts game.print_board
// puts 'Choose the number to play'
// chosen = gets.chomp.to_i
// break unless game.verify_update(chosen).is_a ? String

// puts game.verify_update(chosen)
// end
// winner = game.check_win
// if winner and game.turn_counter >= 4
// puts "There is a WINNER: #{game.check_player.keys[0]}"
// break
// end
// game.turn_increase
// next unless game.turn_counter == 9

// puts 'DRAW'
// break
// end
// elsif play_game[0] == 'n'
// puts 'Hope to see you again. Bye.'
// break
// end
// end