let playerSymbol = ""
let playerName1
let playerName2
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

/* function colorWinner() { // Ajoute une couleur rouge à tous les éléments de la classe playerSymbol 
  let elements = document.getElementsByClassName(playerSymbol); 
	for(let i = 0; i < elements.length; i++){ // Boucle qui parcours la longueur du tableau elements associés à la classe playerSymbol
		elements[i].style.color = "Red";
	}
} */

function checkWinner() { // Vérifie si toute les combinaisons possibles sont valides
  // Condition des paterns pour les lignes horizontaux
  condition1 =  document.getElementById(winPositions[0][0]).innerHTML === playerSymbol &&
                document.getElementById(winPositions[0][1]).innerHTML === playerSymbol &&
                document.getElementById(winPositions[0][2]).innerHTML === playerSymbol
    

  condition2 =  document.getElementById(winPositions[1][0]).innerHTML === playerSymbol &&
                document.getElementById(winPositions[1][1]).innerHTML === playerSymbol &&
                document.getElementById(winPositions[1][2]).innerHTML === playerSymbol

  condition3 =  document.getElementById(winPositions[2][0]).innerHTML === playerSymbol &&
                document.getElementById(winPositions[2][1]).innerHTML === playerSymbol &&
                document.getElementById(winPositions[2][2]).innerHTML === playerSymbol

  // Condition des paterns pour les lignes verticaux
  condition4 =  document.getElementById(winPositions[3][0]).innerHTML === playerSymbol &&
                document.getElementById(winPositions[3][1]).innerHTML === playerSymbol &&
                document.getElementById(winPositions[3][2]).innerHTML === playerSymbol

  condition5 =  document.getElementById(winPositions[4][0]).innerHTML === playerSymbol &&
                document.getElementById(winPositions[4][1]).innerHTML === playerSymbol &&
                document.getElementById(winPositions[4][2]).innerHTML === playerSymbol
  
  condition6 =  document.getElementById(winPositions[5][0]).innerHTML === playerSymbol &&
                document.getElementById(winPositions[5][1]).innerHTML === playerSymbol &&
                document.getElementById(winPositions[5][2]).innerHTML === playerSymbol


  // Condition des paterns pour les diagonales
  condition7 =  document.getElementById(winPositions[6][0]).innerHTML === playerSymbol &&
                document.getElementById(winPositions[6][1]).innerHTML === playerSymbol &&
                document.getElementById(winPositions[6][2]).innerHTML === playerSymbol

  condition8 =  document.getElementById(winPositions[7][0]).innerHTML === playerSymbol &&
                document.getElementById(winPositions[7][1]).innerHTML === playerSymbol &&
                document.getElementById(winPositions[7][2]).innerHTML === playerSymbol

    if (condition1 || condition2 || condition3 || condition4 || condition5 || condition6 || condition7 || condition8) {
       if (round === 9) {
          
          if (playerSymbol == "x") {
            document.getElementById("playerOne").style.backgroundColor="Red"
            document.getElementById("playerWinner").textContent = "GAGNE !!"
            gameFinished = true;
          } else if (playerSymbol == "o") {
            document.getElementById("playerTwo").style.backgroundColor="Red"
            document.getElementById("playerWinner2").textContent = "GAGNE !!"
            gameFinished = true;
          }

        } else if (playerSymbol == "x") {
            document.getElementById("playerOne").style.backgroundColor="Red"
            document.getElementById("playerWinner").textContent = "GAGNE !!"
            gameFinished = true;
          } else if (playerSymbol == "o") {
            document.getElementById("playerTwo").style.backgroundColor="Red"
            document.getElementById("playerWinner2").textContent = "GAGNE !!"
            gameFinished = true;
          }
          
          // Condition de vérification de chaque patern pour afficher 
          if (condition1 === true) {
            document.getElementById(winPositions[0][0]).style.color = "Red"
            document.getElementById(winPositions[0][1]).style.color = "Red"
            document.getElementById(winPositions[0][2]).style.color = "Red"
          }

          if (condition2 === true) {
            document.getElementById(winPositions[1][0]).style.color = "Red"
            document.getElementById(winPositions[1][1]).style.color = "Red"
            document.getElementById(winPositions[1][2]).style.color = "Red"
          }

          if (condition3 === true) {
            document.getElementById(winPositions[2][0]).style.color = "Red"
            document.getElementById(winPositions[2][1]).style.color = "Red"
            document.getElementById(winPositions[2][2]).style.color = "Red"
          }

          if (condition4 === true) {
            document.getElementById(winPositions[3][0]).style.color = "Red"
            document.getElementById(winPositions[3][1]).style.color = "Red"
            document.getElementById(winPositions[3][2]).style.color = "Red"
          }

          if (condition5 === true) {
            document.getElementById(winPositions[4][0]).style.color = "Red"
            document.getElementById(winPositions[4][1]).style.color = "Red"
            document.getElementById(winPositions[4][2]).style.color = "Red"
          }

          if (condition6 === true) {
            document.getElementById(winPositions[5][0]).style.color = "Red"
            document.getElementById(winPositions[5][1]).style.color = "Red"
            document.getElementById(winPositions[5][2]).style.color = "Red"
          }

          if (condition7 === true) {
            document.getElementById(winPositions[6][0]).style.color = "Red"
            document.getElementById(winPositions[6][1]).style.color = "Red"
            document.getElementById(winPositions[6][2]).style.color = "Red"
          }

          if (condition8 === true) {
            document.getElementById(winPositions[7][0]).style.color = "Red"
            document.getElementById(winPositions[7][1]).style.color = "Red"
            document.getElementById(winPositions[7][2]).style.color = "Red"
          }
  }
}

function symbolCheck() {
  if (playerSymbol === "")  { // Condition par défaut
    playerSymbol = "x";
    playerName1 = "Player 1";
    document.getElementById("name1").textContent = playerName1
    document.getElementById("symbol1").textContent = "Symbole : x"
    document.getElementById("playerOne").style.backgroundColor="White"
    document.getElementById("playerTwo").style.backgroundColor="Red"
    document.getElementById("playerTwo").style.color="White"
  } else if (playerSymbol === "x") {
    playerSymbol = "o";
    playerName2 = "Player 2";
    document.getElementById("name2").textContent = playerName2
    document.getElementById("symbol2").textContent = "Symbole : o"
    document.getElementById("playerTwo").style.backgroundColor="White"
    document.getElementById("playerOne").style.backgroundColor="Red"
    document.getElementById("playerOne").style.color="White"
  } else {  
    playerSymbol = "x"
    playerName1 = "Player 1";
    document.getElementById("name1").textContent = playerName1
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
          if (roundMax === true) {
          gameFinished = true;
        }
        
      } 

      if (roundMax === true && gameFinished === true) {
        playerSymbol = null;
        alert("Partie Terminé !")
      }

      displayReset()
    });
} 



