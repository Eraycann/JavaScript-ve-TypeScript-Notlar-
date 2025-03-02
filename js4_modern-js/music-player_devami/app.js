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
const volume = document.querySelector("#volume");
const volumeBar = document.querySelector("#volume-bar");
const ul = document.querySelector("ul");

const player = new MusicPlayer(musicList);

window.addEventListener("load", () => {
    let music = player.getMusic();
    displayMusic(music);
    displayMusicList(player.musicList);
    isPlayingNow();
});

function displayMusic(music) {
    title.innerText = music.getName();
    singer.innerText = music.singer;
    image.src = "img/" + music.img;
    audio.src = "mp3/" + music.file;
}

play.addEventListener("click", () => {
    const isMusicPlay = container.classList.contains("playing");
    isMusicPlay ? pauseMusic() : playMusic();
});

prev.addEventListener("click", () => { prevMusic(); });

next.addEventListener("click", () => { nextMusic(); });

const prevMusic = () => {
    player.prev();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
    isPlayingNow();

}

const nextMusic = () => {
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
    isPlayingNow();

}

const pauseMusic = () => {
    container.classList.remove("playing");
    play.querySelector("i").classList = "fa-solid fa-play";
    audio.pause();
}

const playMusic = () => {
    container.classList.add("playing");
    play.querySelector("i").classList = "fa-solid fa-pause";
    audio.play();
}

const calculateTime = (toplamSaniye) => {
    const dakika = Math.floor(toplamSaniye / 60);
    const saniye = Math.floor(toplamSaniye % 60);
    const guncellenenSaniye = saniye < 10 ? `0${saniye}`: `${saniye}`;
    const sonuc = `${dakika}:${guncellenenSaniye}`;
    return sonuc;
}

audio.addEventListener("loadedmetadata", () => {
    duration.textContent = calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", () => {
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(progressBar.value);
});

progressBar.addEventListener("input", () => {
    currentTime.textContent = calculateTime(progressBar.value);
    audio.currentTime = progressBar.value;
});

let sesDurumu = "sesli";

volumeBar.addEventListener("input", (e) => {    //e parametresi ile input eventinin referansını göndermiş olduk.
    const value = e.target.value;       // e.target.value ile, input value'nin hedeflediği target'in hangi value değerinde olduğunu, her input eventi çalıştırdığımızda atanacaktır.    (0-100 arasında gelecektir.)
    audio.volume = value / 100;         // audio.volume 0-1 arasında gelmesi gerekmektedir, o yüzden /100 yaptık.
    if(value == 0) {
        audio.muted = true;
        sesDurumu = "sessiz";
        volume.classList = "fa-solid fa-volume-xmark";
    } else {
        audio.muted = false;
        sesDurumu = "sesli";
        volume.classList = "fa-solid fa-volume-high";
    }
});

volume.addEventListener("click", () => {
    if(sesDurumu==="sesli") {
        audio.muted = true;     // audio'yu sessize alırız
        sesDurumu = "sessiz";
        volume.classList = "fa-solid fa-volume-xmark";  // icon değiştiririz
        volumeBar.value = 0;    
    } else {
        audio.muted = false;
        sesDurumu = "sesli";
        volume.classList = "fa-solid fa-volume-high";
        volumeBar.value = 100;
    }
});

const displayMusicList = (list) => {
    for(let i=0; i < list.length; i++) {
        let liTag = `
                <li li-index='${i}' onclick="selectedMusic(this)" class="list-group-item d-flex justify-content-between align-items-center">
                  <span>${list[i].getName()}</span>
                  <span id="music-${i}" class="badge bg-primary rounded-pill">3:40</span>
                    <audio class="music-${i}" src="mp3/${list[i].file}"></audio>
                </li>`;
                    // onclick="selectedMusic(this)" ile bir click eventi tanımladık. this parametresi ile, li etiketinin kendisini metotda göndereceğiz.
                    // li-index='${i}'  li-index isimli bir parametre tanımladık.
        ul.insertAdjacentElement("beforeend",liTag);

        let liAudioDuration = ul.querySelector(`#music-${i}`);  // audio'dan süreyi almak için
        let liAudioTag = ul.querySelector(`.music-${i}`);       // audio'dan alınan süreyi listelemek için kullandık.

        liAudioTag.addEventListener("loadeddata", () => {
            liAudioDuration.innerText = calculateTime(liAudioTag.duration);
        });
    }
}

const selectedMusic = (li) => {
    player.index = li.getAttribute("li-index");  // li elemanı içindeki li-index parametresinin değerini alabilmekteyiz.
    displayMusic(player.getMusic());
    playMusic();
    isPlayingNow();
}

const isPlayingNow = () => {
    for(let li of ul.querySelectorAll("li")) {
        if(li.classList.contains("playing")) {
            li.classList.remove("playing");
        }
    
        if(li.getAttribute("li-index") == player.index) {
            li.classList.add("playing");
        }
    }
}

audio.addEventListener("ended", () => {     // audio attributesinin ended eventine bağlı. (müzik bittiğinde tetiklenecek)
    nextMusic();
})