// data
const quizData = [

    {
        "question": "What is the capital of Japan?",
        "options": ["Beijing", "Tokyo", "Seoul", "Bangkok"],
        "correctOption": 1
    },
    {
        "question": "Who wrote the play 'Romeo and Juliet'?",
        "options": ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Jane Austen"],
        "correctOption": 1
    },
    {
        "question": "What is the chemical symbol for water?",
        "options": ["H2O", "O2", "CO2", "H2SO4"],
        "correctOption": 0
    },
    {
        "question": "Which gas is responsible for the greenhouse effect?",
        "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
        "correctOption": 1
    },
    {
        "question": "What is the largest ocean on Earth?",
        "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "correctOption": 3
    },
    {
        "question": "Who is known as the father of modern physics?",
        "options": ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"],
        "correctOption": 2
    },
    {
        "question": "Which planet is known as the 'Red Planet'?",
        "options": ["Venus", "Mercury", "Mars", "Jupiter"],
        "correctOption": 2
    },
    {
        "question": "What is the smallest country in the world?",
        "options": ["Russia", "Canada", "Monaco", "Australia"],
        "correctOption": 2
    },
    // Add more questions in the same format...
    {
        "question": "What is the freezing point of water in Fahrenheit?",
        "options": ["32°F", "0°F", "212°F", "100°F"],
        "correctOption": 0
    },
    {
        "question": "Who is the author of 'Pride and Prejudice'?",
        "options": ["Charlotte Brontë", "Emily Brontë", "Jane Austen", "Louisa May Alcott"],
        "correctOption": 2
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctOption: 1 // Index of the correct option (Blue Whale)
    },
    {
        
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
        correctOption: 1 // Index of the correct option (Carbon Dioxide)
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Au", "Gd", "Gl"],
        correctOption: 1 // Index of the correct option (Au)
    },
    {
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        options: ["Venus", "Mercury", "Mars", "Jupiter"],
        correctOption: 0 // Index of the correct option (Venus)
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Brain", "Skin", "Lungs"],
        correctOption: 2 // Index of the correct option (Skin)
    },
    {
        question: "Which country is famous for its pyramids?",
        options: ["Greece", "Italy", "Egypt", "India"],
        correctOption: 2 // Index of the correct option (Egypt)
    },
    {
        question: "What is the chemical symbol for oxygen?",
        options: ["Ox", "O", "Oy", "Oxg"],
        correctOption: 1 // Index of the correct option (O)
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Neptune"],
        correctOption: 1 // Index of the correct option (Jupiter)
    },
    {
        question: "Which gas is responsible for the green color of plants?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Chlorophyll"],
        correctOption: 3 // Index of the correct option (Chlorophyll)
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctOption: 2 // Index of the correct option (2)
    }
    // Add more questions here...
    // m baad m add kruga
];
//logic
function nextQuextion() {
    let randomNumber = Math.floor(Math.random() * quizData.length);
    let quiz = quizData[randomNumber];
    let QuizQuestion = quiz.question;
    let option1 = quiz.options[0];
    let option2 = quiz.options[1];
    let option3 = quiz.options[2];
    let option4 = quiz.options[3];
    let correctOption = quiz.correctOption + 1;


    console.log(correctOption);
    console.log(QuizQuestion);
    console.log(option1);
    console.log(option2);
    console.log(option3);
    console.log(option4);


    document.getElementById("daily_quiz").innerHTML = QuizQuestion;
    document.getElementById("daily_quiz_option1").innerHTML = option1;
    document.getElementById("daily_quiz_option2").innerHTML = option2;
    document.getElementById("daily_quiz_option3").innerHTML = option3;
    document.getElementById("daily_quiz_option4").innerHTML = option4;


    function clear1() {
        document.getElementById("daily_quiz_option").style.backgroundColor = "transparent";
    }
    function answer_true() {
        document.getElementById("daily_quiz_option").style.backgroundColor = "green";
        let timeout;
        function get_new_question() {
            timeout = setTimeout(nextQuextion, 450);
            timeout = setTimeout(clear1, 100);

        }
        get_new_question();
    }
    function answer_false() {
        document.getElementById("daily_quiz_option").style.backgroundColor = "red";
        let timeout;
        function clearstyle() {
            timeout = setTimeout(clear1, 250);
        }
        clearstyle();

    }




    const button1 = document.getElementById('daily_quiz_option1');
    button1.addEventListener('click', function (event) {
        if (correctOption == 1) {
            console.log("true");
            answer_true();
        }
        else {
            console.log("false");
            answer_false();
        }
    });
    const button2 = document.getElementById('daily_quiz_option2');
    button2.addEventListener('click', function (event) {
        if (correctOption == 2) {
            console.log("true");
            answer_true();
        }
        else {
            console.log("false");
            answer_false();
        }
    });
    const button3 = document.getElementById('daily_quiz_option3');
    button3.addEventListener('click', function (event) {
        if (correctOption == 3) {
            console.log("true");
            answer_true();
        }
        else {
            console.log("false");
            answer_false();
        }
    });
    const button4 = document.getElementById('daily_quiz_option4');
    button4.addEventListener('click', function (event) {
        if (correctOption == 4) {
            console.log("true");
            answer_true();
        }
        else {
            console.log("false");
            answer_false();
        }
    });





}

// running the function
nextQuextion();