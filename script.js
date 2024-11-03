let currentQuestion = 1; // Menyimpan nomor soal yang sedang ditampilkan
const totalQuestions = 10; // Total soal

// Fungsi untuk menampilkan soal berdasarkan nomor
function showQuestion(questionNumber) {
    // Sembunyikan semua soal
    for (let i = 1; i <= totalQuestions; i++) {
        document.getElementById(`q${i}`).style.display = 'none';
    }
    // Tampilkan soal yang diminta
    document.getElementById(`q${questionNumber}`).style.display = 'block';

    // Atur tampilan tombol navigasi
    document.getElementById('prevBtn').style.display = questionNumber === 1 ? 'none' : 'inline';
    document.getElementById('nextBtn').style.display = questionNumber === totalQuestions ? 'none' : 'inline';
    document.getElementById('submitBtn').style.display = questionNumber === totalQuestions ? 'inline' : 'none';
}

// Fungsi untuk berpindah ke soal berikutnya
function nextQuestion() {
    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        showQuestion(currentQuestion);
    }
}

// Fungsi untuk berpindah ke soal sebelumnya
function prevQuestion() {
    if (currentQuestion > 1) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

// Fungsi untuk menghitung skor
function calculateScore() {
    let score = 0;

    // Loop untuk memeriksa jawaban dari setiap pertanyaan
    for (let i = 1; i <= totalQuestions; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption) {
            score += parseInt(selectedOption.value);
        }
    }

    // Tampilkan hasil
    document.getElementById('result').innerText = `Kamu menjawab benar sebanyak ${score} dari ${totalQuestions} pertanyaan.`;
}

// Tampilkan soal pertama
showQuestion(currentQuestion);
