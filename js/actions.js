let player1 = { 
  symbol: "x", 
  name: "Player 1"}
let player2 = { 
  symbol: "o",
  name: "Player 2"}

let player = player1.symbol 
const playerName1 = document.getElementById("name1")
const playerName2 = document.getElementById("name2")

const playerNameArea1 = document.querySelector("#name1")
const playerNameArea2 = document.querySelector("#name2")

const nameField1 = document.createElement("input")
nameField1.classList.add("nameField1")
playerName1.appendChild(nameField1)
nameField1.value = "Player 1"
const nameField2 = document.createElement("input")
nameField2.classList.add("nameField2")
playerName2.appendChild(nameField2)
nameField2.value = "Player 2"

nameField1.addEventListener("click", function(){
  nameField1.value = ""})
    
  nameField2.addEventListener("click", function(){
  nameField2.value = ""})

const displaySymbol1 = document.getElementById("symbol1")
const displaySymbol2 = document.getElementById("symbol2")

const selectSymbol1 = document.createElement("select")
selectSymbol1.classList.add("selectSymbol1")

const selectSymbol2 = document.createElement("select")
selectSymbol2.classList.add("selectSymbol2")

const optionSymbol1 = document.createElement("option")
const optionSymbol2 = document.createElement("option")
const optionSymbol3 = document.createElement("option")
const optionSymbol4 = document.createElement("option")

optionSymbol1.value = "x"
optionSymbol2.value = "o"

optionSymbol3.value = "o"
optionSymbol4.value = "x"

optionSymbol1.textContent = "x" 
optionSymbol2.textContent = "o"

optionSymbol3.textContent = "o"
optionSymbol4.textContent = "x"

selectSymbol1.appendChild(optionSymbol1) 
selectSymbol1.appendChild(optionSymbol2)

selectSymbol2.appendChild(optionSymbol3)
selectSymbol2.appendChild(optionSymbol4)

displaySymbol1.appendChild(selectSymbol1)
displaySymbol2.appendChild(selectSymbol2)

let round = 0
let roundMax = false
let gameFinished = false
let winPositions = [
  [1, 2, 3], [4, 5, 6], 
  [7, 8, 9], [1, 4, 7], 
  [2, 5, 8], [3, 6, 9], 
  [1, 5, 9], [3, 5, 7]
]; 


function displayName() {
  if (player.name = nameField1.value) {
    
    nameField1.textContent = nameField1.value
  }
}

function displayReset() {
  document.getElementById("resetBtn").addEventListener("click", function() { 
    location.reload()
})

  if (gameFinished === false) {
    document.getElementById("resetBtn").style.display = "none"
  } else {
    document.getElementById("resetBtn").style.display = "block"
  }
}

