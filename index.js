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
        return `| $ { board[0] } | $ { board[1] } | $ { board[2] } |
                | ___ | ___ | ___ |
                |
                $ { board[3] } | $ { board[4] } | $ { board[5] } |
                | ___ | ___ | ___ |
                |
                $ { board[6] } | $ { board[7] } | $ { board[8] } |
                |     |     |     | `;
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
    let firstPlayer = null;
    let secondPlayer = null;


    const players = (firstPlayer, secondPlayer) => {
        firstPlayer = Player(firstPlayer, 'X');
        secondPlayer = Player(secondPlayer, 'O');
    };

    const changeSymbol = (firstPlayer, secondPlayer) => {
        firstPlayer = Player(firstPlayer, 'O');
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

console.log('Welcome to Tic Tac Toe!');
// loop do# rubocop: todo Metrics / BlockLength
let gameOn = true;
while (gameOn) {
    console.log("Would you like to play a game of tic tac toe? Please enter ' [y] es ' or ' [n] o '");
}
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