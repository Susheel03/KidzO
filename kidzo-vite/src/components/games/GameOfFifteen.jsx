import React, { useState, useEffect } from "react";
import "./GameOfFifteen.css"; // Add your CSS for styling here.

const DIRECTION_UP = 0;
const DIRECTION_RIGHT = 1;
const DIRECTION_DOWN = 2;
const DIRECTION_LEFT = 3;

const shuffleArray = (array) => {
  for (let i = array.length * array[0].length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const x1 = Math.floor(i / array[0].length);
    const y1 = i % array[0].length;
    const x2 = Math.floor(j / array[0].length);
    const y2 = j % array[0].length;
    [array[x1][y1], array[x2][y2]] = [array[x2][y2], array[x1][y1]];
  }
};

const GameOfFifteen = () => {
  const itemsHorizontal = 4;
  const itemsVertical = 4;
  const [map, setMap] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const initialMap = [];
    for (let y = 0; y < itemsVertical; y++) {
      initialMap[y] = [];
      for (let x = 0; x < itemsHorizontal; x++) {
        if (x === itemsHorizontal - 1 && y === itemsVertical - 1) {
          initialMap[y][x] = null; // Empty space
        } else {
          initialMap[y][x] = itemsHorizontal * y + x + 1;
        }
      }
    }
    shuffleArray(initialMap);
    setMap(initialMap);
    setIsFinished(false);
  };

  const getEmptyPosition = () => {
    for (let y = 0; y < itemsVertical; y++) {
      for (let x = 0; x < itemsHorizontal; x++) {
        if (map[y][x] === null) {
          return { x, y };
        }
      }
    }
  };

  const move = (x, y, direction) => {
    const emptyPos = getEmptyPosition();
    if (x === emptyPos.x && y === emptyPos.y) return;

    let targetX = x;
    let targetY = y;

    switch (direction) {
      case DIRECTION_UP:
        targetY -= 1;
        break;
      case DIRECTION_DOWN:
        targetY += 1;
        break;
      case DIRECTION_LEFT:
        targetX -= 1;
        break;
      case DIRECTION_RIGHT:
        targetX += 1;
        break;
      default:
        return;
    }

    if (
      targetX >= 0 &&
      targetY >= 0 &&
      targetX < itemsHorizontal &&
      targetY < itemsVertical &&
      map[targetY][targetX] === null
    ) {
      const newMap = map.map((row) => row.slice());
      [newMap[y][x], newMap[targetY][targetX]] = [
        newMap[targetY][targetX],
        newMap[y][x],
      ];
      setMap(newMap);
    }
  };

  const handleClick = (x, y) => {
    if (isFinished) return;

    const emptyPos = getEmptyPosition();

    if (x === emptyPos.x) {
      if (y < emptyPos.y) move(x, y, DIRECTION_DOWN);
      else if (y > emptyPos.y) move(x, y, DIRECTION_UP);
    } else if (y === emptyPos.y) {
      if (x < emptyPos.x) move(x, y, DIRECTION_RIGHT);
      else if (x > emptyPos.x) move(x, y, DIRECTION_LEFT);
    }

    if (checkIfCompleted()) {
      setTimeout(() => {
        setIsFinished(true);
      }, 500);
    }
  };

  const checkIfCompleted = () => {
    for (let y = 0; y < itemsVertical; y++) {
      for (let x = 0; x < itemsHorizontal; x++) {
        if (y === itemsVertical - 1 && x === itemsHorizontal - 1) return true;
        if (map[y][x] !== y * itemsHorizontal + x + 1) return false;
      }
    }
    return true;
  };

  return (
    <div className="game-container">
      <div className={`game-field ${isFinished ? "win" : ""}`}>
        {map.map((row, y) =>
          row.map((value, x) => (
            <div
              key={`${x}-${y}`}
              className={`tile ${value === null ? "empty" : ""}`}
              style={{
                left: `${(x * 100) / itemsHorizontal}%`,
                top: `${(y * 100) / itemsVertical}%`,
              }}
              onClick={() => handleClick(x, y)}
            >
              {value}
            </div>
          ))
        )}
      </div>
      <button onClick={initializeGame} className="shuffle-button">
        Shuffle
      </button>
      {isFinished && <div className="congratulations">Congratulations!</div>}
    </div>
  );
};

export default GameOfFifteen;
