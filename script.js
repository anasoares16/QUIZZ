const questions = {
    Pop: [
        {
            question: "Qual é o nome do álbum de Billie Eilish que contém a canção 'Bad Guy'?",
            options: [
                "A) Don't Smile at Me",
                "B) When We All Fall Asleep, Where Do We Go?",
                "C) Happier Than Ever",
                "D) Bitter"
            ],
            answer: 1
        },
        {
            question: "Qual é o título do álbum que contém a música 'Shake It Off'?",
            options: [
                "A) 1989",
                "B) Red",
                "C) Lover",
                "D) Reputation"
            ],
            answer: 0
        },
        {
            question: "Qual é o nome do álbum 'Happier Than Ever'?",
            options: [
                "A) O álbum mais recente de Billie Eilish",
                "B) Um álbum de covers",
                "C) O primeiro álbum de Billie Eilish",
                "D) Um EP"
            ],
            answer: 0
        },
        {
            question: "Qual música de Billie Eilish fala sobre saúde mental?",
            options: [
                "A) Ocean Eyes",
                "B) Bellyache",
                "C) When the Party's Over",
                "D) Therefore I Am"
            ],
            answer: 2
        },
        {
            question: "Qual artista colaborou com Billie Eilish na música 'Lo Vas A Olvidar'?",
            options: [
                "A) Rosalía",
                "B) Dua Lipa",
                "C) Khalid",
                "D) Justin Bieber"
            ],
            answer: 0
        }
    ],
    Rock: [
        {
            question: "Qual banda é famosa pela música 'Smells Like Teen Spirit'?",
            options: [
                "A) Foo Fighters",
                "B) Nirvana",
                "C) Bad Omens",
                "D) Sleep Token"
            ],
            answer: 1
        },
        {
            question: "Qual é o nome do álbum de estreia da banda Bad Omens?",
            options: [
                "A) Finding God Before God Finds Me",
                "B) Bad Omens",
                "C) The Death of Peace of Mind",
                "D) Obey"
            ],
            answer: 1
        },
        {
            question: "Quem é o vocalista da banda Nirvana?",
            options: [
                "A) Dave Grohl",
                "B) Kurt Cobain",
                "C) Chris Cornell",
                "D) Layne Staley"
            ],
            answer: 1
        },
        {
            question: "Qual é a música mais famosa do Nirvana?",
            options: [
                "A) Come As You Are",
                "B) Heart-Shaped Box",
                "C) Smells Like Teen Spirit",
                "D) All Apologies"
            ],
            answer: 2
        },
        {
            question: "Qual banda lançou o álbum 'The Death of Peace of Mind'?",
            options: [
                "A) Bad Omens",
                "B) Nirvana",
                "C) Linkin Park",
                "D) Green Day"
            ],
            answer: 0
        }
    ],
    Filmes: [
        {
            question: "Qual é o nome da cidade fictícia onde a série 'Stranger Things' se passa?",
            options: [
                "A) Hawkins",
                "B) Mill Valley",
                "C) Mystic Falls",
                "D) Sunnydale"
            ],
            answer: 0
        },
        {
            question: "Qual é o nome da casa de Daenerys Targaryen em 'Game of Thrones'?",
            options: [
                "A) Stark",
                "B) Lannister",
                "C) Targaryen",
                "D) Baratheon"
            ],
            answer: 2
        },
        {
            question: "Qual personagem é conhecido por seu famoso bordão 'What's up, Doc?'?",
            options: [
                "A) Pato Donald",
                "B) Pernalonga",
                "C) Tweety Bird",
                "D) Foghorn Leghorn"
            ],
            answer: 1
        },
        {
            question: "Quem é o protagonista da série 'Stranger Things'?",
            options: [
                "A) Mike Wheeler",
                "B) Dustin Henderson",
                "C) Eleven",
                "D) Lucas Sinclair"
            ],
            answer: 2
        },
        {
            question: "Qual é a música tema de 'Game of Thrones'?",
            options: [
                "A) The Rains of Castamere",
                "B) Light of the Seven",
                "C) Game of Thrones Theme",
                "D) The Winds of Winter"
            ],
            answer: 2
        }
    ]
};

let selectedCategory = '';
let currentQuestionIndex = 0;
let score = 0;

function selectCategory(category) {
    selectedCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('categories').style.display = 'none';
    document.getElementById('quiz-title').innerText = category;
    document.getElementById('quiz-container').style.display = 'block';
    showQuestions();
}

function showQuestions() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = ''; // Limpa as perguntas anteriores

    questions[selectedCategory].forEach((question, index) => {
        questionContainer.innerHTML += `
            <div class="question">
                <p>${index + 1}. ${question.question}</p>
                ${question.options.map((option, i) => `
                    <label>
                        <input type="radio" name="question${index}" value="${i}"> ${option}
                    </label>
                `).join('')}
            </div>
        `;
    });

    document.getElementById('submit-btn').style.display = 'block'; // Mostra o botão de enviar
}

function submitAnswers() {
    questions[selectedCategory].forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === question.answer) {
            score++;
        }
    });

    alert(`Você acertou ${score} de ${questions[selectedCategory].length} perguntas!`);
    document.getElementById('restart-btn').style.display = 'block';
}

function restartQuiz() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('categories').style.display = 'flex';
    document.getElementById('restart-btn').style.display = 'none';
}
