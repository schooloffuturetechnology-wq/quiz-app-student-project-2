const quizData = [
    {
        question: "Which language runs directly in a web browser?",
        options: {
            a: "Java",
            b: "C",
            c: "Python",
            d: "JavaScript"
        },
        correct: "d"
    },
    {
        question: "What does CSS stand for?",
        options: {
            a: "Central Style Sheets",
            b: "Cascading Style Sheets",
            c: "Cascading Simple Sheets",
            d: "Computer Styling System"
        },
        correct: "b"
    },
    {
        question: "What does HTML stand for?",
        options: {
            a: "HyperText Markup Language",
            b: "HyperText Markdown Language",
            c: "Home Tool Markup Language",
            d: "HighText Machine Language"
        },
        correct: "a"
    },
    {
        question: "Which method converts JSON text into a JavaScript object?",
        options: {
            a: "JSON.stringify()",
            b: "JSON.parse()",
            c: "JSON.convert()",
            d: "JSON.object()"
        },
        correct: "b"
    },
    {
        question: "Which keyword declares a block-scoped variable in JavaScript?",
        options: {
            a: "var",
            b: "const",
            c: "let",
            d: "Both const and let"
        },
        correct: "d"
    },
    {
        question: "Which CSS layout system is designed for one-dimensional layouts?",
        options: {
            a: "Grid",
            b: "Flexbox",
            c: "Float",
            d: "Positioning"
        },
        correct: "b"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: {
            a: "<link>",
            b: "<href>",
            c: "<a>",
            d: "<nav>"
        },
        correct: "c"
    },
    {
        question: "Which property changes the text color in CSS?",
        options: {
            a: "font-color",
            b: "text-color",
            c: "foreground",
            d: "color"
        },
        correct: "d"
    },
    {
        question: "Which array method creates a new array with elements that pass a test?",
        options: {
            a: "filter()",
            b: "find()",
            c: "reduce()",
            d: "forEach()"
        },
        correct: "a"
    },
    {
        question: "What does the DOM stand for?",
        options: {
            a: "Document Object Model",
            b: "Display Object Management",
            c: "Digital Ordinance Model",
            d: "Desktop Oriented Mode"
        },
        correct: "a"
    },
    {
        question: "Which CSS value makes an element a flex container?",
        options: {
            a: "display: block",
            b: "display: inline",
            c: "display: flex",
            d: "position: flex"
        },
        correct: "c"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: {
            a: "<!-- -->",
            b: "//",
            c: "/* */",
            d: "#"
        },
        correct: "b"
    },
    {
        question: "Which method selects the first element matching a CSS selector?",
        options: {
            a: "getElementById()",
            b: "querySelector()",
            c: "querySelectorAll()",
            d: "getElementsByClassName()"
        },
        correct: "b"
    },
    {
        question: "Which input type is best for entering an email address?",
        options: {
            a: "type=\"text\"",
            b: "type=\"email\"",
            c: "type=\"mail\"",
            d: "type=\"address\""
        },
        correct: "b"
    },
    {
        question: "Which CSS unit is relative to the root font size?",
        options: {
            a: "em",
            b: "px",
            c: "rem",
            d: "%"
        },
        correct: "c"
    },
    {
        question: "Which JavaScript operator compares both value and type?",
        options: {
            a: "==",
            b: "=",
            c: "===",
            d: "!="
        },
        correct: "c"
    },
    {
        question: "Which HTML element is used for the largest heading?",
        options: {
            a: "<h6>",
            b: "<heading>",
            c: "<head>",
            d: "<h1>"
        },
        correct: "d"
    },
    {
        question: "Which CSS property controls the space inside an element’s border?",
        options: {
            a: "margin",
            b: "padding",
            c: "gap",
            d: "spacing"
        },
        correct: "b"
    },
    {
        question: "Which function runs code after a delay in JavaScript?",
        options: {
            a: "setDelay()",
            b: "setTimeout()",
            c: "setInterval()",
            d: "delay()"
        },
        correct: "b"
    },
    {
        question: "Which HTML attribute provides alternative text for an image?",
        options: {
            a: "title",
            b: "src",
            c: "alt",
            d: "description"
        },
        correct: "c"
    },
    {
        question: "Which CSS property rounds the corners of an element?",
        options: {
            a: "corner-radius",
            b: "border-radius",
            c: "radius",
            d: "outline-radius"
        },
        correct: "b"
    },
    {
        question: "Which JavaScript method adds an item to the end of an array?",
        options: {
            a: "push()",
            b: "append()",
            c: "add()",
            d: "insert()"
        },
        correct: "a"
    },
    {
        question: "Which tag is typically used to group navigation links?",
        options: {
            a: "<menu>",
            b: "<section>",
            c: "<nav>",
            d: "<aside>"
        },
        correct: "c"
    },
    {
        question: "Which CSS property defines the stacking order of positioned elements?",
        options: {
            a: "stack",
            b: "layer",
            c: "z-index",
            d: "order"
        },
        correct: "c"
    },
    {
        question: "Which JavaScript keyword stops a loop immediately?",
        options: {
            a: "stop",
            b: "break",
            c: "exit",
            d: "return"
        },
        correct: "b"
    },
    {
        question: "Which browser API stores key-value data with no expiration by default?",
        options: {
            a: "sessionStorage",
            b: "cookies",
            c: "localStorage",
            d: "indexedCache"
        },
        correct: "c"
    }
];

const state = {
    currentQuestionIndex: 0,
    selectedAnswers: new Array(quizData.length).fill(null),
    hasSubmitted: false
};

