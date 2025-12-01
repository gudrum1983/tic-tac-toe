export function calculateWinner(squares: Array<string | null>): {
  winner: string,
  line: [number, number, number]
} | null {
  const lines: Array<[number, number, number]> = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return null;
}


export const squaresCoordinate: Array<{coordinates: [number, number], value: null | 'X' | '0'}> = [
  { coordinates: [1, 1], value: null },
  { coordinates: [1, 2], value: null },
  { coordinates: [1, 3], value: null },
  { coordinates: [2, 1], value: null },
  { coordinates: [2, 2], value: null },
  { coordinates: [2, 3], value: null },
  { coordinates: [3, 1], value: null },
  { coordinates: [3, 2], value: null },
  { coordinates: [3, 3], value: null },
];

export const simpleSquares: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];