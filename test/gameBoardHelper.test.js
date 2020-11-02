import {
  produceDiagonals,
  produceVerticals,
  displayWinnerOrDraw,
  displayCurrentPlayer,
  checkWin,
  checkDraw,
  checkWinOrDraw,
} from '../src/helpers/gameBoardHelper';
import { bodyContent } from './helpers/content_test_helper';

const boardArr = [
  ['X', 'O', 'X'],
  ['O', 'O', 'O'],
  ['O', 'X', 'X'],
];
document.body.innerHTML = bodyContent;
const gameBoardContainer = document.querySelector('#gamebord-container');
const introHeader = document.querySelector('#intro-header');
const optionsDiv = document.querySelector('#options-div');
const newRoundBtn = document.querySelector('#new-round-btn');
const players = [{ name: 'Mary', mark: 'X' }, { name: 'Jane', mark: 'O' }];
optionsDiv.classList.add('hidden-element');
introHeader.classList.add('hidden-element');
gameBoardContainer.setAttribute('disabled', false);

test('produceDiagonals returns the expected result', () => {
  const mockConvertBoardArrToOrdinarryArr = jest.fn(() => ['X', 'O', 'X', 'O', 'O', 'O', 'O', 'X', 'X']);

  const actualResult = produceDiagonals(boardArr, mockConvertBoardArrToOrdinarryArr);
  const expectedResult = [
    ['X', 'O', 'X'],
    ['X', 'O', 'O'],
  ];
  expect(actualResult).toEqual(expectedResult);
  expect(mockConvertBoardArrToOrdinarryArr).toHaveBeenCalledWith(boardArr);
});

test('produceVerticals returns the expected result', () => {
  const mockConvertBoardArrToOrdinarryArr = jest.fn(() => ['X', 'O', 'X', 'O', 'O', 'O', 'O', 'X', 'X']);

  const actualResult = produceVerticals(boardArr, mockConvertBoardArrToOrdinarryArr);
  const expectedResult = [
    ['X', 'O', 'O'],
    ['O', 'O', 'X'],
    ['X', 'O', 'X'],
  ];
  expect(actualResult).toEqual(expectedResult);
  expect(mockConvertBoardArrToOrdinarryArr).toHaveBeenCalledWith(boardArr);
});

test('displayWinnerOrDraw displays the expected result when there\'s a winner ', () => {
  const winner = { name: 'Mary', mark: 'X' };
  displayWinnerOrDraw(introHeader, winner, optionsDiv, newRoundBtn);
  expect(introHeader.classList.contains('hidden-element')).toBe(false);
  expect(newRoundBtn.classList.contains('hidden-element')).toBe(false);
  expect(optionsDiv.classList.contains('hidden-element')).toBe(false);
  expect(introHeader.innerHTML).toBe(`Wow, ${winner.name} has won the game!`);
});

test('displayWinnerOrDraw displays the expected result when there\'s a draw ', () => {
  displayWinnerOrDraw(introHeader, undefined, optionsDiv, newRoundBtn);
  expect(introHeader.classList.contains('hidden-element')).toBe(false);
  expect(newRoundBtn.classList.contains('hidden-element')).toBe(false);
  expect(optionsDiv.classList.contains('hidden-element')).toBe(false);
  expect(introHeader.innerHTML).toBe('This is a draw!');
});

test('displayCurrentPlayer displays the current player', () => {
  displayCurrentPlayer(introHeader, players[0], players[1]);
  expect(introHeader.classList.contains('hidden-element')).toBe(false);
  expect(introHeader.innerHTML).toBe(`${players[0].name} has made a move, ${players[1].name}, it's your turn!`);
});

test('checkWin returns true if there is a winner', () => {
  const mockCheckWin = jest.fn(() => true);
  expect(checkWin(boardArr, mockCheckWin)).toBe(true);
  expect(mockCheckWin).toHaveBeenCalledWith(boardArr);
});

test('checkWin returns false if there is no winner', () => {
  const mockCheckWin = jest.fn(() => false);
  expect(checkWin(boardArr, mockCheckWin)).toBe(false);
  expect(mockCheckWin).toHaveBeenCalledWith(boardArr);
});

test('checkDraw returns true if there is a draw', () => {
  const mockCheckDraw = jest.fn(() => true);
  expect(checkDraw(boardArr, mockCheckDraw)).toBe(true);
  expect(mockCheckDraw).toHaveBeenCalledWith(boardArr);
});

test('checkDraw returns false if there is no draw', () => {
  const mockCheckDraw = jest.fn(() => false);
  expect(checkDraw(boardArr, mockCheckDraw)).toBe(false);
  expect(mockCheckDraw).toHaveBeenCalledWith(boardArr);
});

test('checkWinOrDraw returns true if there is a winner: row', () => {
  const actualResult = checkWinOrDraw(
    true,
    false,
    false,
    false,
    introHeader,
    players[0],
    optionsDiv,
    newRoundBtn,
    gameBoardContainer,
  );

  expect(actualResult).toBe(true);
  expect(gameBoardContainer.getAttribute('disabled')).toEqual('disabled');
});

test('checkWinOrDraw returns true if there is a winner: vertical', () => {
  gameBoardContainer.setAttribute('disabled', false);
  const actualResult = checkWinOrDraw(
    false,
    false,
    true,
    false,
    introHeader,
    players[0],
    optionsDiv,
    newRoundBtn,
    gameBoardContainer,
  );

  expect(actualResult).toBe(true);
  expect(gameBoardContainer.getAttribute('disabled')).toEqual('disabled');
});

test('checkWinOrDraw returns true if there is a winner: diagonal', () => {
  gameBoardContainer.setAttribute('disabled', false);
  const actualResult = checkWinOrDraw(
    false,
    true,
    false,
    false,
    introHeader,
    players[0],
    optionsDiv,
    newRoundBtn,
    gameBoardContainer,
  );

  expect(actualResult).toBe(true);
  expect(gameBoardContainer.getAttribute('disabled')).toEqual('disabled');
});

test('checkWinOrDraw returns true if there is a draw', () => {
  gameBoardContainer.setAttribute('disabled', false);
  const actualResult = checkWinOrDraw(
    false,
    false,
    false,
    true,
    introHeader,
    players[0],
    optionsDiv,
    newRoundBtn,
    gameBoardContainer,
  );

  expect(actualResult).toBe(true);
  expect(gameBoardContainer.getAttribute('disabled')).toEqual('disabled');
});

test('checkWinOrDraw returns false if there is no win or draw', () => {
  gameBoardContainer.setAttribute('disabled', false);
  const actualResult = checkWinOrDraw(
    false,
    false,
    false,
    false,
    introHeader,
    players[0],
    optionsDiv,
    newRoundBtn,
    gameBoardContainer,
  );

  expect(actualResult).toBe(false);
  expect(gameBoardContainer.getAttribute('disabled')).toEqual('false');
});