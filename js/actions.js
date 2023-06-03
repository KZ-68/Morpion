let player1 = { 
  symbol: "", // Symbole par défaut
  name: "Player 1", // Nom par défaut
  score1: JSON.parse(localStorage.getItem('score1')),
  winner: false
} 
let player2 = { 
  symbol: "", // Symbole par défaut
  name: "Player 2", // Nom par défaut
  score2: JSON.parse(localStorage.getItem('score2')),
  winner: false
} 

let currentPlayer = "" // On crée une variable pour le joueur en cours, qui est d'abord vide

const playerNameArea1 = document.querySelector("#name1")
const playerNameArea2 = document.querySelector("#name2")

// Création des champs de texte pour écrire le nom du joueur
const nameField1 = document.createElement("input")
nameField1.classList.add("nameField1")
let newNameField1 = nameField1.cloneNode()
playerNameArea1.appendChild(newNameField1)
newNameField1.value = player1.name

const nameField2 = document.createElement("input")
nameField2.classList.add("nameField2")
let newNameField2 = nameField2.cloneNode()
playerNameArea2.appendChild(newNameField2)
newNameField2.value = player2.name

// Création des boutons pour valider le nom du joueur
const nameButton1 = document.createElement("button")
nameButton1.classList.add("nameButton1")
playerNameArea1.appendChild(nameButton1)
nameButton1.textContent = "Ready"

const nameButton2 = document.createElement("button")
nameButton2.classList.add("nameButton2")
playerNameArea2.appendChild(nameButton2)
nameButton2.textContent = "Ready"

// Retire le texte superposé
newNameField1.addEventListener("click", function(){
  newNameField1.value = ""})
    
newNameField2.addEventListener("click", function(){
  newNameField2.value = ""})

// Fait disparaitre le champ de texte et affiche le nom du joueur validé 
nameButton1.addEventListener("click", function() {
    if (newNameField1.value == "") {
      playerNameArea1.innerHTML = player1.name
    } else {
      playerNameArea1.innerHTML = newNameField1.value
    }
    newNameField1.remove()
})

nameButton2.addEventListener("click", function() {
    if (newNameField2.value == "") {
      playerNameArea2.innerHTML = player2.name
    } else {
      playerNameArea2.innerHTML = newNameField2.value
    }
    newNameField2.remove()
})


const displaySymbol1 = document.getElementById("symbol1")
const displaySymbol2 = document.getElementById("symbol2")

const selectSymbol1 = document.createElement("select") // Creation de la balise select pour le joueur 1 et affectation à une constante "selectSymbol1"
selectSymbol1.classList.add("selectSymbol1")
let newSelectSymbol1 = selectSymbol1.cloneNode() // Creation d'un clone de select 

const selectSymbol2 = document.createElement("select")
selectSymbol2.classList.add("selectSymbol2")
let newSelectSymbol2 = selectSymbol2.cloneNode()

// Creation de l'affichage des différentes options des balises select
const optionSymbol1 = document.createElement("option") 
const optionSymbol2 = document.createElement("option")
const optionSymbol3 = document.createElement("option")
const optionSymbol4 = document.createElement("option")

const symbolButton1 = document.createElement("button")
symbolButton1.classList.add("symbolButton1")
displaySymbol1.appendChild(symbolButton1)
symbolButton1.textContent = "Ready"

const symbolButton2 = document.createElement("button")
symbolButton2.classList.add("symbolButton2")
displaySymbol2.appendChild(symbolButton2)
symbolButton2.textContent = "Ready"

// Affectation des valeurs de chaque options
optionSymbol1.value = "x"
optionSymbol2.value = "o"

optionSymbol3.value = "o"
optionSymbol4.value = "x"

// Ajout du texte à afficher pour chaque options
optionSymbol1.textContent = "x" 
optionSymbol2.textContent = "o"

optionSymbol3.textContent = "o"
optionSymbol4.textContent = "x"

// Affection des options pour chacune des deux balises select
newSelectSymbol1.appendChild(optionSymbol1) 
newSelectSymbol1.appendChild(optionSymbol2)

newSelectSymbol2.appendChild(optionSymbol3)
newSelectSymbol2.appendChild(optionSymbol4)

displaySymbol1.appendChild(newSelectSymbol1)
displaySymbol2.appendChild(newSelectSymbol2)

// Evénement de clique pour le bouton de confirmation du symbole du premier joueur
symbolButton1.addEventListener("click", function() {
  if (newSelectSymbol1.value == optionSymbol1.value) {
    displaySymbol1.innerHTML = "Symbole : " + optionSymbol1.value
    player1.symbol = optionSymbol1.value
    currentPlayer = player1.symbol  
  }
  if (newSelectSymbol1.value == optionSymbol2.value ) {
    displaySymbol1.innerHTML = "Symbole : " + optionSymbol2.value
    player1.symbol = optionSymbol2.value
    currentPlayer = player1.symbol 
  }
  newSelectSymbol1.remove()
})

