const musicHowYouLoveMe = document.getElementById("HowYouLoveMe");
const musicWarForLove = document.getElementById("WarForLove");
const musicGhost = document.getElementById("Ghost");
const musicNeverSayGoodbye = document.getElementById("NeverSayGoodbye");
const musicWhereAreYouNow = document.getElementById("WhereAreYouNow");
const musicFollowYouDown = document.getElementById("FollowYouDown");

const HowYouLoveMeAudio = document.getElementById("HowYouLoveMeAudio");
const WarForLoveAudio = document.getElementById("WarForLoveAudio");
const GhostAudio = document.getElementById("GhostAudio");
const NeverSayGoodbyeAudio = document.getElementById("NeverSayGoodbyeAudio");
const WhereAreYouNowAudio = document.getElementById("WhereAreYouNowAudio");
const FollowYouDownAudio = document.getElementById("FollowYouDownAudio");

musicHowYouLoveMe.addEventListener("click", () => {
  WarForLoveAudio.classList.add("audio-hidden");
  GhostAudio.classList.add("audio-hidden");
  NeverSayGoodbyeAudio.classList.add("audio-hidden");
  WhereAreYouNowAudio.classList.add("audio-hidden");
  FollowYouDownAudio.classList.add("audio-hidden");
  HowYouLoveMeAudio.classList.remove("audio-hidden");

  musicHowYouLoveMe.classList.add("current-audio");
  musicWarForLove.classList.remove("current-audio");
  musicGhost.classList.remove("current-audio");
  musicNeverSayGoodbye.classList.remove("current-audio");
  musicWhereAreYouNow.classList.remove("current-audio");
  musicFollowYouDown.classList.remove("current-audio");
});

musicWarForLove.addEventListener("click", () => {
  HowYouLoveMeAudio.classList.add("audio-hidden");
  GhostAudio.classList.add("audio-hidden");
  NeverSayGoodbyeAudio.classList.add("audio-hidden");
  WhereAreYouNowAudio.classList.add("audio-hidden");
  FollowYouDownAudio.classList.add("audio-hidden");
  WarForLoveAudio.classList.remove("audio-hidden");

  musicWarForLove.classList.add("current-audio");
  musicHowYouLoveMe.classList.remove("current-audio");
  musicGhost.classList.remove("current-audio");
  musicNeverSayGoodbye.classList.remove("current-audio");
  musicWhereAreYouNow.classList.remove("current-audio");
  musicFollowYouDown.classList.remove("current-audio");
});

musicGhost.addEventListener("click", () => {
  HowYouLoveMeAudio.classList.add("audio-hidden");
  WarForLoveAudio.classList.add("audio-hidden");
  NeverSayGoodbyeAudio.classList.add("audio-hidden");
  WhereAreYouNowAudio.classList.add("audio-hidden");
  FollowYouDownAudio.classList.add("audio-hidden");
  GhostAudio.classList.remove("audio-hidden");

  musicGhost.classList.add("current-audio");
  musicHowYouLoveMe.classList.remove("current-audio");
  musicWarForLove.classList.remove("current-audio");
  musicNeverSayGoodbye.classList.remove("current-audio");
  musicWhereAreYouNow.classList.remove("current-audio");
  musicFollowYouDown.classList.remove("current-audio");
});

musicNeverSayGoodbye.addEventListener("click", () => {
  HowYouLoveMeAudio.classList.add("audio-hidden");
  GhostAudio.classList.add("audio-hidden");
  WarForLoveAudio.classList.add("audio-hidden");
  WhereAreYouNowAudio.classList.add("audio-hidden");
  FollowYouDownAudio.classList.add("audio-hidden");
  NeverSayGoodbyeAudio.classList.remove("audio-hidden");

  musicNeverSayGoodbye.classList.add("current-audio");
  musicHowYouLoveMe.classList.remove("current-audio");
  musicWarForLove.classList.remove("current-audio");
  musicGhost.classList.remove("current-audio");
  musicWhereAreYouNow.classList.remove("current-audio");
  musicFollowYouDown.classList.remove("current-audio");
});

musicWhereAreYouNow.addEventListener("click", () => {
  HowYouLoveMeAudio.classList.add("audio-hidden");
  WarForLoveAudio.classList.add("audio-hidden");
  GhostAudio.classList.add("audio-hidden");
  NeverSayGoodbyeAudio.classList.add("audio-hidden");
  FollowYouDownAudio.classList.add("audio-hidden");
  WhereAreYouNowAudio.classList.remove("audio-hidden");

  musicWhereAreYouNow.classList.add("current-audio");
  musicHowYouLoveMe.classList.remove("current-audio");
  musicWarForLove.classList.remove("current-audio");
  musicGhost.classList.remove("current-audio");
  musicNeverSayGoodbye.classList.remove("current-audio");
  musicFollowYouDown.classList.remove("current-audio");
});

musicWarForLove.addEventListener("click", () => {
  HowYouLoveMeAudio.classList.add("audio-hidden");
  WhereAreYouNowAudio.classList.add("audio-hidden");
  GhostAudio.classList.add("audio-hidden");
  NeverSayGoodbyeAudio.classList.add("audio-hidden");
  FollowYouDownAudio.classList.add("audio-hidden");
  WarForLoveAudio.classList.remove("audio-hidden");

  musicWarForLove.classList.add("current-audio");
  musicHowYouLoveMe.classList.remove("current-audio");
  musicWhereAreYouNow.classList.remove("current-audio");
  musicGhost.classList.remove("current-audio");
  musicNeverSayGoodbye.classList.remove("current-audio");
  musicFollowYouDown.classList.remove("current-audio");
});

musicFollowYouDown.addEventListener("click", () => {
  HowYouLoveMeAudio.classList.add("audio-hidden");
  WhereAreYouNowAudio.classList.add("audio-hidden");
  GhostAudio.classList.add("audio-hidden");
  NeverSayGoodbyeAudio.classList.add("audio-hidden");
  WarForLoveAudio.classList.add("audio-hidden");
  FollowYouDownAudio.classList.remove("audio-hidden");

  musicFollowYouDown.classList.add("current-audio");
  musicHowYouLoveMe.classList.remove("current-audio");
  musicWhereAreYouNow.classList.remove("current-audio");
  musicGhost.classList.remove("current-audio");
  musicNeverSayGoodbye.classList.remove("current-audio");
  musicWarForLove.classList.remove("current-audio");
});

/* STOP PLAYING PREVIOUS AUDIO WHEN ANOTHER STARTS */
const audio = document.querySelectorAll("audio");
Array.from(audio).map((el) =>
  el.addEventListener("play", () => {
    const played = document.querySelector('[data-play="true"]');
    if (played && played !== el) {
      played.pause();
      played.removeAttribute("data-play");
    }
    el.dataset.play = "true";
  })
);
