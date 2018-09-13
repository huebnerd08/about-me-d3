'use strict';
console.log('start');

var score = 0;
var correctAnswer = 'Hello';

//Start with the user's name
var userLogin = prompt('Thank you for visiting my site! What is your name?');
alert('Howdie, ' + userLogin + ', it\'s a pleasure to meet you. How well do you know me?');
console.log('User login is', userLogin);

//console.log variables
var logA = 'Your answer was ';
var logB = ' the correct answer is: ';

//What is my name?
function functionName() {
  var hostName = prompt('What is my name?');
  correctAnswer = hostName.toLowerCase();
  if ( correctAnswer === 'dashiell' || correctAnswer === 'dash') {
    console.log(logA + correctAnswer + logB + correctAnswer);
    alert('Well done, your answer was ' + correctAnswer + ' the correct answer is: ' + correctAnswer);
    score = score + 1;

  } else{ 
    console.log (logA + correctAnswer + logB + correctAnswer);
    alert ('No no no, ' + correctAnswer + ' is incorrect');
  }
}
//Get rid od the string text, and replace with variable

//Was I born in North Carolina?
function functionBirth() {
  var birthQ = prompt ('Was I born in North Carolina?');
  var birthA = birthQ.toLowerCase();
  correctAnswer = 'yes';
  if ( birthA === correctAnswer){
    console.log (logA + birthA + logB + correctAnswer);
    alert('Superb, your answer was ' + birthA + ' the correct answer is: ' + correctAnswer);
    score = score + 1;
  } else{
    console.log (logA + birthA + logB + correctAnswer);
    alert ('Nice guess, ' + birthA + ' is incorrect');
  }
}

//What month is my birthday?
function functionBday() {
  var bdayQ = prompt ('What month is my birthday?');
  var bdayA = bdayQ.toLowerCase();
  correctAnswer = 'september';
  if ( bdayA === correctAnswer){
    console.log (logA + bdayA + logB + correctAnswer);
    alert('Superb, your answer was ' + bdayA + ' the correct answer is: ' + correctAnswer);
    score = score + 1;

  } else{
    console.log (logA + bdayA + logB + correctAnswer);
    alert ('Nice guess, ' + bdayA + ' is incorrect');
  }
}

//Do I brush my teeth in the shower?
function functionBrush() {
  var brushQ = prompt('Do I brush my teeth in the shower?');
  var brushA = brushQ.toLowerCase();
  correctAnswer = 'no';
  if ( brushA === correctAnswer){
    console.log(logA + brushA + logB + correctAnswer);
    alert('Well done, your answer was ' + brushA + ' the correct answer is: ' + correctAnswer);
    score = score + 1;

  } else{ 
    console.log (logA + brushA + logB + correctAnswer);
    alert ('Grosssssss, ' + correctAnswer + ' is incorrect');
  }
}

//Do I like to sing karaoke?
function functionSing() {
  var singQ = prompt ('Do I like to sing karaoke?');
  var singA = singQ.toLowerCase();
  correctAnswer = 'no';
  if( singA === correctAnswer){
    console.log (logA + singA + logB + correctAnswer);
    alert ('You rock! Your answer was ' + singA + ' the correct answer is: ' + correctAnswer);
    score = score + 1;

  } else{
    console.log (logA + singA + logB + correctAnswer);
    alert ('Sorry, wrong answer ' + singA + ' is incorrect');
  }
}


//Do I like to take naps?
function functionNap() {
  var napQ = prompt ('Do I like to take naps?');
  var napA = napQ.toLowerCase();
  correctAnswer = 'yes';
  if(napA === correctAnswer){
    console.log (logA + napA + logB + correctAnswer);
    alert ('Yes!' + logA + napA + logB + correctAnswer);
    score = score + 1;

  } else{
    console.log (logA + napA + logB + correctAnswer);
    alert ('Not a chance! ' + napA + ' is incorrect');
  }
}

/*
//Cake or pie?
// var cakeQ = prompt ('Cake or pie?');
// var cakeA = cakeQ.toLowerCase();
// correctAnswer = 'pie';
// if( cakeA === correctAnswer){
  // console.log ('Your answer was ' + cakeA + ' the correct answer is: ' + correctAnswer);
  // alert ('Yes! Your answer was ' + cakeA + ' the correct answer is: ' + correctAnswer);
  // score = score + 1;

// } else{
  // console.log ('Your answer was ' + cakeA + ' the correct answer is: ' + correctAnswer);
  // alert ('Nice try! ' + cakeA + ' is incorrect');
// }

//Do I own a segway?
// var segQ = prompt ('Do I own a segway?');
// var segA = segQ.toLowerCase();
// correctAnswer = 'no';
// if( segA === correctAnswer){
  // console.log ('Your answer was ' + segA + ' the correct answer is: ' + correctAnswer);
  // alert ('Yes! Your answer was ' + segA + ' the correct answer is: ' + correctAnswer);
  // score = score + 1;

// } else{
  // console.log ('Your answer was ' + segA + ' the correct answer is: ' + correctAnswer);
  // alert (segA + ' is incorrect');
// }
*/

//How many countries have I visited?
function functionVisit() {
  correctAnswer = '15';

  for(var i = 0; i <= 4; i++) {
    var visitQ = prompt ('How many countries have I visited?');
    if(visitQ === correctAnswer) {
      alert ('You are correct!');
      score = score + 1;
      break;
    } else if (visitQ > 15) {
      alert ('Guess a lower number');
    } else if (visitQ < 15) {
      alert ('Go higher');
    } else {
      alert ('You must enter an answer');
    }
  }
}

//Can you guess the countries I have lived in besides the United States?
function functionLive() {
  var liveQ = prompt ('Can you guess the countries I have lived in besides the United States?');
  correctAnswer = ['ecuador','ethiopia','liberia'];
  var liveA = liveQ.toLowerCase();
  var answerRight = false;

  for(var j = 0; j <= 6; j++) {
    for(let k = 0; k < correctAnswer.length; k++ ) {
      if (correctAnswer[k] === liveA) {
        answerRight = true;
      }
    }
    if(answerRight) {
      alert ('Great job!');
      score = score + 1;
      break;

    } else {
      liveQ = prompt ('Try again');
      liveA = liveQ.toLowerCase();
    } 

  }
}

functionName();
functionBirth();
functionBday();
functionBrush();
functionSing();
functionNap();
functionVisit();
functionLive();
