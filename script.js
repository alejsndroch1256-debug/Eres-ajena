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

let lineIdx = 0;
let charIdx = 0;
let isPlaying = false;

function type() {
    if (lineIdx < lines.length) {
        let currentTypingSpeed;
        
        // --- VALORES DE PRECISIÓN ---
        if (lineIdx === 12) { 
            currentTypingSpeed = 55; // La última línea un poco más rápida para cerrar perfecto
        } else if (lineIdx >= 9) {
            currentTypingSpeed = 85; // Coro: Ni muy lento ni muy rápido
        } else {
            currentTypingSpeed = 40; // Inicio dinámico
        }

        if (charIdx < lines[lineIdx].length) {
            lyricsElement.innerHTML += lines[lineIdx].charAt(charIdx);
            charIdx++;
            setTimeout(type, currentTypingSpeed);
        } else {
            let pause;
            if (lineIdx === 8) {
                pause = 1900; // Ajustado para que el "Eres ajena (ajena)" entre a tiempo
            } else if (lineIdx >= 9) {
                pause = 1300; // Pausas más cortas para evitar el retraso en móvil
            } else {
                pause = 700;
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
        type();
    }
});
