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
        // Velocidades de escritura
        let speed = (lineIdx === 12) ? 60 : (lineIdx >= 9) ? 100 : 45;

        if (charIdx < lines[lineIdx].length) {
            lyricsElement.innerHTML += lines[lineIdx].charAt(charIdx);
            charIdx++;
            setTimeout(type, speed);
        } else {
            // --- AQUÍ ESTÁ EL ARREGLO DE LOS 2 SEGUNDOS ---
            let pause;
            if (lineIdx === 8) {
                pause = 2000; // Solo aquí esperamos 2 segundos (antes del coro)
            } else if (lineIdx >= 9) {
                pause = 1000; // Pausa más corta en el coro para que no se atrase
            } else {
                pause = 300;  // CAMBIO RÁPIDO para las primeras frases
            }

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
