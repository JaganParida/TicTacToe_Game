let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

function cellClick(index) {
  if (board[index] === "" && gameActive) {
    board[index] = currentPlayer;
    let cell = document.getElementsByClassName("cell")[index];
    cell.innerText = currentPlayer;
    cell.classList.add(currentPlayer);

    if (checkWinner()) {
      document.getElementById(
        "status"
      ).innerText = `Player ${currentPlayer} Wins!`;
      gameActive = false;
      return;
    }

    if (board.every((cell) => cell !== "")) {
      document.getElementById("status").innerText = "It's a Draw!";
      gameActive = false;
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById(
      "status"
    ).innerText = `Player ${currentPlayer}'s Turn`;
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winPatterns.some((pattern) => {
    const [a, b, c] = pattern;
    return board[a] !== "" && board[a] === board[b] && board[a] === board[c];
  });
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  document.getElementById("status").innerText = "Player X's Turn";
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.innerText = "";
    cell.classList.remove("X", "O");
  });
}
