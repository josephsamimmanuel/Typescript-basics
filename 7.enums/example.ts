enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

function move(direction: Direction) {
  switch (direction) {
    case Direction.Up:
      console.log(`Moving up (${Direction.Up})`);
      break;
    case Direction.Down:
      console.log(`Moving down (${Direction.Down})`);
      break;
    case Direction.Left:
      console.log(`Moving left (${Direction.Left})`);
      break;
    case Direction.Right:
      console.log(`Moving right (${Direction.Right})`);
      break;
  }
}
// If you have another 'move' function elsewhere, remove or rename it to avoid duplicate implementation errors.

move(Direction.Up);    // Output: Moving up (UP)