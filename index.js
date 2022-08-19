// // // //Factory Function
// // // function createCircle(radius) {
// // //   return {
// // //     radius,
// // //     draw: function () {
// // //       console.log("here is draw");
// // //     },
// // //   };
// // // }
// // // const circle = createCircle(2);
// // // Circle.draw();
// // ////constructor Function
// // function Circle(radius) {
// //   console.log("this", this);
// //   this.radius = radius;
// //   this.draw = function () {
// //     console.log("draw");
// //   };
// // }
// // const another = new Circle(4);
// // for (let key in another) {
// //   console.log(key, another[key]);
// // }
// // const keys = Object.keys(another);
// // console.log("key", keys);
// // // let x={}//any object
// // // new String()// ',",",`
// // // new Boolean()//true,false
// // // new number()///111,22,....
// // let x = { value: 20 };
// // let y = x;
// // x.value = 40;
// // //swap without using extra variable
// // let a = 20;
// // let b = 40;
// // b = b - a;
// // a = b + a;

// // //calculater using one number
// // let number = { value: 100 };
// // function increase(number) {
// //   number.value++;
// // }
// // increase(number);
// // console.log("here is the number", number);

// //stopWatch

// function Stopwatch() {
//   let startTime,
//     endTime,
//     running,
//     duration = 0;

//   Object.defineProperty(this, "duration", {
//     get: function () {
//       return duration;
//     },
//   });
// }

// Stopwatch.prototype.start = function () {
//   if (running) throw new Error("Stopwatch has already started.");

//   running = true;

//   startTime = new Date();
// };

// Stopwatch.prototype.stop = function () {
//   if (!running) throw new Error("Stopwatch is not started.");

//   running = false;

//   endTime = new Date();

//   const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//   duration += seconds;
// };

// Stopwatch.prototype.reset = function () {
//   startTime = null;
//   endTime = null;
//   running = false;
//   duration = 0;
// };

// //////inheritance
// let person = { name: "hannan" };
// console.log(Object.keys(person));
// let prototype = Object.getPrototypeOf(person);
// console.log("prototype", prototype);
// let descripter = Object.getOwnPropertyDescriptor(person);
// console.log("here is the ", descripter);

//<========HERE IS THE CODE================>

function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    //showQuestions()
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;
    var choices = quiz.getQuestionIndex().choices;

    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }
    showProgress();
  }
}
function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  };
}
function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML =
    "question" + currentQuestionNumber + "of" + quiz.questions.length;
}
function showScores() {
  var gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += "<h2 id='score'>Your Score" + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
}

var questions = [
  new question(
    "How do you initialize an array in C?",
    [
      "int arr[3] = (1,2,3)",
      " int arr(3) = {1,2,3}",
      " int arr[3] = {1,2,3};",
      " int arr(3) = (1,2,3);",
    ],
    " int arr[3] = {1,2,3}"
  ),
  new question(
    " How do you instantiate an array in Java?",
    [
      " int arr[] = new int(3);",
      " int arr[];",
      " int arr[] = new int[3];",
      "  int arr() = new int(3);",
    ],
    " int arr[] = new int[3];"
  ),
  new question(
    "  C++ is an object oriented language, and C, BASIC, and Pascal are _____ languages.",
    [" procedural", " scripting", " general purpose", " web based"],
    "procedural"
  ),
  new question(
    "   A computer program that translates one statement of program instructions at a time into machine language is called.",
    [" CPU", "  Interpreter", "  Compiler", "  Simulator"],
    "Interpreter"
  ),
  new question(
    " NTFS stands for?",
    [
      " New Trend File Saving",
      "  Network File Saving",
      "   New Technology File System",
      "  None Of These",
    ],
    "New Technology File System"
  ),
];
var quiz = new Quiz(questions);

populate();
