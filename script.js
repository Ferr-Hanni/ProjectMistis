let clickCount = 0;

const photo = document.getElementById('main-photo');
const diaryText = document.getElementById('diary-content');
const dateText = document.getElementById('date-text');
const body = document.body;

photo.addEventListener('click', () => {
    clickCount++;

    if (clickCount === 1) {
        // Halaman 2: Mulai Aneh
        dateText.innerText = "16 Maret";
        diaryText.innerText = "16 Maret. Aku merasa seperti ada yang terus memperhatikanku dari sudut lemari. Mungkin cuma perasaanku saja.";
        body.style.backgroundColor = "#e0e0d1"; // Mulai kusam
        photo.style.filter = "contrast(150%) brightness(80%)";
    } 
    else if (clickCount === 2) {
        // Halaman 3: Distorsi
        dateText.innerText = "23 Maret";
        diaryText.innerText = "23 Maret. Dia tidak pergi. Dia hanya diam di sana. Kenapa website ini tidak mau tertutup?";
        body.style.backgroundColor = "#a8a8a8";
        photo.classList.add('glitch-effect');
    } 
    else if (clickCount === 3) {
        // Halaman 4: Rusak
        dateText.innerText = "31 Maret";
        diaryText.innerText = "jangan lihat ke belakang jangan lihat ke belakang jangan lihat ke belakang...";
        body.style.backgroundColor = "#333333";
        body.style.color = "#ffffff";
        photo.style.filter = "invert(100%)";
        photo.classList.add('shake');
    } 
    else if (clickCount === 4) {
        // Tambahkan ini di dalam bagian clickCount === 4 jika ingin support sentuhan HP
        document.addEventListener('touchmove', (e) => {
            let touch = e.touches[0];
            diaryText.style.position = "fixed";
            diaryText.style.left = touch.clientX + 'px';
            diaryText.style.top = (touch.clientY - 50) + 'px'; // Muncul sedikit di atas jari
        });

        // Halaman Akhir: Terjebak & Rusak Total
        dateText.innerText = "SUD4H CUKUP";
        diaryText.innerText = "Terima kasih sudah membaca sampai akhir. Sekarang, giliranmu.";
        
        
        body.style.backgroundColor = "#000000";
        body.style.color = "#ff0000"; // Teks berubah jadi merah gelap
        
        photo.classList.remove('shake'); // Ganti shake biasa dengan yang lebih parah
        photo.classList.add('pixelated');
        photo.classList.add('glitch-heavy');
        
        // Teks mengikuti kursor dengan gaya yang menyeramkan
        document.addEventListener('mousemove', (e) => {
            diaryText.style.position = "fixed";
            diaryText.style.left = e.clientX + 20 + 'px';
            diaryText.style.top = e.clientY + 20 + 'px';
            diaryText.style.pointerEvents = "none"; // Agar tidak menghalangi kursor
            diaryText.style.fontSize = "1.5rem";
            diaryText.style.fontWeight = "bold";
        });
    }
});