const colorToGuess = document.getElementById("colorToGuess");
const allBoxes = document.querySelectorAll(".box");
const newColBtn = document.getElementById("newColBtn")
const winMsg = document.getElementById("isCorrectMsg");
const displayScore = document.getElementById("score")

let neWColor = null;
let score = 0;
let guessing = false;

allBoxes.forEach((colorBox) => {
colorBox.addEventListener("click", () => {

    if(guessing){
    if(neWColor === colorBox.style.backgroundColor){
    console.log("correct")
    } else {
        colorBox.style.opacity = 0;
    }
}
    
})



})

const correct = () => {
    guessing = false;
  winMsg.textContent = "correct!"
  score++
  displayScore.textcontent = score


for( let i = 0; i < allBoxes.length; i++){
    allBoxes[i].style.opacity = 1
    allBoxes[i].style.backgroundColor = neWColor
}
}








const resetGame = () => {
    guessing = true;
    winMsg.textContent = ""
   
    for(let i = 0; i < allBoxes.length; i++){
      

       allBoxes[i].style.backgroundColor = `rgb(${Math.round( Math.random() * 255 )},${Math.round( Math.random() * 255 )},${Math.round( Math.random() * 255 )})`
      

}

let itemToGuess = allBoxes[Math.floor(Math.random() * allBoxes.length) ]

neWColor = itemToGuess.style.backgroundColor

colorToGuess.textContent = neWColor;

}


resetGame()

newColBtn.addEventListener("click", resetGame)