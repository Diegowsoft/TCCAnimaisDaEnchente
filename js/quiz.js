const questions = [
    {
        question: "O que você prefere fazer no final de semana?",
        options: [
            { text: "Passear no parque", answer: "a"},
            { text: "Passar o tempo com a família", answer: "b"},
            { text: " Ficar em casa assistindo um filme", answer: "c" },
            { text: " Ler um Livro", answer: "d" }
        ]
    },
    {
        question: "Um amigo seu está meio para baixo, o que você faz?",
        options: [
            { text: "Tento fazer ele sorrir, compartilhando algo engraçado ou divertido.", answer: "a"},
            { text: "Ofereço meu apoio, mostrando que ele pode contar comigo para o que precisar.", answer: "b" },
            { text: "Pergunto o que está acontecendo para tentar entender o que está deixando ele para baixo.", answer: "c"},
            { text: "Fico ao lado dele, oferecendo minha companhia até que ele se sinta à vontade para falar.", answer: "d"}
        ]
    },
    // Adicione as outras perguntas aqui de forma semelhante
    {
        question: "Qual é o comportamento mais importante em um cachorro?",
        options: [
            { text: "Obediência", answer: "a"},
            { text: "Carinho", answer: "b"},
            { text: "Atividade física", answer: "c"},
            { text: "Proteção", answer: "d"}
        ]
    },
    // Continue adicionando todas as perguntas da mesma forma...
    {
        question: "Onde você gostaria de passar as férias?",
        options: [
            { text: "Fazenda", answer: "a"},
            { text: "Em casa, descansando", answer: "b"},
            { text: "Praia", answer: "c"},
            { text: "Parque", answer: "d"},
                    ]
    },
    {
        question: "Se o seu cachorro tivesse uma personalidade, qual seria?",
        options: [
            { text: "Protetor e leal", answer: "a"},
            { text: "Aventureiro e cheio de energia", answer: "b"},
            { text: "Independente e brincalhão", answer: "c"},
            { text: "Calmo e carinhoso", answer: "d"}
        ]
    },
 
];

let currentQuestionIndex = 0;
let answerTally = { a: 0, b: 0, c: 0 };

document.addEventListener("DOMContentLoaded", () => {
    const questionElement = document.querySelector(".question");
    const optionsElement = document.querySelector(".options");
    const resultCard = document.getElementById("result-card");
    const questionCard = document.getElementById("question-card");
    const resultArea = document.getElementById("result-area");
    const resultImage = document.getElementById("result-image");
    const restartButton = document.getElementById("restart");

    function loadQuestion(quizpag) {
        const currentQuestion = questions[quizpag];
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = "";
        currentQuestion.options.forEach(option => {
            const div = document.createElement("div");
            div.className = "option";
            div.textContent = option.text;
            div.setAttribute("data-answer", option.answer);
            div.addEventListener("click", handleAnswer);
            optionsElement.appendChild(div);
        });
    }

    function handleAnswer(event) {
        const selectedOption = event.target;
        const answer = selectedOption.getAttribute("data-answer");

        answerTally[answer]++;

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            showResult();
        }
    }

    function showResult() {
        const mostFrequentAnswer = Object.keys(answerTally).reduce((a, b) => answerTally[a] > answerTally[b] ? a : b);

        let result = {
            area: "",
            image: ""
        };

        switch (mostFrequentAnswer) {
            case "a":
                result.area = "Calma e Tranquilo";
                result.image = "../img/calmo.jpg";
                break;
            case "b":
                result.area = "Amoroso";
                result.image = "../img/amoroso.jpg";
                break;
            case "c":
                result.area = " Aventureira";
                result.image = "../img/aventura.jpg";
                break;
            case "d":
                result.area = "Protetor";
                result.image = "../img/protetor.jpg";
                break;
            case "e":
                result.area = "Reservado";
                result.image = "../img/reservado.jpg";
                break;
        }

        // Exibe a área de correspondência e a imagem associada
        resultArea.textContent = result.area;
        resultImage.src =result.image;

        questionCard.classList.add("hidden");
        resultCard.classList.remove("hidden");
    }

    restartButton.addEventListener("click", () => {
        questionCard.classList.remove("hidden");
        resultCard.classList.add("hidden");
        currentQuestionIndex = 0;
        answerTally = { a: 0, b: 0, c: 0};
        loadQuestion(currentQuestionIndex);
    });

    loadQuestion(currentQuestionIndex);
});