// NOTE: this has some starting simple game of life seeds.
// import { MIXED_SEEDS } from '@src/util/gol-seeds';

export function gameOfLife(): number[][] {
  return [
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
  ];
}
