import { 
  cleanPrint, 
  delay, 
  formatForConsoleOutput 
} from '@src/util/console.helpers';

// NOTE: this has some starting simple game of life seeds.
// import { MIXED_SEEDS } from '@src/util/gol-seeds';

export async function gameOfLife(): Promise<void> {
  const MAX_ITERATIONS = 100;
  const RENDER_DELAY = 500;

  let board = start();
  let current = 0;
  while(current <= MAX_ITERATIONS) {
    board = nextCycle(board);
    const output = formatForConsoleOutput(board, { currentIteration: current, maxNumberOfIterations: MAX_ITERATIONS });
    cleanPrint(output);

    await delay(RENDER_DELAY);
    current++;
  } 
}

export function start(): number[][] {
  return [
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
  ];
}

function nextCycle(board: number[][]): number[][] {
  return board;
}
