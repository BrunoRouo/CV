const questions = [
    {
        question: "¿De donde soy?",
        options: ["CABA", "Neuquén", "Entre Ríos", "Corrientes"],
        correctAnswer: "Entre Ríos"
    },
    {
        question: "¿En qué colegio realizé mis estudios secundarios?",
        options: ["Escuela Normal superior dr. Luis Cesar Ingold", "Instituto Comercial Privado Almafuerte D-70", "Escuela Superior de Comercio Carlos Pellegrini", "Inmaculada Concepción de María"],
        correctAnswer: "Instituto Comercial Privado Almafuerte D-70"
    },
    {
        question: "¿Cuales son mis características?",
        options: ["Holgazaneo", "Creatividad", "Bondad", "Aprendizaje Rápido"],
        correctAnswer: "Aprendizaje Rápido"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    const resultContainer = document.getElementById("result");

    questionContainer.textContent = questions[currentQuestion].question;
    optionsContainer.innerHTML = "";

    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    resultContainer.textContent = "";
}

function checkAnswer(selectedIndex) {
    if (questions[currentQuestion].correctAnswer === questions[currentQuestion].options[selectedIndex]) {
        score++;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultContainer = document.getElementById("result");
    resultContainer.textContent = `Tu puntuación es: ${score} de ${questions.length}`;
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResult();
    }
}

// Cargar la primera pregunta al cargar la página
loadQuestion();