function checkWinner() { // Vérifie si toutes les combinaisons possibles sont valides
  // // Condition des paterns pour les lignes horizontaux
  // condition1 =  document.getElementById(winPositions[0][0]).innerHTML === playerSymbol &&
  //               document.getElementById(winPositions[0][1]).innerHTML === playerSymbol &&
  //               document.getElementById(winPositions[0][2]).innerHTML === playerSymbol

  // condition2 =  document.getElementById(winPositions[1][0]).innerHTML === playerSymbol &&
  //               document.getElementById(winPositions[1][1]).innerHTML === playerSymbol &&
  //               document.getElementById(winPositions[1][2]).innerHTML === playerSymbol

  // condition3 =  document.getElementById(winPositions[2][0]).innerHTML === playerSymbol &&
  //               document.getElementById(winPositions[2][1]).innerHTML === playerSymbol &&
  //               document.getElementById(winPositions[2][2]).innerHTML === playerSymbol

  // // Condition des paterns pour les lignes verticaux
  // condition4 =  document.getElementById(winPositions[3][0]).innerHTML === playerSymbol &&
  //               document.getElementById(winPositions[3][1]).innerHTML === playerSymbol &&
  //               document.getElementById(winPositions[3][2]).innerHTML === playerSymbol

  // condition5 =  document.getElementById(winPositions[4][0]).innerHTML === playerSymbol &&
  //               document.getElementById(winPositions[4][1]).innerHTML === playerSymbol &&
  //               document.getElementById(winPositions[4][2]).innerHTML === playerSymbol
  
  // condition6 =  document.getElementById(winPositions[5][0]).innerHTML === playerSymbol &&
  //               document.getElementById(winPositions[5][1]).innerHTML === playerSymbol &&
  //               document.getElementById(winPositions[5][2]).innerHTML === playerSymbol


  // // Condition des paterns pour les diagonales
  // condition7 =  document.getElementById(winPositions[6][0]).innerHTML === playerSymbol &&
  //               document.getElementById(winPositions[6][1]).innerHTML === playerSymbol &&
  //               document.getElementById(winPositions[6][2]).innerHTML === playerSymbol

  // condition8 =  document.getElementById(winPositions[7][0]).innerHTML === playerSymbol &&
  //               document.getElementById(winPositions[7][1]).innerHTML === playerSymbol &&
  //               document.getElementById(winPositions[7][2]).innerHTML === playerSymbol
  
  // pour chaque condition de victoire (== une combinaison) (et on veut récupérer un nouveau tableau de la même taille == 8)
  const conditions = winPositions.map((winPositionValue, winPositionIndex) => 
    // pour chaque cellule de cette combinaison (et on veut récupérer un nouveau tableau de la même taille == 3)
    winPositionValue.map((winPositionCellValue, winPositionCellIndex) => 
      // comparaison et return (par la fonction fléchée) du booléen
      document.getElementById(winPositions[winPositionIndex][winPositionCellIndex]).innerHTML === player
      // pour cette condition, si toutes (every) les comparaisons de cellules ont renvoyé true alors le tout est true, sinon false
    ).every(winPositionCellComparaison => winPositionCellComparaison)
  );

  // si au moins 1 condition est vraie
  if (conditions.some(condition => condition)) {

    // if (condition1 || condition2 || condition3 || condition4 || condition5 || condition6 || condition7 || condition8) {
      // if (round === 9) {
          
      //   if (playerSymbol == "x") {
      //     document.getElementById("playerOne").style.backgroundColor="Red"
      //     document.getElementById("playerWinner").textContent = "GAGNE !!"
      //     gameFinished = true;
      //   } else if (playerSymbol == "o") {
      //     document.getElementById("playerTwo").style.backgroundColor="Red"
      //     document.getElementById("playerWinner2").textContent = "GAGNE !!"
      //     gameFinished = true;
      //   }

      // } else if (playerSymbol == "x") {
      if (player1.symbol === "x") {
          document.getElementById("playerOne").style.backgroundColor="Red"
          document.getElementById("playerWinner").textContent = "GAGNE !!"
          gameFinished = true;
      } else if (player2.symbol === "o") {
        document.getElementById("playerTwo").style.backgroundColor="Red"
        document.getElementById("playerWinner2").textContent = "GAGNE !!"
        gameFinished = true;
      }
          
          // // Condition de vérification de chaque patern pour afficher 
          // if (condition1) {
          //   document.getElementById(winPositions[0][0]).style.color = "Red"
          //   document.getElementById(winPositions[0][1]).style.color = "Red"
          //   document.getElementById(winPositions[0][2]).style.color = "Red"
          // }

          // if (condition2) {
          //   document.getElementById(winPositions[1][0]).style.color = "Red"
          //   document.getElementById(winPositions[1][1]).style.color = "Red"
          //   document.getElementById(winPositions[1][2]).style.color = "Red"
          // }

          // if (condition3) {
          //   document.getElementById(winPositions[2][0]).style.color = "Red"
          //   document.getElementById(winPositions[2][1]).style.color = "Red"
          //   document.getElementById(winPositions[2][2]).style.color = "Red"
          // }

          // if (condition4) {
          //   document.getElementById(winPositions[3][0]).style.color = "Red"
          //   document.getElementById(winPositions[3][1]).style.color = "Red"
          //   document.getElementById(winPositions[3][2]).style.color = "Red"
          // }

          // if (condition5) {
          //   document.getElementById(winPositions[4][0]).style.color = "Red"
          //   document.getElementById(winPositions[4][1]).style.color = "Red"
          //   document.getElementById(winPositions[4][2]).style.color = "Red"
          // }

          // if (condition6) {
          //   document.getElementById(winPositions[5][0]).style.color = "Red"
          //   document.getElementById(winPositions[5][1]).style.color = "Red"
          //   document.getElementById(winPositions[5][2]).style.color = "Red"
          // }

          // if (condition7) {
          //   document.getElementById(winPositions[6][0]).style.color = "Red"
          //   document.getElementById(winPositions[6][1]).style.color = "Red"
          //   document.getElementById(winPositions[6][2]).style.color = "Red"
          // }

          // if (condition8) {
          //   document.getElementById(winPositions[7][0]).style.color = "Red"
          //   document.getElementById(winPositions[7][1]).style.color = "Red"
          //   document.getElementById(winPositions[7][2]).style.color = "Red"
          // }

          // pour chaque position
          winPositions.forEach((winPositionValue, winPositionIndex) => {
            // si la condition au même index est vraie
            if (conditions[winPositionIndex]) {
              // pour chaque cellule (de cette combinaison de position)
              winPositionValue.forEach((winPositionCellValue, winPositionCellIndex) => 
                // on applique la couleur rouge
                // remarque : winPositionValue[winPositionCellIndex] == winPositions[winPositionIndex][winPositionCellIndex]
                document.getElementById(winPositionValue[winPositionCellIndex]).style.color = "Red"
              );
            }
          });
  }
}

