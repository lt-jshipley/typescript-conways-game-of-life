import { 
  cleanPrint, 
  delay, 
  formatForConsoleOutput 
} from '@src/util/console.helpers';
import { gameOfLife } from './game-of-life';

async function consoleRunner(): Promise<void> {
  const MAX_ITERATIONS = 100;
  const RENDER_DELAY = 500;

  let current = 0;
  while(current <= MAX_ITERATIONS) {
    let board: number[][] = gameOfLife();
    const output = formatForConsoleOutput(board, { currentIteration: current, maxNumberOfIterations: MAX_ITERATIONS });
    cleanPrint(output);

    await delay(RENDER_DELAY);
    current++;
  } 
}

consoleRunner();
