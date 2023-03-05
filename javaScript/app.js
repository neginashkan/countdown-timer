class MusicPlayer{
    constructor(){
        this.music = new Audio(
          "./audios/music.mp3"
        );
        this.music.volume=0.5
    }
    playMusic(){
        this.music.play()
        this.music.loop = true;
    }
    stopMusic(){
        this.music.pause();
        this.music.currentTime = 0;
    }
}



const secondEl = document.getElementById("seconds");
const minuteEl = document.getElementById("minutes");
const hourEl = document.getElementById("hours");
const dayEl = document.getElementById("days");
const imageEl = document.getElementById("image");
const titlesEl = document.querySelectorAll(".title");
const countdownContainerEl = document.querySelector(".countdown-container");

const timeId = setInterval(countDown, 1000);
function countDown() {
    let musicPlayer = new MusicPlayer();
  // all to millisecond
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const todayDate = new Date();
  const nowRuz = new Date("March 21, 2023 00:54:28");
  const timeLeft = nowRuz - todayDate;
  if (timeLeft === 0) {
    musicPlayer.playMusic()
    countdownContainerEl.textContent = "🎉🎊 Happy New Year 🎇🎈";
    changeHtmlCss()
    imageEl.src = "/images/gif.gif";
    clearInterval(timeId);
} else if (timeLeft < 0) {
    
    countdownContainerEl.textContent = "❗ New Year Finished ⁉❗  ";
    changeHtmlCss()
    imageEl.src = "/images/gif2.gif";
    clearInterval(timeId);
  }
  dayEl.textContent = Math.floor((timeLeft/day))
  hourEl.textContent = Math.floor((timeLeft%day)/hour)
  minuteEl.textContent = Math.floor((timeLeft%hour)/minute)
  secondEl.textContent = Math.floor((timeLeft%minute)/second)
}

function changeHtmlCss(){
    titlesEl.forEach((title) => (title.textContent = ""));
    countdownContainerEl.style.fontSize = "3em";
    countdownContainerEl.style.fontFamily = "Josefin Sans";
    countdownContainerEl.style.fontWeight = "700";
}

