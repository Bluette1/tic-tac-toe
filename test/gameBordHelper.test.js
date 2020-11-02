import { produceDiagonals, produceVerticals } from '../src/helpers/gameBoardHelper';
const boardArr = [
  ['X', 'O', 'X'],
  ['O', 'O', 'O'],
  ['O', 'X', 'X'],
]
test('produceDiagonals returns the expected result', () => {
  const mockConvertBoardArrToOrdinarryArr = jest.fn((boardArr) => {
    return ['X', 'O', 'X', 'O', 'O', 'O', 'O', 'X', 'X']
  });

  const actualResult = produceDiagonals(boardArr, mockConvertBoardArrToOrdinarryArr);
  const expectedResult = [
    ['X', 'O', 'X'],
    ['X', 'O', 'O']
  ];
  expect(actualResult).toEqual(expectedResult);
});

test('produceVerticals returns the expected result', () => {
  const mockConvertBoardArrToOrdinarryArr = jest.fn((boardArr) => {
    return ['X', 'O', 'X', 'O', 'O', 'O', 'O', 'X', 'X']
  });

  const actualResult = produceVerticals(boardArr, mockConvertBoardArrToOrdinarryArr);
  const expectedResult = [
    ['X', 'O', 'O'],
    ['O', 'O', 'X'],
    ['X', 'O', 'X'],
  ];
  expect(actualResult).toEqual(expectedResult);
});