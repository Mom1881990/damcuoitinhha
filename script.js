function openCard() {
    document.getElementById("cover").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
    document.getElementById("music").play();
}

// Countdown
const weddingDate = new Date("2025-12-21T11:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const d = weddingDate - now;

    if (d < 0) return;

    const days = Math.floor(d / (1000 * 60 * 60 * 24));
    const hours = Math.floor((d / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((d / (1000 * 60)) % 60);

    document.getElementById("timer").innerHTML =
        `${days} ngày • ${hours} giờ • ${mins} phút`;
}, 1000);
