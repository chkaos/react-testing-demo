
import { calculateWinner } from '../helpers'

describe("calculateWinner tests", () => {

  const testTasksList = [
    {
      name: "X wins",
      squares: ["O","O","","","X","O","X","X","X"],
      result: "X"
    },
    {
      name: "O wins",
      squares: ["O","","X","X","O","X","O","X","O"],
      result: "O"
    },
    {
      name: "Even",
      squares: ["O","O","X","X","X","O","O","X","X"],
      result: null
    }
  ]

  it('invalid params', () => {
    expect(() => {
      calculateWinner(["X", "O", "X"]);
    }).toThrow('Invalid Squares!');
  });

  testTasksList.forEach((task => {
    it(task.name, () => {
      expect(calculateWinner(task.squares)).toBe(task.result)
    });
  }))
})