const questionCount = document.getElementById("questionCount");
const answeredCount = document.getElementById("answeredCount");
const liveScore = document.getElementById("liveScore");
const progressLabel = document.getElementById("progressLabel");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");
const questionPills = document.getElementById("questionPills");
const questionBadge = document.getElementById("questionBadge");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const submitButton = document.getElementById("submitButton");
const restartButton = document.getElementById("restartButton");
const resultsPanel = document.getElementById("resultsPanel");
const finalScore = document.getElementById("finalScore");
const accuracyScore = document.getElementById("accuracyScore");
const finalAnswered = document.getElementById("finalAnswered");
const reviewList = document.getElementById("reviewList");

initializeQuiz();

function initializeQuiz() {
    questionCount.textContent = String(quizData.length);

    prevButton.addEventListener("click", goToPreviousQuestion);
    nextButton.addEventListener("click", goToNextQuestion);
    submitButton.addEventListener("click", submitQuiz);
    restartButton.addEventListener("click", restartQuiz);

    renderQuestionPills();
    renderQuiz();
}

function renderQuestionPills() {
    questionPills.innerHTML = "";

    quizData.forEach((_, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "question-pill";
        button.textContent = String(index + 1);

        if (index === state.currentQuestionIndex) {
            button.classList.add("is-active");
        }

        if (state.selectedAnswers[index]) {
            button.classList.add("is-answered");
        }

        button.addEventListener("click", () => {
            state.currentQuestionIndex = index;
            renderQuiz();
        });

        questionPills.appendChild(button);
    });
}

function renderQuiz() {
    const currentQuestion = quizData[state.currentQuestionIndex];
    const selectedAnswer = state.selectedAnswers[state.currentQuestionIndex];
    const answeredQuestions = state.selectedAnswers.filter(Boolean).length;
    const currentScore = calculateScore();
    const progressValue = Math.round(((state.currentQuestionIndex + 1) / quizData.length) * 100);

    questionBadge.textContent = `Question ${state.currentQuestionIndex + 1}`;
    questionText.textContent = currentQuestion.question;
    answeredCount.textContent = String(answeredQuestions);
    liveScore.textContent = String(currentScore);
    progressLabel.textContent = `Question ${state.currentQuestionIndex + 1} of ${quizData.length}`;
    progressPercent.textContent = `${progressValue}%`;
    progressFill.style.width = `${progressValue}%`;

    optionsContainer.innerHTML = "";

    Object.entries(currentQuestion.options).forEach(([key, value]) => {
        const label = document.createElement("label");
        label.className = "option";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "quiz-option";
        input.value = key;
        input.checked = selectedAnswer === key;
        input.addEventListener("change", () => {
            state.selectedAnswers[state.currentQuestionIndex] = key;
            renderQuiz();
        });

        const optionKey = document.createElement("span");
        optionKey.className = "option__key";
        optionKey.textContent = key.toUpperCase();

        const optionText = document.createElement("span");
        optionText.className = "option__text";
        optionText.textContent = value;

        label.appendChild(input);
        label.appendChild(optionKey);
        label.appendChild(optionText);
        optionsContainer.appendChild(label);
    });

    prevButton.disabled = state.currentQuestionIndex === 0;
    nextButton.disabled = state.currentQuestionIndex === quizData.length - 1;

    renderQuestionPills();
}

function goToPreviousQuestion() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
        renderQuiz();
    }
}

function goToNextQuestion() {
    if (state.currentQuestionIndex < quizData.length - 1) {
        state.currentQuestionIndex += 1;
        renderQuiz();
    }
}

function submitQuiz() {
    state.hasSubmitted = true;

    const answeredQuestions = state.selectedAnswers.filter(Boolean).length;
    const score = calculateScore();
    const accuracy = Math.round((score / quizData.length) * 100);

    finalScore.textContent = `${score} / ${quizData.length}`;
    accuracyScore.textContent = `${accuracy}%`;
    finalAnswered.textContent = `${answeredQuestions} / ${quizData.length}`;

    renderReview();
    resultsPanel.classList.remove("hidden");
    resultsPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderReview() {
    reviewList.innerHTML = "";

    quizData.forEach((item, index) => {
        const selectedAnswer = state.selectedAnswers[index];
        const isCorrect = selectedAnswer === item.correct;

        const card = document.createElement("article");
        card.className = "review-card";

        const top = document.createElement("div");
        top.className = "review-card__top";

        const badge = document.createElement("span");
        badge.className = `review-card__status ${isCorrect ? "is-correct" : "is-wrong"}`;
        badge.textContent = isCorrect ? "Correct" : "Needs Review";

        const indexText = document.createElement("span");
        indexText.className = "question-card__badge";
        indexText.textContent = `Question ${index + 1}`;

        top.appendChild(indexText);
        top.appendChild(badge);

        const question = document.createElement("h3");
        question.className = "review-card__question";
        question.textContent = item.question;

        const meta = document.createElement("p");
        meta.className = "review-card__meta";
        meta.innerHTML = [
            `Your answer: ${selectedAnswer ? `${selectedAnswer.toUpperCase()} - ${item.options[selectedAnswer]}` : "Not answered"}`,
            `Correct answer: ${item.correct.toUpperCase()} - ${item.options[item.correct]}`
        ].join("<br>");

        card.appendChild(top);
        card.appendChild(question);
        card.appendChild(meta);
        reviewList.appendChild(card);
    });
}

function restartQuiz() {
    state.currentQuestionIndex = 0;
    state.selectedAnswers = new Array(quizData.length).fill(null);
    state.hasSubmitted = false;
    resultsPanel.classList.add("hidden");
    renderQuiz();
}

function calculateScore() {
    return quizData.reduce((score, item, index) => (
        state.selectedAnswers[index] === item.correct ? score + 1 : score
    ), 0);
}
