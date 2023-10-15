export function cleanPrint(output: string) {
  console.clear();
  console.log(output);
}

export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function formatForConsoleOutput(
  grid: number[][], 
  lifecycle: { currentIteration: number, maxNumberOfIterations: number } | null = null
): string {
  const alive = '■';
  const dead = '-';

  let output = '';
  grid.forEach((row) => {
    row.forEach((cell) => {
      output += `${ cell === 1 ? alive : dead } `;
    });
    output += `\r\n`;
  });

  if(lifecycle) {
    output += `${ lifecycle.currentIteration } of ${ lifecycle.maxNumberOfIterations }`;
  }

  return output;
}  