function symbolCheck() {
  if (player === player1.symbol) {
    document.getElementById("symbol1").textContent = "Symbole : " + player1.symbol
    document.getElementById("playerTwo").style.backgroundColor="White"
    document.getElementById("playerOne").style.backgroundColor="Red"
    document.getElementById("playerOne").style.color="White"
  } else if (player === player2.symbol) {  
    document.getElementById("symbol2").textContent = "Symbole : " + player2.symbol
    document.getElementById("playerOne").style.backgroundColor="White"
    document.getElementById("playerTwo").style.backgroundColor="Red"
    document.getElementById("playerTwo").style.color="White"
  } 
}

function playerSwitch() {
  if (player === player1.symbol) {
    player = player2.symbol
  } else {
    player = player1.symbol
  }
}

for (let i = 1; i <= 9; i++) {
  /* Retourne la représentation de l'objet d'un objet (i) en chaîne de caratères.  
  Chaque id ayant un chiffre de 1 à 9 dans les balises <td> du html, chacun de ces éléments est désormais cliquable
  et reçois des événements associés*/
  document.getElementById(i.toString()).addEventListener( 
  "click", function() {
      round++ // On démarre le compteur de tours

      symbolCheck() // On vérifie qui est le 1er joueur et qui joue pour chaque tour 

      if (!gameFinished) { // Si un élément <td id=""> est vide ou si la valeur de gameFinished n'est pas true :
        this.innerHTML = player; // Alors on y ajoute un symbole de type String
        this.classList.add(player.toLowerCase()); /* On ajoute à l'élément <td id=""> une classe qui est converti en minuscule */
      } else {
        round--
        symbolCheck()
      }

      checkWinner()

      if (round === 9) {
        roundMax = true
          if (roundMax) {
          gameFinished = true;
        }
      } 

      if (roundMax && gameFinished) {
        player = null;
      }
      playerSwitch()
      displayReset()
    });
} 