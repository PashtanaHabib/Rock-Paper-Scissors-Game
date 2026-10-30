/*
    Rahnama:

    playCorrect() , playInCorrect() 

    setCpuHand('sang') : sang ra be karbar neshan midahad 
    setCpuHand('kaghaz') : kaghaz ra be karbar neshan midahad 
    setCpuHand('gheychi') : gheychi ra be karbar neshan midahad 

    setScore(10): emtiaz 10 ra be karbar neshan midadah

    setBgColor('#00ff00'): range background ra sabz mikonad
    setBgColor('#ff0000'): range background ra ghermez mikonad

    cpuHand,userHand --> Sang , Kaghaz , Gheychi

    score

*/

//------- variable definiation ------------------
let cpuHand,
  score = 0;
let audioCorrect = new Audio("sounds/correct.mp3");
let audioInCorrect = new Audio("sounds/incorrect.mp3");
const cpuImage = document.getElementById("cpu");
const h1 = document.getElementById("score");
//------------------------------------------------

generateHand();

function generateHand() {
  let random = Math.floor(Math.random() * 3) + 1;

  if (random === 1) cpuHand = "sang";
  else if (random === 2) cpuHand = "kaghaz";
  else if (random === 3) cpuHand = "gheychi";

  setCpuHand(cpuHand);
}

function check(userHand) {
  let isWin = false;

  if (cpuHand === "sang" && userHand === "kaghaz") isWin = true;
  else if (cpuHand === "kaghaz" && userHand === "gheychi") isWin = true;
  else if (cpuHand === "gheychi" && userHand === "sang") isWin = true;

  if (isWin) {
    nextLevel();
  } else {
    endGame();
  }
}

function nextLevel() {
  playCorrect();
  score++;
  setScore(score);
  generateHand();
}

function endGame() {
  playInCorrect();
  setScore("امتیاز شما: " + score + " دوباره بازی کن!");
  generateHand();
  score = 0;
}

// ------ DOM Function --------------------

function setCpuHand(hand) {
  if (hand === "sang") cpuImage.src = "images/rock.png";
  else if (hand === "kaghaz") cpuImage.src = "images/paper.png";
  else if (hand === "gheychi") cpuImage.src = "images/scissor.png";
}

function setScore(text) {
  h1.innerText = text;
}

//------ Audio Function ----------

function playCorrect() {
  audioInCorrect = new Audio("sounds/correct.mp3");
  audioInCorrect.play();
}

function playInCorrect() {
  audioInCorrect = new Audio("sounds/incorrect.mp3");
  audioInCorrect.play();
}

// ------- Exercise -------------

function setBgColor(color) {
  document.querySelector(".main").style.backgroundColor = color;
}
