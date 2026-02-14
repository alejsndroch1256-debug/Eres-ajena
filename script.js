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
        
        // --- LINEA DE VELOCIDAD DE LETRAS (Escritura) ---
        // Sube los números para que la letra escriba MÁS LENTO.
        let speed = (lineIdx >= 9) ? 140 : 100; // MODIFICA AQUÍ (150 coro, 100 inicio)

        if (charIdx < lines[lineIdx].length) {
            lyricsElement.innerHTML += lines[lineIdx].charAt(charIdx);
            charIdx++;
            setTimeout(type, speed);
        } else {
            
            // --- LINEAS DE PAUSA (Tiempo entre frases) ---
            // Sube los números para que tarde MÁS en cambiar de frase.
            let pause;
            if (lineIdx === 8) {
                pause = 2200; // MODIFICA AQUÍ (La pausa larga antes del coro)
            } else if (lineIdx >= 9) {
                pause = 1800; // MODIFICA AQUÍ (Pausa entre frases del coro)
            } else {
                pause = 1200; // MODIFICA AQUÍ (Pausa entre frases del inicio)
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

        // --- LINEA DE ARRANQUE ---
        // Si la letra empieza muy rápido apenas haces click, sube el 500 a 1000.
        setTimeout(type, 500); // MODIFICA AQUÍ
    }
});
