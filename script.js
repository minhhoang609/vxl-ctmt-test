const questions = [
    {
        question: 'Tần số hoạt động tối đa của vi điều khiển sử dụng trong học phần này là bao nhiêu?',
        answers: [
            { text: '10 MHz', correct: false },
            { text: '20 MHz', correct: false },
            { text: '30 MHz', correct: false },
            { text: '40 MHz', correct: true }
        ]
    },
    {
        question: 'Giả thiết PIC18F4520 hoạt động ở tần số 11.0592 MHz, bộ USART được cấu hình ở chế độ cần đồng bộ (USART_ASYNCH_MODE), tốc độ baud cao (USART_BRGH_HIGH). Tìm giá trị của tham số spbrg trong hàm OpenUSART để có được tốc độ baud là 19200?',
        answers: [
            { text: '37', correct: false },
            { text: '36.5', correct: false },
            { text: '35', correct: true },
            { text: '4', correct: false }
        ]
    },
    {
        question: 'Timer3 được cấp xung từ Fosc/4, qua bộ chia tần với hệ số chia 1:2. Nếu Fosc = 8 MHz, để Timer3 tràn sau mỗi 2000 µs thì cần khởi tạo giá trị bằng bao nhiêu?',
        answers: [
            { text: '65036', correct: false },
            { text: '64536', correct: true },
            { text: '63536', correct: false },
            { text: '61536', correct: false }
        ]
    },
    {
        question: 'Muốn ngắt INT0 xảy ra khi có sườn âm; ngắt INT1 xảy ra khi có sườn dương cần sử dụng dòng lệnh nào sau đây?',
        answers: [
            { text: 'INTCON2bits.INTEDG0=0; INTCON2bits.INTEDG1=1', correct: true },
            { text: 'INTCON2bits.INTEDG0=0; INTCON2bits.INTEDG1=0', correct: false },
            { text: 'INTCON2bits.INTEDG0=1; INTCON2bits.INTEDG1=0', correct: false },
            { text: 'INTCON2bits.INTEDG0=1; INTCON2bits.INTEDG1=1', correct: false }
        ]
    },
    {
        question: 'Timer3 được cấp xung từ Fosc/4, qua bộ chia tần với hệ số chia 1:1. Nếu Fosc=8MHz, để Timer3 tràn sau mỗi 2000µS thì cần khởi tạo giá trị bằng bao nhiêu?',
        answers: [
            { text: '65036', correct: false },
            { text: '65536', correct: false },
            { text: '65336', correct: false },
            { text: '61536', correct: true }
        ]
    },
    // Thêm các câu hỏi khác tại đây theo cùng cấu trúc
];

let currentQuestionIndex = 0;

document.getElementById('next-button').addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        alert('Bạn đã hoàn thành tất cả các câu hỏi!');
    }
});

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answerButtons = document.getElementById('answer-buttons');

    questionElement.innerText = questions[currentQuestionIndex].question;
    answerButtons.innerHTML = '';

    questions[currentQuestionIndex].answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => {
            if (answer.correct) {
                button.style.backgroundColor = 'green';
            } else {
                button.style.backgroundColor = 'red';
            }
        });
        answerButtons.appendChild(button);
    });
}

showQuestion();
