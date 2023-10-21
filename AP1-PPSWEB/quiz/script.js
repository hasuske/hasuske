const questions = [
    {
        question: "Quem é considerado o pai da computação?",
        image: "img/turing.jpg",
        options: ["Alan Turing", "Thomas Edison", "Nikola Tesla", "Steve Jobs"],
        correct: 0
    },
    {
        question: "Qual empresa criou o primeiro microcomputador, o Altair 8800?",
        image: "img/altair.jpg",
        options: ["Apple", "IBM", "Microsoft", "Intel"],
        correct: 2
    },
    {
        question: "Qual foi o primeiro sistema operacional amplamente utilizado?",
        image: "img/os.png",
        options: ["Windows", "DOS", "Linux", "Unix"],
        correct: 1
    },
    {
        question: "Quem inventou a World Wide Web (WWW)?",
        image: "img/berners-lee.jpg",
        options: ["Tim Berners-Lee", "Steve Jobs", "Bill Gates", "Mark Zuckerberg"],
        correct: 0
    },
    {
        question: "Qual empresa lançou o primeiro smartphone comercial?",
        image: "img/motorola.jpg",
        options: ["Apple", "Samsung", "Nokia", "Motorola"],
        correct: 3
    },
    {
        question: "Qual é a sigla para o protocolo de transferência de hipertexto da web?",
        image: "img/http.jpg",
        options: ["FTP", "HTTP", "SMTP", "TCP"],
        correct: 1
    },
    {
        question: "Quem é conhecido como o 'pai do microprocessador'?",
        image: "img/gordon-moore.jpg",
        options: ["Alan Turing", "Steve Wozniak", "Gordon Moore", "John von Neumann"],
        correct: 2
    },
    {
        question: "Qual foi o primeiro computador eletrônico de uso geral?",
        image: "img/eniac.jpg",
        options: ["ENIAC", "UNIVAC", "IBM 701", "Atari 2600"],
        correct: 0
    },
    {
        question: "Qual é o nome do primeiro satélite artificial lançado ao espaço?",
        image: "img/sputnik.jpg",
        options: ["Apollo 11", "Hubble", "Sputnik 1", "Challenger"],
        correct: 2
    },
    {
        question: "Qual foi o primeiro videogame comercialmente bem-sucedido?",
        image: "img/pong.jpg",
        options: ["Pong", "Space Invaders", "Super Mario Bros.", "Pac-Man"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    document.querySelector(".quiz").style.display = "block";
    document.querySelector(".result").style.display = "none";
    showQuestion(currentQuestion);
}

function showQuestion(index) {
    const questionElement = document.getElementById("question-text");
    const questionNumberElement = document.getElementById("question-number");
    const imageElement = document.getElementById("question-image");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next-button");
    const options = questions[index].options;

    questionNumberElement.textContent = `Questão ${index + 1}`;
    questionElement.textContent = questions[index].question;
    imageElement.src = questions[index].image;
    optionsElement.innerHTML = '';

    options.forEach((option, i) => {
        const optionButton = document.createElement("button");
        optionButton.className = "btn btn-primary option";
        optionButton.textContent = `${String.fromCharCode(65 + i)}. ${option}`;
        optionButton.onclick = () => checkAnswer(i);
        optionsElement.appendChild(optionButton);
    });

    nextButton.style.display = "none";
}

function checkAnswer(selectedOption) {
    const correctOption = questions[currentQuestion].correct;
    const options = document.querySelectorAll(".option");

    if (selectedOption === correctOption) {
        options[correctOption].classList.add("correct");
        score++;
    } else {
        options[selectedOption].classList.add("incorrect");
        options[correctOption].classList.add("correct");
    }

    
    const quizSection = document.querySelector(".quiz");
    quizSection.classList.add("fade-effect");

    // 2 segundos antes de avançar para a próxima questão
    setTimeout(() => {
        nextQuestion(); // Avançar para a próxima questão
    }, 2000); // 2 segundos de atraso
}


function nextQuestion() {
    currentQuestion++;

    
    const quizSection = document.querySelector(".quiz");
    quizSection.classList.remove("fade-effect");

    if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.querySelector(".quiz").style.display = "none";
    document.querySelector(".result").style.display = "block";
    document.getElementById("final-score").textContent = score;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.querySelector(".quiz").style.display = "block";
    document.querySelector(".result").style.display = "none";
    showQuestion(currentQuestion);
}



startQuiz();
