import React from "react";

function GameBoard({ targetWord, currentRow, onCheckWord }) {
  const rows = Array.from({ length: 6 }, (_, index) => index);

  return (
    <div id="game-board">
      {rows.map((rowIndex) => (
        <div
          key={rowIndex}
          className="game-row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {Array.from({ length: 5 }, (_, colIndex) => (
            <div
              className="tile"
              style={{
                width: "70px",
                height: "70px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #ccc",
              }}
              key={colIndex}
            >
              {rowIndex < currentRow ? targetWord[colIndex].toUpperCase() : ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
