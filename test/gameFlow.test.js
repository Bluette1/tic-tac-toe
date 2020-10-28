import GameFlow from '../src/gameFlow';

const twoDArray = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];
const currBoardScenarios = {
  'Horizontal win first row': [
    ['O', 'O', 'O'],
    ['X', 'X', 'O'],
    ['O', 'X', 'X'],
  ],
  'Horizontal win second row': [
    ['X', 'O', 'X'],
    ['O', 'O', 'O'],
    ['O', 'X', 'X'],
  ],
  'Horizontal win third row': [
    ['X', 'X', 'O'],
    ['O', 'X', 'X'],
    ['O', 'O', 'O'],
  ],
  'Horizontal win diagonals second diagonal': [
    ['O', 'X', 'X'],
    ['O', 'O', 'O'],
  ],
  'Horizontal win diagonals first diagonal': [
    ['X', 'X', 'X'],
    ['X', 'O', 'X'],
  ],
};

test('boardReset returns a new empty board array', () => {
  expect(GameFlow.boardReset()).toEqual(twoDArray);
});

test('convertBoardArrToOrdinarryArr turns a two-D into a one-D array ', () => {
  const outputOneDArray = ['', '', '', '', '', '', '', '', ''];
  expect(
    GameFlow.convertBoardArrToOrdinarryArr(twoDArray),
  ).toEqual(outputOneDArray);
});

test('checkDraw returns `true` when there is a draw ', () => {
  const currBoard = [
    ['X', 'O', 'X'],
    ['X', 'O', 'O'],
    ['O', 'X', 'O'],
  ];
  expect(GameFlow.checkDraw(currBoard)).toEqual(true);
});

test('checkDraw returns `false` when there is no draw ', () => {
  const currBoard = [
    ['X', '', ''],
    ['', '', ''],
    ['', '', 'O'],
  ];
  expect(GameFlow.checkDraw(currBoard)).toEqual(false);
});

Object.entries(currBoardScenarios).forEach(([scenario, testcase]) => {
  test(scenario, () => {
    expect(GameFlow.checkWin(testcase)).toEqual(true);
  });
});