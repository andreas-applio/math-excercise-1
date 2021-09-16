// Check that JavaScript file is loaded
console.log("script.js is loaded!")

let answer = document.querySelector("#answer");
let showQuestion = document.querySelector("#showQuestion");
let question = document.querySelector("#question");
let checkAnswer = document.querySelector("#checkAnswer");
let result = document.querySelector(".result");

let numberOne;
let numberTwo;
let correctAnswer;
let userAnswer;
let questionText;


showQuestion.addEventListener("click",
    function (event) {

        numberOne = Math.round(Math.random() * 10);
        numberTwo = Math.round(Math.random() * 10);
        correctAnswer = numberOne + numberTwo;

        questionText = "Fråga: Vad blir " + numberOne + " + " + numberTwo + "?";
        question.innerHTML = questionText;

    }
    , false);


checkAnswer.addEventListener("click",
    function (event) {

        if (answer.value == correctAnswer) {

            result.innerHTML = "Rätt";
            result.style.color = "blue";
        }
        else {

            result.innerHTML = "Fel";
            result.style.color = "red";
        }
    }
    , false);
