const quizData = [
    // Soal-soal Sejarah
    {
        question: "Siapakah presiden pertama Indonesia?",
        options: ["Soekarno", "Soeharto", "Jokowi", "Megawati"],
        correctAnswer: "Soekarno",
        subject: "sejarah"
    },
    {
        question: "Siapakah penulis Proklamasi Kemerdekaan Indonesia?",
        options: ["Soekarno", "Soeharto", "Jokowi", "Megawati"],
        correctAnswer: "Soekarno",
        subject: "sejarah"
    },
    {
        question: "Kapan Proklamasi Kemerdekaan Indonesia diumumkan?",
        options: ["17 Agustus 1945", "17 Agustus 1946", "17 Agustus 1947", "17 Agustus 1948"],
        correctAnswer: "17 Agustus 1945",
        subject: "sejarah"
    },
    {
        question: "Siapakah penulis Buku Putih?",
        options: ["Jenderal Soedirman", "Jenderal Sudirman", "Jenderal Soedirno", "Jenderal Soeharto"],
        correctAnswer: "Jenderal Sudirman",
        subject: "sejarah"
    },
    {
        question: "Apa peristiwa yang terjadi pada tanggal 10 November?",
        options: ["Proklamasi Kemerdekaan Indonesia", "Hari Pahlawan", "Hari Kesaktian Pancasila", "Hari Sumpah Pemuda"],
        correctAnswer: "Hari Pahlawan",
        subject: "sejarah"
    },
    // Soal-soal Fisika
    {
        question: "Rumus untuk menghitung percepatan adalah?",
        options: ["a = F/m", "a = v/t", "a = s/t", "a = F*d"],
        correctAnswer: "a = v/t",
        subject: "fisika"
    },
    {
        question: "Satuan untuk gaya adalah?",
        options: ["Newton", "Joule", "Watt", "Hertz"],
        correctAnswer: "Newton",
        subject: "fisika"
    },
    {
        question: "Hukum Newton yang menyatakan bahwa setiap tindakan memiliki reaksi yang sama besar tetapi berlawanan arah adalah?",
        options: ["Hukum Pertama", "Hukum Kedua", "Hukum Ketiga", "Hukum Keempat"],
        correctAnswer: "Hukum Ketiga",
        subject: "fisika"
    },
    {
        question: "Bagaimana perubahan bentuk zat dari cairan ke gas?",
        options: ["Melting", "Vaporisasi", "Kondensasi", "Sublimasi"],
        correctAnswer: "Vaporisasi",
        subject: "fisika"
    },
    {
        question: "Bagaimana perubahan bentuk zat dari gas ke padat?",
        options: ["Kondensasi", "Penguapan", "Sublimasi", "Pembekuan"],
        correctAnswer: "Pembekuan",
        subject: "fisika"
    },
    // Soal-soal Matematika
    {
        question: "Berapakah hasil dari 12 + 7?",
        options: ["18", "19", "20", "21"],
        correctAnswer: "19",
        subject: "matematika"
    },
    {
        question: "Berapakah hasil dari 5 x 8?",
        options: ["36", "40", "42", "45"],
        correctAnswer: "40",
        subject: "matematika"
    },
    {
        question: "Berapakah hasil dari 24 : 3?",
        options: ["6", "8", "10", "12"],
        correctAnswer: "8",
        subject: "matematika"
    },
    {
        question: "Berapakah hasil dari 15 - 9?",
        options: ["4", "5", "6", "7"],
        correctAnswer: "6",
        subject: "matematika"
    },
    {
        question: "Berapakah hasil dari 27 + 13?",
        options: ["38", "39", "40", "41"],
        correctAnswer: "40",
        subject: "matematika"
    },
    // Soal-soal Ekonomi
    {
        question: "Apa yang dimaksud dengan inflasi?",
        options: ["Kenaikan harga secara bertahap", "Penurunan harga secara bertahap", "Stabilitas harga", "Tidak ada perubahan harga"],
        correctAnswer: "Kenaikan harga secara bertahap",
        subject: "ekonomi"
    },
    {
        question: "Siapa yang memproduksi barang dan jasa dalam sistem ekonomi?",
        options: ["Pemerintah", "Konsumen", "Produsen", "Distributor"],
        correctAnswer: "Produsen",
        subject: "ekonomi"
    },
    {
        question: "Apa yang dimaksud dengan PDB?",
        options: ["Pendapatan Domestik Bruto", "Pendapatan Domestik Neto", "Produk Domestik Bruto", "Produk Domestik Neto"],
        correctAnswer: "Produk Domestik Bruto",
        subject: "ekonomi"
    },
    {
        question: "Apa yang dimaksud dengan pasar bebas?",
        options: ["Pasar tanpa pajak", "Pasar dengan aturan yang ketat", "Pasar tanpa hambatan", "Pasar dengan persaingan tidak sehat"],
        correctAnswer: "Pasar tanpa hambatan",
        subject: "ekonomi"
    },
    {
        question: "Apa yang dimaksud dengan inflasi deflasi?",
        options: ["Penurunan harga secara bertahap", "Stabilitas harga", "Kenaikan harga secara bertahap", "Tidak ada perubahan harga"],
        correctAnswer: "Penurunan harga secara bertahap",
        subject: "ekonomi"
    },
];

let currentQuestionIndex = 0;
let score = 0;
let quizContainer;

function startQuiz(subject) {
    const filteredQuizData = quizData.filter(question => question.subject === subject);

    if (filteredQuizData.length === 5) {
        currentQuestionIndex = 0;
        score = 0;
        quizContainer = document.getElementById('quiz-container');
        displayQuestion(filteredQuizData[currentQuestionIndex]);
        quizContainer.style.display = 'block';
    } else {
        console.log('Tidak ada soal yang tersedia untuk mata pelajaran ini');
    }
}

function displayQuestion(questionData) {
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const scoreElement = document.getElementById('score');

    questionElement.innerText = questionData.question;
    optionsContainer.innerHTML = '';
    
    questionData.options.forEach((option, index) => {
        const optionLabel = String.fromCharCode(65 + index); // Convert index to letter A, B, C, D, etc.
        const optionElement = document.createElement('label');
        optionElement.innerHTML = `
            <input type="radio" name="option" value="${option}">
            ${optionLabel}. ${option}
        `;
        optionsContainer.appendChild(optionElement);
    });

    scoreElement.innerText = `Skor: ${score}`;
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (!selectedOption) {
        alert('Pilih salah satu jawaban!');
        return;
    }

    const userAnswer = selectedOption.value;

    score += userAnswer === quizData[currentQuestionIndex].correctAnswer ? 20 : 0;

    currentQuestionIndex++;

    if (currentQuestionIndex < 5) {
        const filteredQuizData = quizData.filter(question => question.subject === quizData[currentQuestionIndex].subject);
        displayQuestion(filteredQuizData[currentQuestionIndex]);
    } else {
        quizContainer.style.display = 'none';
        alert(`Kuis selesai! Skor Anda: ${score}`);
    }
}
