let playerSymbol = "X"
let playerName 
let round = 0
let roundMax = false
let gameFinished = false
let name = document.getElementById("name").innerHTML = "".playerName
let name2 = document.getElementById("name2").innerHTML = "".playerName

for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener(
    "click", function() {
      if (this.innerHTML === "" && !gameFinished) {
        this.innerHTML = playerSymbol;
        this.classList.add(playerSymbol.toLowerCase());
      } 
      round++
      if (playerSymbol === "X")  {
        playerSymbol = "O";
        playerName = "Player 2";
        
        document.getElementById("playerTwo").style.backgroundColor="Red"
        document.getElementById("playerOne").style.backgroundColor="White"
      } else {
        playerSymbol = "X";
        playerName = "Player 1";
        document.getElementById("playerOne").style.backgroundColor="Red"
        document.getElementById("playerTwo").style.backgroundColor="White"
      }
      
      if (round === 9) {
        roundMax = true
          if (roundMax == true) {
          gameFinished = true
        }
        document.getElementById(i.toString()).removeEventListener("click")
      } 
  });
} 

let winPositions = [
  [1, 2, 3], [4, 5, 6], 
  [7, 8, 9], [1, 4, 7], 
  [2, 5, 8], [3, 6, 9], 
  [1, 5, 9], [3, 5, 7]
]; 

function checkWinner() {
  for (let i = 0; i < winPositions.length; i++) {
    if (
      document.getElementById(winPositions[i][0]).innerHTML === playerSymbol &&
      document.getElementById(winPositions[i][1]).innerHTML === playerSymbol &&
      document.getElementById(winPositions[i][2]).innerHTML === playerSymbol
      ) {
        document.getElementById(winPos[i][0]).classList.add("win");
        document.getElementById(winPos[i][1]).classList.add("win");
        document.getElementById(winPos[i][2]).classList.add("win"); 
        gameFinished = true;
      }
  }
}
