const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const play = document.querySelector("#controls #play");
const prev = document.querySelector("#controls #prev");
const next = document.querySelector("#controls #next");
const duration = document.querySelector("#duration");
const currentTime = document.querySelector("#current-time");
const progressBar = document.querySelector("#progress-bar");

const player = new MusicPlayer(musicList);

window.addEventListener("load", () => {     // sayfadaki herşey yüklendiğinde
    let music = player.getMusic();
    displayMusic(music);
});

function displayMusic(music) {
    title.innerText = music.getName();
    singer.innerText = music.singer;
    image.src = "img/" + music.img;
    audio.src = "mp3/" + music.file;
}

play.addEventListener("click", () => {
    const isMusicPlay = container.classList.contains("playing");      // boolean şeklinde döner
    isMusicPlay ? pauseMusic() : playMusic();
});

prev.addEventListener("click", () => {
    prevMusic();
});

next.addEventListener("click", () => {
    nextMusic();
});

function prevMusic() {
    player.prev();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

function nextMusic() {
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

function pauseMusic() {     // (Klasik fonksiyon tanımlaması)
    container.classList.remove("playing");
    play.classList = "fa-solid fa-play";     // ikon değiştirdik
    audio.pause();
}

function playMusic() {      // (Klasik fonksiyon tanımlaması)
    container.classList.add("playing");
    play.classList = "fa-solid fa-pause";
    audio.play();                       // audio başlatılır. (ses dosyası çalışır)
}

const calculateTime = (toplamSaniye) => {       // (Arrow function tanımlaması)
    const dakika = Math.floor(toplamSaniye / 60);   // floor() küsüratın altındaki tam sayıya yuvarlar.
    const saniye = Math.floor(toplamSaniye % 60);
    const guncellenenSaniye = saniye < 10 ? `0${saniye}` : `${saniye}`; // saniye 04 şeklinde 2 basamakli gözüksün diye yapıldı.
    const sonuc = `${dakika}:${saniye}`;
    return sonuc;
}

audio.addEventListener("loadedmetadata", () => {    // loadedmetadata, audio controlü için tetiklenen eventtir.
        // loadedmetadata eventi aracılığıyla, gerçekten audio konrtrolüne müziğin bağlandığını(ilişkilendirdildiğini garanti altına alıyoruz.)
        // audio.duration'u dışarıya yazsaydık, çalışmayacaktı. (çünkü burdaki kontrole bağlanan file bilgisi, dosya bilgisi henüz hazır olmadı)
        // audio.duration, saniye bilgisini verir.
    console.log(audio.duration);
    duration.textContent = calculateTime(audio.duration);   
    progressBar.max = Math.floor(audio.duration);   
});

audio.addEventListener("timeupdate", () => {    //  timeupdate eventi, audio'nun zamanı update edildikçe burası herdafasında tetiklenecektir.
    progressBar.value = Math.floor(audio.currentTime);  // audio.currentTime, o an müzik hangi saniyede ise o bilgi bize gelecektir.
    currentTime.textContent = calculateTime(progressBar.value);
});

progressBar.addEventListener("input", () => {   // input eventi, bir input kontrolüne konumlanma aşamasında tetiklenecek.
    currentTime.textContent = calculateTime(progressBar.value);
    audio.currentTime = progressBar.value;
});