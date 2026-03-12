const quizData = [

{
question: "What does HTML stand for?",
options: [
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyper Tool Mark Language",
"Home Tool Mark Language"
],
correct: 0
},

{
question: "Which language is used for styling?",
options: [
"HTML",
"CSS",
"Python",
"Java"
],
correct: 1
},

{
question: "Which language runs in browser?",
options: [
"Java",
"C",
"Python",
"JavaScript"
],
correct: 3
}

];

const question = document.getElementById("question");
const options = document.querySelectorAll(".option");
const next = document.getElementById("next");
const scoreText = document.getElementById("score");
const questionNumber = document.getElementById("question-number");
const progress = document.getElementById("progress");
const timerText = document.getElementById("timer");

const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");

let currentQuestion = 0;
let score = 0;

let timeLeft = 30;
let timer;

function loadQuestion(){

let q = quizData[currentQuestion];

questionNumber.textContent = "Question " + (currentQuestion + 1) + " / " + quizData.length;

progress.style.width = (currentQuestion / quizData.length) * 100 + "%";

question.textContent = q.question;

options.forEach((btn,index)=>{
btn.textContent = q.options[index];
});

options.forEach(btn => btn.classList.remove("selected"));

clearInterval(timer);
startTimer();

}

function startTimer(){

timeLeft = 30;

timerText.textContent = "Time Left: " + timeLeft + "s";

timer = setInterval(function(){

timeLeft--;

timerText.textContent = "Time Left: " + timeLeft + "s";

if(timeLeft === 0){

clearInterval(timer);
next.click();

}

},1000);

}

options.forEach((btn,index)=>{

btn.addEventListener("click",()=>{

options.forEach(button => button.classList.remove("selected"));

btn.classList.add("selected");

if(index === quizData[currentQuestion].correct){

score++;

}

});

});

next.addEventListener("click",()=>{

currentQuestion++;

if(currentQuestion < quizData.length){

loadQuestion();

}else{

progress.style.width = "100%";

question.textContent = " Quiz Finished!";

scoreText.textContent = "Your Score: " + score + " / " + quizData.length;

options.forEach(btn => btn.style.display="none");

next.style.display="none";

timerText.style.display="none";

}

});

startBtn.addEventListener("click", function(){

startScreen.style.display = "none";

quizScreen.style.display = "block";

loadQuestion();

});