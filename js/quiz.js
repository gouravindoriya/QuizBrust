document.getElementById("QuizContainer-options").innerHTML = "<div id='correct' >Lets start</div>";

let numberOfQuestion = 0;
function fetch() {


  function startAnimation() {
    var progressBar = document.getElementById('timersize');
    progressBar.style.animation = 'none';

    // Trigger reflow to reset the animation
    void progressBar.offsetWidth;

    progressBar.style.animation = 'timewidth 15s linear';
    progressBar.addEventListener('webkitAnimationEnd', function(e) {
      document.getElementById("QuizContainer-options").innerHTML = "<div id='correct'> time up</div>";
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    startAnimation();

  });
  startAnimation();

  const option_box = document.getElementById("QuizContainer-options");



  option_box.innerHTML = `  <div id="option-1" class="option">
    option
  </div>
  <div id="option-2" class="option">
    option
  </div>
  <div id="option-3" class="option">
    option
  </div>
  <div id="option-4" class="option">
    option
  </div>`;
  option_box.style.display = "flex";
  option_box.style.flexDirection = "column";
  option_box.style.justifyContent = "center";
  option_box.style.alignItems = "center";




  function correct_ans() {
    document.getElementById("win").play();
    let element1 = document.getElementById("QuizContainer-options");
    option_box.style.height = `${height_quizContainer + 70}px`;
    option_box.style.display = "block";
    option_box.innerHTML = "<div id='correct'>correct</div>";
    var progressBar = document.getElementById('timersize');
    progressBar.style.animation = 'none';
  }
  function wrong_ans() {
    document.getElementById("lose").play();
    let element1 = document.getElementById("QuizContainer-options");
    option_box.style.height = `${height_quizContainer + 70}px`;
    option_box.style.display = "block";
    option_box.innerHTML = "<div id='correct' >wrong</div>";
    var progressBar = document.getElementById('timersize');
    progressBar.style.animation = 'none';

  }

  let randomNumber = Math.floor(Math.random() * quizData.length);
  let quiz = quizData[randomNumber];

  let QuizQuestion = quiz.question;
  let option1 = quiz.options[0];
  let option2 = quiz.options[1];
  let option3 = quiz.options[2];
  let option4 = quiz.options[3];
  let correctOption = quiz.correctOption + 1;

  let question = document.getElementById("QuizContainer-question");
  var height_quizContainer = question.getBoundingClientRect().height;
  // alert(height_quizContainer);
  // console.log(height_quizContainer);

  question.innerHTML = `${QuizQuestion}`;

  let option_1 = document.getElementById("option-1");
  option_1.innerHTML = `${option1}`;
  let option_2 = document.getElementById("option-2");
  option_2.innerHTML = `${option2}`;
  let option_3 = document.getElementById("option-3");
  option_3.innerHTML = `${option3}`;
  let option_4 = document.getElementById("option-4");
  option_4.innerHTML = `${option4}`;






  option_1.addEventListener("click", () => {

    if (correctOption == 1) {
      correct_ans();
    }
    else {
      wrong_ans();
    }

  })
  option_2.addEventListener("click", () => {
    if (correctOption == 2) {
      correct_ans();
    } else {
      wrong_ans();
    }

  })
  option_3.addEventListener("click", () => {
    if (correctOption == 3) {
      correct_ans();
    } else {
      wrong_ans();
    }

  })
  option_4.addEventListener("click", () => {
    if (correctOption == 4) {
      correct_ans();
    } else {
      wrong_ans();
    }

  })
}
function mathdata() {

  function startAnimation() {
    var progressBar = document.getElementById('timersize');
    progressBar.style.animation = 'none';

    // Trigger reflow to reset the animation
    void progressBar.offsetWidth;

    progressBar.style.animation = 'timewidth 15s linear';
    progressBar.addEventListener('webkitAnimationEnd', function(e) {
      document.getElementById("QuizContainer-options").innerHTML = "<div id='correct'> time up</div>";
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    startAnimation();

  });
  startAnimation();

  const option_box = document.getElementById("QuizContainer-options");



  option_box.innerHTML = `  <div id="option-1" class="option">
    option
  </div>
  <div id="option-2" class="option">
    option
  </div>
  <div id="option-3" class="option">
    option
  </div>
  <div id="option-4" class="option">
    option
  </div>`;
  option_box.style.display = "flex";
  option_box.style.flexDirection = "column";
  option_box.style.justifyContent = "center";
  option_box.style.alignItems = "center";




  function correct_ans() {
    document.getElementById("win").play();
    let element1 = document.getElementById("QuizContainer-options");
    option_box.style.height = `${height_quizContainer + 70}px`;
    option_box.style.display = "block";
    option_box.innerHTML = "<div id='correct'>correct</div>";
    var progressBar = document.getElementById('timersize');
    progressBar.style.animation = 'none';
  }
  function wrong_ans() {
    document.getElementById("lose").play();
    let element1 = document.getElementById("QuizContainer-options");
    option_box.style.height = `${height_quizContainer + 70}px`;
    option_box.style.display = "block";
    option_box.innerHTML = "<div id='correct' >wrong</div>";
    var progressBar = document.getElementById('timersize');
    progressBar.style.animation = 'none';

  }

  let randomNumber = Math.floor(Math.random() * math.length);
  let quiz = math[randomNumber]
  let QuizQuestion = quiz.question;
  let option1 = quiz.options[0];
  let option2 = quiz.options[1];   
  let option3 = quiz.options[2];
  let option4 = quiz.options[3];
  let correctOption = quiz.correctOption + 1;

  let question = document.getElementById("QuizContainer-question");
  var height_quizContainer = question.getBoundingClientRect().height;
  // alert(height_quizContainer);
  // console.log(height_quizContainer);

  question.innerHTML = `${QuizQuestion}`;

  let option_1 = document.getElementById("option-1");
  option_1.innerHTML = `${option1}`;
  let option_2 = document.getElementById("option-2");
  option_2.innerHTML = `${option2}`;
  let option_3 = document.getElementById("option-3");
  option_3.innerHTML = `${option3}`;
  let option_4 = document.getElementById("option-4");
  option_4.innerHTML = `${option4}`;






  option_1.addEventListener("click", () => {

    if (correctOption == 1) {
      correct_ans();
    }
    else {
      wrong_ans();
    }

  })
  option_2.addEventListener("click", () => {
    if (correctOption == 2) {
      correct_ans();
    } else {
      wrong_ans();
    }

  })
  option_3.addEventListener("click", () => {
    if (correctOption == 3) {
      correct_ans();
    } else {
      wrong_ans();
    }

  })
  option_4.addEventListener("click", () => {
    if (correctOption == 4) {
      correct_ans();
    } else {
      wrong_ans();
    }

  })
}


let btn1 = document.getElementById("QuizContainer-btn1");
let btn2 = document.getElementById("QuizContainer-btn2");
// let btn3 = document.getElementById("QuizContainer-btn3");

btn1.addEventListener("click", fetch);
btn2.addEventListener("click", mathdata);
// btn3.addEventListener("click", fetch);