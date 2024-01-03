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
   
    // Add more questions here...
    // m baad m add kruga
];
const math = [
    {
        "options": ["0", "1", "2", "3"],
        "question": "What is the smallest prime number?",
        "correctOption": 2 // Index of the correct option (2)
    },
    {
        "question": "What is the result of 2 + 2?",
        "options": ["3", "4", "5", "6"],
        "correctOption": 1 // Index of the correct option (1)
    },
    {
        "question": "What is the square root of 16?",
        "options": ["2", "4", "8", "16"],
        "correctOption": 1 // Index of the correct option (1)
    },
    {
        "question": "How many sides does a triangle have?",
        "options": ["2", "3", "4", "5"],
        "correctOption": 1 // Index of the correct option (1)
    },
    {
        "question": "What is the largest prime number less than 10?",
        "options": ["5", "7", "11", "13"],
        "correctOption": 1 // Index of the correct option (1)
    },
    {
        "question": "What is the result of 8 divided by 2?",
        "options": ["2", "4", "6", "8"],
        "correctOption": 0 // Index of the correct option (0)
    },
    {
        "question": "What is the product of 7 and 9?",
        "options": ["14", "63", "45", "18"],
        "correctOption": 1 // Index of the correct option (1)
    },
    {
        "question": "What is the square of 5?",
        "options": ["10", "15", "25", "30"],
        "correctOption": 2 // Index of the correct option (2)
    },
    {
        "question": "What is the result of 12 minus 8?",
        "options": ["2", "4", "6", "8"],
        "correctOption": 1 // Index of the correct option (1)
    },
    {
        "question": "What is the product of 3 and 7?",
        "options": ["10", "21", "24", "35"],
        "correctOption": 1 // Index of the correct option (1)
    },
    {
        "question": "What is 7 multiplied by 5?",
        "options": ["25", "30", "35", "40"],
        "correctOption": 2 // Index of the correct option (2)
    },
    {
        "question": "What is 10 divided by 2?",
        "options": ["2", "4", "5", "6"],
        "correctOption": 2 // Index of the correct option (2)
    },
    {
        "question": "What is the result of 5 plus 3?",
        "options": ["6", "7", "8", "9"],
        "correctOption": 2 // Index of the correct option (2)
    },
    {
        "question": "What is the square root of 9?",
        "options": ["3", "6", "9", "12"],
        "correctOption": 0 // Index of the correct option (0)
    },
    {
        "question": "What is 4 multiplied by 5?",
        "options": ["10", "15", "20", "25"],
        "correctOption": 2 // Index of the correct option (2)
    },
    {
        "question": "What is the result of 18 divided by 3?",
        "options": ["4", "6", "8", "9"],
        "correctOption": 1 // Index of the correct option (1)
    },
    {
        "question": "What is the largest prime number less than 20?",
        "options": ["17", "19", "21", "23"],
        "correctOption": 1 // Index of the correct option (1)
    },
    {
        "question": "What is 6 plus 7?",
        "options": ["11", "12", "13", "14"],
        "correctOption": 2 // Index of the correct option (2)
    },
    {
        "question": "What is 15 divided by 3?",
        "options": ["3", "5", "10", "15"],
        "correctOption": 1 // Index of the correct option (1)
    },
    {
        "question": "What is 11 multiplied by 4?",
        "options": ["33", "44", "55", "66"],
        "correctOption": 1 // Index of the correct option (1)
    },
    // Add more math questions here
];
