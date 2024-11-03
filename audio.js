// Mendapatkan elemen audio
const audio = document.getElementById("background-music");

// Mengatur posisi awal audio jika ada data disimpan di Local Storage
if (localStorage.getItem("audioTime")) {
    audio.currentTime = localStorage.getItem("audioTime");
}

// Menyimpan posisi audio setiap detik
audio.addEventListener("timeupdate", () => {
    localStorage.setItem("audioTime", audio.currentTime);
});