// Evénement de clique pour le bouton de confirmation du symbole du deuxième joueur
symbolButton2.addEventListener("click", function() {
  if (newSelectSymbol2.value == optionSymbol3.value) {
    displaySymbol2.innerHTML = "Symbole : " + optionSymbol3.textContent
    player2.symbol = optionSymbol3.value
  }
  if (newSelectSymbol2.value == optionSymbol4.value) {
    displaySymbol2.innerHTML = "Symbole : " + optionSymbol4.textContent
    player2.symbol = optionSymbol4.value
  }
  newSelectSymbol2.remove()
})

const playerScoreArea1 = document.getElementById("playerOneZone2")
const playerScoreArea2 = document.getElementById("playerTwoZone2")

const playerScore1 = document.createElement("p")
playerScore1.classList.add("playerScore1")
playerScoreArea1.appendChild(playerScore1)
playerScore1.innerHTML = `Score : ${JSON.parse(localStorage.getItem('score1'))}`
if (JSON.parse(localStorage.getItem('score1')) === null ) {
  playerScore1.innerHTML = `Score : ${0}`
}

const playerScore2 = document.createElement("p")
playerScore2.classList.add("playerScore2")
playerScoreArea2.appendChild(playerScore2)
playerScore2.innerHTML = `Score : ${JSON.parse(localStorage.getItem('score2'))}`
if (JSON.parse(localStorage.getItem('score2')) === null ) {
  playerScore2.innerHTML = `Score : ${0}`
}


function storageScore() {
  if (gameFinished && player1.winner === true) {
    player1.score1++
    localStorage.setItem('score1', JSON.stringify(player1.score1))
  }

  if (gameFinished && player2.winner === true) {
    player2.score2++ 
    localStorage.setItem('score2', JSON.stringify(player2.score2))
  }
}

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

function displayScoreReset() {
  document.getElementById("resetScoreBtn").addEventListener("click", function() { 
    localStorage.removeItem('score1')
    localStorage.removeItem('score2')
})
  if (gameFinished === false) {
    document.getElementById("resetScoreBtn").style.display = "none"
  } else {
    document.getElementById("resetScoreBtn").style.display = "block"
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
      document.getElementById(winPositions[winPositionIndex][winPositionCellIndex]).innerHTML === currentPlayer
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
      if (currentPlayer == player1.symbol && player1.symbol === optionSymbol1.value) {
          document.getElementById("playerOne").style.backgroundColor="Red"
          document.getElementById("playerWinner").textContent = "GAGNEE !!"
          player1.winner = true;
          gameFinished = true;
      } else if (currentPlayer == player2.symbol && player2.symbol === optionSymbol3.value) {
        document.getElementById("playerTwo").style.backgroundColor="Red"
        document.getElementById("playerWinner2").textContent = "GAGNEE !!"
        player2.winner = true;
        gameFinished = true;
      }
      
      if (currentPlayer == player1.symbol && player1.symbol === optionSymbol2.value) {
        document.getElementById("playerOne").style.backgroundColor="Red"
        document.getElementById("playerWinner").textContent = "GAGNEE !!"
        player1.winner = true;
        gameFinished = true;
      } else if (currentPlayer == player2.symbol && player2.symbol === optionSymbol4.value) {
        document.getElementById("playerTwo").style.backgroundColor="Red"
        document.getElementById("playerWinner2").textContent = "GAGNEE !!"
        player2.winner = true;
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
  if (currentPlayer === player1.symbol) {
    
    document.getElementById("playerTwo").style.backgroundColor="White"
    document.getElementById("playerOne").style.backgroundColor="Red"
    document.getElementById("playerOne").style.color="White"
  } else if (currentPlayer === player2.symbol) {  

    document.getElementById("playerOne").style.backgroundColor="White"
    document.getElementById("playerTwo").style.backgroundColor="Red"
    document.getElementById("playerTwo").style.color="White"
  } 
}

function playerSwitch() {
  if (currentPlayer === player1.symbol) {
    currentPlayer = player2.symbol
  } else {
    currentPlayer = player1.symbol
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

      if (this.innerHTML == "" && !gameFinished && currentPlayer != "") { // Si un élément <td id=""> est vide ou si la valeur de gameFinished n'est pas true :
        this.innerHTML = currentPlayer; // Alors on y ajoute un symbole de type String
        this.classList.add(currentPlayer.toLowerCase()); /* On ajoute à l'élément <td id=""> une classe qui est converti en minuscule */
        if ((player1.symbol == optionSymbol1.value && player2.symbol == optionSymbol4.value) || (player1.symbol == optionSymbol2.value && player2.symbol == optionSymbol3.value)) {
          alert("Symbole des joueurs identique, choisissez à nouveau")
          location.reload()
        }
      } else {
        alert("Ajout de symbole impossible !")
        round--
        playerSwitch()
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
        currentPlayer = null;
      }
      playerSwitch()
      storageScore()
      displayReset()
      displayScoreReset()
    });
} 