const produceDiagonals = (boardArr, convertBoardArrToOrdinarryArr) => {
  const ordinaryArr = convertBoardArrToOrdinarryArr(boardArr);
  const forwardDiagonal = [ordinaryArr[0], ordinaryArr[4], ordinaryArr[8]];
  const antDiagonal = [ordinaryArr[2], ordinaryArr[4], ordinaryArr[6]];
  return [forwardDiagonal, antDiagonal];
};

const produceVerticals = (boardArr, convertBoardArrToOrdinarryArr) => {
  const ordinaryArr = convertBoardArrToOrdinarryArr(boardArr);
  const leftVertical = [ordinaryArr[0], ordinaryArr[3], ordinaryArr[6]];
  const middleVertical = [ordinaryArr[1], ordinaryArr[4], ordinaryArr[7]];
  const rightVertical = [ordinaryArr[2], ordinaryArr[5], ordinaryArr[8]];
  return [leftVertical, middleVertical, rightVertical];
};

export { produceDiagonals, produceVerticals }