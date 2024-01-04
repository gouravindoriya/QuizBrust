
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
let correct_ans=0;
let temp=0;
let wronglist=[];
function loaddata(dataxml,count){

   temp++;
  globalcount++;
   if(globalcount==11){
       globalcount=0;


       document.getElementById("q10").innerHTML=`
       <div style="
          background: #e1f5fe;
          border: 2px solid rgb(120, 120, 120);
          border-radius: 4px;
          padding: 8px;
           margin: 20px 40%;
            text-align: center;
             font-family: 'Arial', sans-serif;
              font-size: 16px; color: rgb(51, 51, 51);
              ">score: ${correct_ans} /10</div>`;
       document.getElementById("q10").style.overflow= 'scroll';
    

       for (let i = 0; i < 10; i++) {
        let wrongQues = document.createElement('div');
        wrongQues.id = 'wrongQues_' + i;
        wrongQues.className = 'wrongQues';
        wrongQues.innerHTML = `<div>${i + 1}. ${data1[i].question}</div><div>Correct Answer: ${data1[i].correct_answer}</div>`;
        document.getElementById("q10").appendChild(wrongQues);
      }

      let parentDiv = document.getElementById("q10");

wronglist.forEach(index => {

  if (index >= 0 && index < parentDiv.children.length) {

    parentDiv.children[index+1].style.backgroundColor = 'lightgreen';
  }
});

   }
  document.getElementById("q10_fdata").innerHTML=`${globalcount} of 10 question`;
 if (globalcount==10){
  document.getElementById("q10_next").innerText="submit";

 
  

  }
  if(globalcount==0){document.getElementById("q10_next").innerText="next";}

 let data = data1[count];
  
  data.incorrect_answers.push(data.correct_answer);
  shuffle(data.incorrect_answers);

  document.getElementById(`q10_question`).innerHTML=`${data.question}`
  document.getElementById(`q10category`).innerHTML=`${data.category}`

     for(let i=1;i<5;i++){
let option=document.getElementById(`option${i}`);

option.innerHTML= `${"  "}  ${data.incorrect_answers[i-1]}`;

  option.addEventListener("click",(e)=>{
    document.getElementById("q10_next").style.pointerEvents= "auto";
    document.getElementById("q10_next").style.opacity= "1";
    option.style.background= "lightgreen";
    if(e.target.innerText==data.correct_answer){
    
     correct_ans++;
     wronglist.push(globalcount-1);
     
  }
 
 

  const divs = document.querySelectorAll('.q10_option div');
  divs.forEach(div => {
  div.style.pointerEvents= "none";

      });
   })
}












}


















let data1; 
function load(count){ 

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple', true);
// xhr.open('GET', 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple', true);

xhr.onreadystatechange = function () {
//  
  if (xhr.readyState == 4) {
      if (xhr.status == 200) {
          // var value1 = JSON.parse(xhr.responseText);
          data1 = JSON.parse(xhr.responseText).results;
           loaddata(data1,count);
          

      } else {
          console.error('Error fetching data. Status:', xhr.status);
      }
  }
};
xhr.send();
} // isko
// alert(data);


load(0);
// document.getElementById("q10_next").addEventListener("click",load(1));
let ee=document.getElementById("q10_next");
ee.addEventListener("click",()=>{
  // ee.style.color="red";

    ee.style.pointerEvents= "none";
    ee.style.opacity= ".4";

   const divs = document.querySelectorAll('.q10_option div');
   divs.forEach(div => {
   div.style.borderColor = "rgb(144, 144, 255";
   div.style.pointerEvents= "auto";
   div.style.background= "white";

    });
 
  loaddata(data1,temp);
});
  



