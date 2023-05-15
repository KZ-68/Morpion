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


function colorWinner() {
  let elements = document.getElementsByClassName(playerSymbol); // get all elements
	for(let i = 0; i < elements.length; i++){
		elements[i].style.color = "Red";
	}
}

function checkWinner() { // Vérifie si toute les combinaisons possibles sont valides
  for (let i = 0; i < winPositions.length; i++) {
    if (
      document.getElementById(winPositions[i][0]).innerHTML === playerSymbol &&
      document.getElementById(winPositions[i][1]).innerHTML === playerSymbol &&
      document.getElementById(winPositions[i][2]).innerHTML === playerSymbol
      ) {
        if (round === 9) {
          
          if (playerSymbol == "x") {
            colorWinner() 
            document.getElementById("playerOne").style.backgroundColor="Red"
            document.getElementById("playerWinner").textContent = "GAGNE !!"
            gameFinished = true;
          } else if (playerSymbol == "o") {
            colorWinner()
            document.getElementById("playerTwo").style.backgroundColor="Red"
            document.getElementById("playerWinner2").textContent = "GAGNE !!"
            gameFinished = true;
          }

        } else if (playerSymbol == "x") {
            colorWinner() 
            document.getElementById("playerOne").style.backgroundColor="Red"
            document.getElementById("playerWinner").textContent = "GAGNE !!"
            gameFinished = true;
          } else if (playerSymbol == "o") {
            colorWinner()
            document.getElementById("playerTwo").style.backgroundColor="Red"
            document.getElementById("playerWinner2").textContent = "GAGNE !!"
            gameFinished = true;
          }
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
      }
      
    }
  );
} 
