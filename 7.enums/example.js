var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
function move(direction) {
    switch (direction) {
        case Direction.Up:
            console.log("Moving up (".concat(Direction.Up, ")"));
            break;
        case Direction.Down:
            console.log("Moving down (".concat(Direction.Down, ")"));
            break;
        case Direction.Left:
            console.log("Moving left (".concat(Direction.Left, ")"));
            break;
        case Direction.Right:
            console.log("Moving right (".concat(Direction.Right, ")"));
            break;
    }
}
move(Direction.Up); // Output: Moving up (UP)
