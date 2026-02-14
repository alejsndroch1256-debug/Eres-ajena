const lyricsElement = document.getElementById('lyrics');
const audio = document.getElementById('track');
const statusText = document.getElementById('status');

const lines = [
    "Me rompiste el corazón", "Jugaste con mi amor", "Ajena", "Eres ajena", "ay mama",
    "Me rompiste el corazón", "Jugaste con mi amor", "Ajena", "Eres ajena", 
    "Eres ajena (ajena)", "Sigues siendo ajena (ajena)", "Eres ajena (ajena)", "Sigues siendo ajena (ajena)"
];

let lineIdx = 0, charIdx = 0, isPlaying = false;

function type() {
    if (lineIdx < lines.length) {
        let speed = (lineIdx === 12) ? 60 : (lineIdx >= 9) ? 100 : 40;

        if (charIdx < lines[lineIdx].length) {
            lyricsElement.innerHTML += lines[lineIdx].charAt(charIdx);
            charIdx++;
            setTimeout(type, speed);
        } else {
            let pause = (lineIdx === 8) ? 2000 : (lineIdx >= 9) ? 1400 : 800;
            setTimeout(() => {
                lyricsElement.innerHTML = "";
                charIdx = 0; lineIdx++;
                type();
            }, pause);
        }
    }
}

window.addEventListener('click', () => {
    if (!isPlaying) {
        isPlaying = true;
        statusText.style.display = 'none';
        audio.play();
        type();
    }
});
