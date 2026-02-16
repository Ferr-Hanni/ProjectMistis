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
        body.style.backgroundColor = "#e0e0d1";
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
        // Halaman Akhir: Terjebak & Rusak Total
        dateText.innerText = "SUD4H CUKUP";
        diaryText.innerText = "Terima kasih sudah membaca sampai akhir. Sekarang, giliranmu.";
        
        body.style.backgroundColor = "#000000";
        body.style.color = "#ff0000";
        
        photo.classList.remove('shake');
        photo.classList.add('pixelated');
        photo.classList.add('glitch-heavy');
        
        // Set style awal untuk teks mengikuti kursor/sentuhan
        diaryText.style.position = "fixed";
        diaryText.style.pointerEvents = "none";
        diaryText.style.fontSize = "1.5rem";
        diaryText.style.fontWeight = "bold";
        diaryText.style.transition = "none"; // Hilangkan transisi agar lebih responsif
        
        // Teks mengikuti kursor (untuk desktop)
        document.addEventListener('mousemove', (e) => {
            diaryText.style.left = e.clientX + 20 + 'px';
            diaryText.style.top = e.clientY + 20 + 'px';
        });
        
        // Teks mengikuti sentuhan (untuk mobile)
        document.addEventListener('touchmove', (e) => {
            e.preventDefault(); // Mencegah scroll saat menyentuh
            let touch = e.touches[0];
            diaryText.style.left = touch.clientX + 20 + 'px';
            diaryText.style.top = (touch.clientY - 50) + 'px';
        }, { passive: false });
        
        // Saat sentuhan dimulai (untuk mobile)
        document.addEventListener('touchstart', (e) => {
            let touch = e.touches[0];
            diaryText.style.left = touch.clientX + 20 + 'px';
            diaryText.style.top = (touch.clientY - 50) + 'px';
        });
    }
});