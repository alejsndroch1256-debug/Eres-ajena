const lyricsElement = document.getElementById('lyrics');
const audio = document.getElementById('track');
const statusText = document.getElementById('status');

const lines = [
    "Me rompiste el corazón", 
    "Jugaste con mi amor", 
    "Ajena", 
    "Eres ajena", 
    "ay mama",
    "Me rompiste el corazón", 
    "Jugaste con mi amor", 
    "Ajena", 
    "Eres ajena", 
    "Eres ajena (ajena)", 
    "Sigues siendo ajena (ajena)", 
    "Eres ajena (ajena)", 
    "Sigues siendo ajena (ajena)"
];

let lineIdx = 0, charIdx = 0, isPlaying = false;

function type() {
    if (lineIdx < lines.length) {
        // --- VELOCIDAD DE ESCRITURA (Más tranquila para que no corra) ---
        // 120ms para el coro y 70ms para el inicio.
        let speed = (lineIdx >= 9) ? 120 : 70;

        if (charIdx < lines[lineIdx].length) {
            lyricsElement.innerHTML += lines[lineIdx].charAt(charIdx);
            charIdx++;
            setTimeout(type, speed);
        } else {
            // --- TIEMPO DE ESPERA ENTRE FRASES ---
            let pause;
            if (lineIdx === 8) {
                pause = 2000; // Los 2 segundos de impacto que querías
            } else if (lineIdx >= 9) {
                pause = 1500; // Pausa larga en el coro para que no vaya rápido
            } else {
                pause = 1000; // Pausa de 1 segundo en los versos
            }

            setTimeout(() => {
                lyricsElement.innerHTML = "";
                charIdx = 0; 
                lineIdx++;
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
        // Un pequeño delay de 300ms antes de empezar para que el audio arranque bien
        setTimeout(type, 300); 
    }
});
