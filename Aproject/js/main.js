//사용변수
const GAME_TIME = 10;
let score = 0;
let time = GAME_TIME;
let isPlaying = false;
let timeInterval;
let checkInterval;
let words = [];

const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('.button');

init();

function init() {
    getWords();
    wordInput.addEventListener('input', checkMatch) 
 }

 //게임 실행
function run(){
    if(isPlaying){
        return;
    }
    isPlaying =true;
    time = GAME_TIME;
    wordInput.focus();
    scoreDisplay.innerText = 0
    timeInterval = setInterval(countDown, 1000);
    checkInterval = setInterval(checkStatus, 50)
    buttonChange('게임중')
}

function checkStatus(){
    if(!isPlaying && time === 0){
        buttonChange("게임시작")
        clearInterval(checkInterval)
    }
}


 //단어 불러오기
 //이 글자를 작성해야 점수 획득 = 아마도 이곳에 티쳐블 머신 코드 넣으면 될 듯?
function getWords(){
    words =[ 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅍ', 'ㅎ'];
    buttonChange('게임시작')
}


//단어 일치 체크
 function checkMatch(){
    if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
        wordInput.value = "";
        if(!isPlaying){
            return
        }
        score++;
        scoreDisplay.innerText = score;
        time = GAME_TIME;
        const randomIndex = Math.floor(Math.random() * words.length);
        wordDisplay.innerText = words[randomIndex];
    }
 }

//setInterval(countDown, 1000);


//남은 시간 기능 구형
function countDown(){
    // (조건) ? 참일 경우 : 거짓일 경우
    time > 0 ? time-- : isPlaying = false;
    if(!isPlaying){
        clearInterval(timeInterval)
    }
    timeDisplay.innerText = time;
}

function buttonChange(text){
    button.innerText = text;
    text === '게임시작' ? button.classList.remove('loading') : button.classList.add('loading')
}


let video;

let classifier;

let label = '기다리세요...';

function preload(){
  classifier =
ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pAZ9EKSnhk/model.json");
}

function setup(){
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  
  classifiyVideo();
}

function classifiyVideo(){
  classifier.classify(video, gotResult);
}

function draw() {
  background(0);
  image(video,0,0);
  
  textSize(32);
  textAlign(CENTER,CENTER);
  fill(255);
  text(label, width/2, height -16);
}

function gotResult(error, results){
  if(error){
    console.log(error);
    return;
  }
  console.log(results[0].label);
  label = results[0].label;
  
  classifiyVideo()
}
