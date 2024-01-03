
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}
let globalcount=0;
let correct_answer=0;
function loaddata(dataxml,count){


  globalcount++;
   if(globalcount==11){
       globalcount=0;
       document.getElementById("q10").innerHTML=`<div>score: ${correct_answer}</div>`;
   }
  document.getElementById("q10_fdata").innerHTML=`${globalcount} of 10 question`;
 if (globalcount==10){
  document.getElementById("q10_next").innerText="submit";
  // globalcount=0;
  }
  if(globalcount==0){document.getElementById("q10_next").innerText="next";}





  data = dataxml[count];
  data.incorrect_answers.push(data.correct_answer);
  shuffle(data.incorrect_answers);
  console.log(data.incorrect_answers);
  document.getElementById(`q10_question`).innerHTML=`${data.question}`
  document.getElementById(`q10category`).innerHTML=`${data.category}`
     for(let i=1;i<5;i++){
let option=document.getElementById(`option${i}`);
option.innerHTML= `${i}  ${data.incorrect_answers[i-1]}`;
    

option.addEventListener("click",()=>{
  if(data.correct_answer==data.incorrect_answers[i-1]){
  option.style.borderColor="green";
  
  correct_answer++;
  }
  else
  { 
      option.style.borderColor="red"; 
  }
})
}
}


function load(count){ 
var data;   
var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple', true);
xhr.open('GET', 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple', true);

xhr.onreadystatechange = function () {
//  
  if (xhr.readyState == 4) {
      if (xhr.status == 200) {
          var value1 = JSON.parse(xhr.responseText);
          
          data = value1.results;          // change kr rha hu isko 
           loaddata(data,count);
//             data = value1.results[count];
//             data.incorrect_answers.push(data.correct_answer);
//             shuffle(data.incorrect_answers);
//             console.log(data.incorrect_answers);
//             document.getElementById(`q10_question`).innerHTML=`${data.question}`
//             document.getElementById(`q10category`).innerHTML=`${data.category}`
//                for(let i=1;i<5;i++){
//          let option=document.getElementById(`option${i}`);
//           option.innerHTML= `${i}  ${data.incorrect_answers[i-1]}`;
            

//           option.addEventListener("click",()=>{
//             if(data.correct_answer==data.incorrect_answers[i-1]){
//             option.style.borderColor="green";
          
//             correct_answer++;
//             }
//             else
//             { 
//                 option.style.borderColor="red"; 
//             }
//           })
// // timer for the countdown 


// // //  timer 
// // let initialSeconds = 30;
// // let seconds = initialSeconds;

// // const countdownElement = document.getElementById('q10_timer');
// // countdownElement.innerHTML="30";
// // const countdownInterval = setInterval(() => {
// //   if (seconds > 0) {
// //     seconds--;
// //     updateCountdownDisplay();
// //   } else {
// //     clearInterval(countdownInterval);
// //     countdownElement.textContent = 'Countdown Expired';
// //   }
// // }, 1000);
// // clearInterval(countdownInterval);
// // // Function to reset the countdown


// // function updateCountdownDisplay() {
// //   const formattedTime = `${String(seconds).padStart(2, '0')}`;
// //   countdownElement.innerHTML = formattedTime;
// // }

// // Example of resetting the countdown, you can call this function when needed
// // resetCountdown();
// //  timer code
      
      
// }
      } else {
          console.error('Error fetching data. Status:', xhr.status);
      }
  }
};

xhr.send();
} // isko



load(1);
// document.getElementById("q10_next").addEventListener("click",load(1));
let ee=document.getElementById("q10_next");
ee.addEventListener("click",()=>{
  // ee.style.color="red";
   const divs = document.querySelectorAll('.q10_option div');
   divs.forEach(div => {
   div.style.borderColor = "rgb(144, 144, 255";
});
  load(4);
});


