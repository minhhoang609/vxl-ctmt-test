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
    {
        question: 'Khi có nhu cầu sử dụng chân AN2 làm chân đầu vào tương tự thì độ giá trị portconfig trong hàm OpenADC0 mang giá trị là:',
        answers: [
            { text: '15', correct: false },
            { text: '14', correct: false },
            { text: '13', correct: false },
            { text: '12', correct: true }
        ]
    },
    {
        question: 'Biết rằng xung clock vi điều khiển sử dụng là FOSC=8 MHz, xung PWM có tần số FPWM=500 Hz, PV=16. Hãy tính giá trị duty cycle sao cho độ rộng xung là 40% của chu kỳ.',
        answers: [
            { text: '350', correct: false },
            { text: '125', correct: false },
            { text: '400', correct: true },
            { text: '250', correct: false }
        ]
    },
    {
        question: 'Câu lệnh INTCONbits.INT0IF=0; được sử dụng để?',
        answers: [
            { text: 'Xóa cờ ngắt ngoài INT0', correct: true },
            { text: 'Cho phép ngắt ngoài INT0', correct: false },
            { text: 'Thiết lập cờ ngắt ngoài INT0', correct: false },
            { text: 'Thiết lập mức ưu tiên cho ngắt ngoài INT0', correct: false }
        ]
    },
    {
        question: 'Giả thiết bộ ADC được cấu hình để đo điện áp trong dải từ 0V đến 5V trên kênh AN0. Nếu giá trị số nhận được sau bộ ADC bằng 409 giá trị điện áp đầu vào là:',
        answers: [
            { text: '2V', correct: true },
            { text: '2.3V', correct: false },
            { text: '2.5V', correct: false },
            { text: '3V', correct: false }
        ]
    },
    {
        question: 'Muốn xuất dữ liệu trên chân RB3 với mức logic "1" cần sử dụng câu lệnh nào sau đây?',
        answers: [
            { text: 'PORTB = 0b00001000;', correct: false },
            { text: 'TRISB = 0b00001000;', correct: false },
            { text: 'PORTBbits.RB3=0;', correct: false },
            { text: 'PORTBbits.RB3=1;', correct: true }
        ]
    },
    {
        question: 'Timer2 được cấp xung từ Fosc/4, qua bộ chia tần trước và bộ chia tần sau với hệ số chia lần lượt là 4 và 1. Nếu Fosc=1MHz, để TMR2IF=1 sau mỗi 3200uS thì cần khởi tạo cho PR2 giá trị bằng bao nhiêu?',
        answers: [
            { text: '200', correct: true },
            { text: '100', correct: false },
            { text: '50', correct: false },
            { text: '25', correct: false }
        ]
    },
    {
        question: 'Timer0 được cấp xung từ Fosc/4, qua bộ chia tần với hệ số chia 1:256. Nếu Fosc=16MHz, Timer0 hoạt động ở chế độ 8bit, để Timer0 tràn sau mỗi 1600uS thì cần khởi tạo giá trị bằng bao nhiêu?',
        answers: [
            { text: '200', correct: true },
            { text: '100', correct: false },
            { text: '50', correct: false },
            { text: '25', correct: false }
        ]
    },
    {
        question: 'Lệnh nào trong số các lệnh dưới đây khởi tạo cho timer3 ở chế độ ghi đọc mỗi lần 16bit, hệ số chia tần 1:8, nguồn xung lấy từ Fosc/4',
        answers: [
            { text: 'T3CON=0b01011000;', correct: false },
            { text: 'T3CON=0b01010001;', correct: true },
            { text: 'T3CON=0b10100001;', correct: false },
            { text: 'T3CON=0b10000001;', correct: false }
        ]
    },
    {
        question: 'Lệnh nào trong số các lệnh dưới đây khởi tạo cho Timer1 ở chế độ ghi đọc mỗi lần 16bit, hệ số chia tần 1:8, nguồn xung lấy từ Fosc/4?',
        answers: [
            { text: 'T1CON=0b01100001;', correct: true },
            { text: 'T1CON=0b10110001;', correct: false },
            { text: 'T1CON=0b10010001;', correct: false },
            { text: 'T1CON=0b10000001;', correct: false }
        ]
    },
    {
        question: 'Sử dụng nguồn xung Fosc = 4 MHz, thiết lập PR2 và hệ số chia PV cho timer để xung PWM có tần số 1 KHz?',
        answers: [
            { text: 'PR2 = 99; PV = 16', correct: false },
            { text: 'PR2 = 249; PV = 4', correct: true },
            { text: 'PR2 = 124; PV = 1', correct: false },
            { text: 'PR2 = 199; PV = 2', correct: false }
        ]
    },
    {
        question: 'Vi điều khiển PIC 18F4520 có bao nhiêu bộ Timer có thể hoạt động ở chế độ 8 bit?',
        answers: [
            { text: '1', correct: false },
            { text: '2', correct: true },
            { text: '3', correct: false },
            { text: '4', correct: false }
        ]
    },
    {
        question: 'Vi điều khiển PIC 18F4520 có bao nhiêu nguồn ngắt ngoài có thể được đặt ở mức ưu tiên cao (vector 0x08)?',
        answers: [_{{{CITATION{{{_1{](https://github.com/kjun290/Star-Wars-Trivia/tree/85e7d51dee4433268a2fbf1d3de86c04d5eb399e/Assets%2Fscript.js)
