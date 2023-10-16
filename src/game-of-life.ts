import { formatForConsoleOutput, cleanPrint, delay } from '@src/util/console.helpers';
import { MIXED_SEEDS } from '@src/util/gol-seeds';

type Location = {
  x: number,
  y: number
}

export async function gameOfLife() {
  let board = newGame(25, MIXED_SEEDS);

  let currentIteration = 0;
  while(currentIteration < 50) {
    board = nextIteration(board);
    const output = formatForConsoleOutput(board);
    cleanPrint(output);
    await delay(500);
    currentIteration++;
  }
}

export function newGame(
  gridSize: number, 
  seed: Location[] | null = null
): number[][] {
  let board: number[][] = [];
  for(let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
    let row = [];
    for(let columnIndex = 0; columnIndex < gridSize; columnIndex++) {
      row.push(0);
    }
    board.push(row);
  }

  if(seed) {
    seed.forEach((s) => {
      board[s.x][s.y] = 1
    });
  }

  return board;
}

export function nextIteration(board: number[][]) {
  let nextBoard: number[][] = [];
  for(let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    let row = [];
    for(let columnIndex = 0; columnIndex < board.length; columnIndex++) {
      const priorCellState = board[rowIndex][columnIndex];
      const liveNeighbors = getLiveNeighborsCount(board, { x: rowIndex, y: columnIndex });
      let cellState = priorCellState;
      if(priorCellState === 1) {
        if(liveNeighbors < 2 || liveNeighbors > 3) {
          cellState = 0;
        }
      } else {
        if(liveNeighbors === 3) {
          cellState = 1;
        }
      }
      row.push(cellState);
    }
    nextBoard.push(row);
  }

  return nextBoard;
}

function getLiveNeighborsCount(board: number[][], location: Location): number {
  const neighbors = [
    { x: location.x - 1, y: location.y - 1 }, { x: location.x - 1, y: location.y + 0 }, { x: location.x - 1, y: location.y + 1 }, 
    { x: location.x + 0, y: location.y - 1 },                                           { x: location.x + 0, y: location.y + 1 }, 
    { x: location.x + 1, y: location.y - 1 }, { x: location.x + 1, y: location.y + 0 }, { x: location.x + 1, y: location.y + 1 }, 
  ];

  let liveCount = 0;
  neighbors.forEach((n) => {
    if(n.x >= 0 && n.y >= 0 && n.x < board.length && n.y < board.length) {
      liveCount += board[n.x][n.y];
    }
  });
  return liveCount;
}