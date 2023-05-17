let playerSymbol = ""
const playerName1 = document.getElementById("name1")
const playerName2 = document.getElementById("name2")

const nameField1 = document.createElement("input")
nameField1.classList.add("nameField1")
playerName1.appendChild(nameField1)
const nameField2 = document.createElement("input")
nameField2.classList.add("nameField2")
playerName2.appendChild(nameField2)

let round = 0
let roundMax = false
let gameFinished = false
let winPositions = [
  [1, 2, 3], [4, 5, 6], 
  [7, 8, 9], [1, 4, 7], 
  [2, 5, 8], [3, 6, 9], 
  [1, 5, 9], [3, 5, 7]
]; 


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
      document.getElementById(winPositions[winPositionIndex][winPositionCellIndex]).innerHTML === playerSymbol
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
      if (playerSymbol == "x") {
          document.getElementById("playerOne").style.backgroundColor="Red"
          document.getElementById("playerWinner").textContent = "GAGNE !!"
          gameFinished = true;
      } else if (playerSymbol == "o") {
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
  if (playerSymbol === "")  { // Condition par défaut
    playerSymbol = "x";
    document.getElementById("symbol1").textContent = "Symbole : x"
    document.getElementById("playerOne").style.backgroundColor="White"
    document.getElementById("playerTwo").style.backgroundColor="Red"
    document.getElementById("playerTwo").style.color="White"
  } else if (playerSymbol === "x") {
    playerSymbol = "o";
    document.getElementById("symbol2").textContent = "Symbole : o"
    document.getElementById("playerTwo").style.backgroundColor="White"
    document.getElementById("playerOne").style.backgroundColor="Red"
    document.getElementById("playerOne").style.color="White"
  } else {  
    playerSymbol = "x"
    document.getElementById("symbol1").textContent = "Symbole : x"
    document.getElementById("playerOne").style.backgroundColor="White"
    document.getElementById("playerTwo").style.backgroundColor="Red"
    document.getElementById("playerTwo").style.color="White"
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

      if (this.innerHTML === "" && !gameFinished) { // Si un élément <td id=""> est vide ou si la valeur de gameFinished n'est pas true :
        this.innerHTML = playerSymbol; // Alors on y ajoute un symbole de type String
        this.classList.add(playerSymbol.toLowerCase()); /* On ajoute à l'élément <td id=""> une classe qui est converti en minuscule */
      } else {
        alert("Ajout de symbole impossible !")
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
        playerSymbol = null;
        alert("Partie Terminé !")
      }

      displayReset()
    });
} 



