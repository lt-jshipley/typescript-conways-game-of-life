import { newGame, nextIteration } from './game-of-life'

describe('Game of Life: newGame', () => {
  it('returns an empty board when starting a new game', () => {
    // Act
    const board = newGame(3);

    // Assert
    expect(board).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ])
  });

  it('returns a board with starting live cells when passed in', () => {
    // Act
    const board = newGame(3, [
      { x: 1, y: 1 }
    ]);

    // Assert
    expect(board).toEqual([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ])
  });
});

describe('Game of Life: nextIteration', () => {
  it('dead game stays dead', () => {
    // Arrange
    const board = newGame(3);

    // Act
    const result = nextIteration(board);

    // Assert
    expect(result).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ])
  });

  it('cell dies when no living neighbors', () => {
    // Arrange
    const board = newGame(6, [
      { x: 1, y: 1 },
    ]);

    // Act
    const result = nextIteration(board);

    // Assert
    expect(result).toEqual([
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ]);
  });

  it('cell dies when only 1 living neighbors', () => {
    // Arrange
    const board = newGame(6, [
      { x: 1, y: 1 },
      { x: 1, y: 2 },
    ]);

    // Act
    const result = nextIteration(board);

    // Assert
    expect(result).toEqual([
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ]);
  });

  it('cell stays alive when it has 2 living neighbors', () => {
    // Arrange
    const board = newGame(3, [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
    ]);

    // Act
    const result = nextIteration(board);

    // Assert
    expect(result).toEqual([
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ]);
  });

  it('cell stays alive when it has 3 living neighbors', () => {
    // Arrange
    const board = newGame(6, [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
    ]);

    // Act
    const result = nextIteration(board);

    // Assert
    expect(result).toEqual([
      [1, 1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ]);
  });

  it('cell dies when it has 4 or more living neighbors', () => {
    // Arrange
    const board = newGame(3, [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 1 },
      { x: 2, y: 0 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
    ]);

    // Act
    const result = nextIteration(board);

    // Assert
    expect(result).toEqual([
      [1, 1, 1],
      [0, 0, 0],
      [1, 1, 1],
    ]);
  });

  it('dead cell comes back to life when it has 3 living neighbors', () => {
    // Arrange
    const board = newGame(6, [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
    ]);

    // Act
    const result = nextIteration(board);

    // Assert
    expect(result).toEqual([
      [1, 1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ]);
  });
});