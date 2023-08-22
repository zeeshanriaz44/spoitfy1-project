let songindex = 0;

let audioelement = new Audio("songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let mastersongname = document.getElementById("mastersongname");
let myprogressbar = document.getElementById("myprogess");
let gif = document.getElementById("gf");
let songlist = Array.from(document.getElementsByClassName("songitem"));
// audioelement.play();

let songs = [
  {
    songname: "brast ky mousm",
    filepath: "songs/1.mp3",
    coverpath: "covers/1.jfif",
  },
  {
    songname: "brast ky mousm",
    filepath: "songs/2.mp3",
    coverpath: "covers/2.jfif",
  },
  {
    songname: "Chaaha Hai Tujhko",
    filepath: "songs/3.mp3",
    coverpath: "covers/1.jfif",
  },
  {
    songname: "Dilbar",
    filepath: "songs/4.mp3",
    coverpath: "covers/4.jfif",
  },
  {
    songname: "Khaani OST Song Rahat Fateh Ali Khan",
    filepath: "songs/5.mp3",
    coverpath: "covers/5.jfif",
  },
  {
    songname: "old_Traffic Signal-Dilruba",
    filepath: "songs/6.mp3",
    coverpath: "covers/4.jfif",
  },
  {
    songname: "Pasoori Nu Satyaprem Ki Katha",
    filepath: "songs/7.mp3",
    coverpath: "covers/7.jfif",
  },
  {
    songname: "Yaar Na Bichray OST [BuzzPk.com]",
    filepath: "songs/8.mp3",
    coverpath: "covers/8.jfif",
  },
  {
    songname: "brast ky mousm",
    filepath: "songs/9.mp3",
    coverpath: "covers/9.jfif",
  },
];

songlist.forEach((element, i) => {
  // console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songname")[0].innerHTML = songs[i].songname;
});

masterplay.addEventListener("click", () => {
  if (audioelement.paused || audioelement.currentTime <= 0) {
    audioelement.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioelement.pause();
    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
audioelement.addEventListener("timeupdate", () => {
  // console.log("time update");
  progre = (audioelement.currentTime / audioelement.duration) * 100;
  // console.log(progre);
  myprogressbar.value = progre;
});
myprogressbar.addEventListener("change", () => {
  audioelement.currentTime =
    (myprogressbar.value * audioelement.duration) / 100;
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      makeAllPlays();
      songindex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioelement.src = `songs/${songindex + 1}.mp3`;
      mastersongname.innerHTML = songs[songindex].songname;
      audioelement.currentTime = 0;
      audioelement.play();
      gif.style.opacity = 1;
      masterplay.classList.remove("fa-circle-play");
      masterplay.classList.add("fa-circle-pause");
    });
  }
);
document.getElementById("next").addEventListener("click", () => {
  if (songindex >= 9) {
    songindex = 0;
  } else {
    songindex += 1;
  }
  audioelement.src = `songs/${songindex + 1}.mp3`;
  mastersongname.innerHTML = songs[songindex].songname;
  audioelement.currentTime = 0;
  audioelement.play();
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songindex <= 0) {
    songindex = 0;
  } else {
    songindex -= 1;
  }
  audioelement.src = `songs/${songindex + 1}.mp3`;
  mastersongname.innerHTML = songs[songindex].songname;
  audioelement.currentTime = 0;
  audioelement.play();
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
});
masterplay.addEventListener("click", () => {
  if (audioelement.paused || audioelement.currentTime <= 0) {
    audioelement.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioelement.pause();
    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
