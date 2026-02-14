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
        // VELOCIDADES DE ESCRITURA RÁPIDAS
        let speed = (lineIdx === 12) ? 50 : (lineIdx >= 9) ? 80 : 35;

        if (charIdx < lines[lineIdx].length) {
            lyricsElement.innerHTML += lines[lineIdx].charAt(charIdx);
            charIdx++;
            setTimeout(type, speed);
        } else {
            let pause;
            if (lineIdx === 4) { pause = 400; }  // "ay mama" cambio rápido
            else if (lineIdx === 8) { pause = 1800; } // Espera del coro (un pelín menos de 2s)
            else if (lineIdx >= 9) { pause = 800; }  // Coro: cambio de frase rápido
            else { pause = 200; } // Versos: cambio casi instantáneo

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
