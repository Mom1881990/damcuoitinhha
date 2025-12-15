function openCard() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("main").classList.remove("hidden");
  document.getElementById("music").play();
}

function toggleMusic() {
  const m = document.getElementById("music");
  m.paused ? m.play() : m.pause();
}

// COUNTDOWN
const weddingDate = new Date("2025-12-21T11:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const d = weddingDate - now;
  if (d < 0) return;

  document.getElementById("days").innerText = Math.floor(d / (1000*60*60*24));
  document.getElementById("hours").innerText = Math.floor((d / (1000*60*60)) % 24);
  document.getElementById("minutes").innerText = Math.floor((d / (1000*60)) % 60);
  document.getElementById("seconds").innerText = Math.floor((d / 1000) % 60);
}, 1000);

// LIGHTBOX
function openImg(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightImg").src = src;
}
