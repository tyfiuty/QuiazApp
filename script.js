const quizData = [
    {
        question: "ما هو أول مسجد تم افتتاحه؟",
        a: "المسجد الحرام",
        b: "مسجد الأقصي",
        c: "مسجد سادات قريش",
        d: "مسجد قباء",
        correct: "d",
    },
    {
        question: "كم عدد الرسل الذي أرسلهم الله لينشروا الإسلام؟",
        a: "ثلاثون",
        b: "خمسة وعشرون",
        c: "عشرون",
        d: "سبعة وعشرون",
        correct: "b",
    },
    {
        question: "من هو أول من قام بفريضة الصيام؟",
        a: "آدم عليه السلام",
        b: "محمد عليه السلام",
        c: "إبراهيم عليه السلام",
        d: "موسي عليه السلام",
        correct: "a",
    },
    {
        question: "كم كان عمر سيدنا ابراهيم عندما توفى؟",
        a: "توفى سيدنا ابراهيم عليه السلام في عمره 200 عام",
        b: "توفى سيدنا ابراهيم عليه السلام في عمره 400 عام",
        c: "توفى سيدنا ابراهيم عليه السلام في عمره 500 عام",
        d: "توفى سيدنا ابراهيم عليه السلام في عمره 300 عام",
        correct: "a",
    },
    {
        question: "كم مرة تم ذكر الصلاة في القرآن الكريم؟",
        a: "200 مرة.",
        b: "150 مرة.",
        c: "100 مرة.",
        d: "250 مرة.",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})