# Conways Game of Life in Typescript

### Initial Setup
Copy the .vscode/launch.template.json file and rename it to be 'launch.json'
```
> npm install
```
```
> npm test
```

### Challenge

> The Game of Life (an example of a cellular automaton) is played on an infinite two-dimensional rectangular grid of cells. Each cell can be either alive or dead. The status of each cell changes each turn of the game (also called a generation) depending on the statuses of that cell's 8 neighbors. Neighbors of a cell are cells that touch that cell, either horizontal, vertical, or diagonal from that cell.

> The initial pattern is the first generation. The second generation evolves from applying the rules simultaneously to every cell on the game board, i.e. births and deaths happen simultaneously. Afterwards, the rules are iteratively applied to create future generations. For each generation of the game, a cell's status in the next generation is determined by a set of rules. These simple rules are as follows:

### These rules are the birth rule, death rule, and survival rule.

- The birth rule states that any empty, or ‘dead’, cell with precisely three ‘live’ neighbours (i.e. full cells) will become live itself in the next generation. 
- The death rule has two statements: isolation and overcrowding. In isolation,  any live cell with zero or one neighbours will die in the next generation. Whereas in overcrowding, any live cell with four or more neighbours also dies in the next generation.  
- The survival rule states that any live cell with two or three neighbours will remain alive into the next generation. 

### The Incredible Story of The Game of Life
> https://www.youtube.com/watch?v=jvSp6VHt_Pc

### Let’s BUILD a COMPUTER in CONWAY's GAME of LIFE
> https://www.youtube.com/watch?v=Kk2MH9O4pXY
