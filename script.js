var time = 10;
var score = 0;
var playing;

var currentWord = document.getElementById('selectedWord')
document.getElementById('score')
var userWord = document.getElementById('userInput')
var timer = document.getElementById('timeDisplay')

var words = ["apple", "pear", "tomato", "potato"]

window.onload = init;

function init(){
  showWord(words);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 40);
}

function showWord(words){
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randomIndex];
}

function countdown(){
  if(time > 0){
    time--;
  } else if (time == 0){
    playing = false 
  }
  timer.innerHTML = time;
}

function checkStatus(){
  if(!playing && time == 0){
    document.body.innerHTML = "GAME OVER";
  }
}

window.addEventListener('input', checkWord);

function startMatch(){
  
}

function checkWord(){
  if(userWord.value == currentWord.innerHTML) {
    showWord(words);
    message.innerHTML = "Correct!"
  } else{
    message.innerHTML = "False!"
  }
}

