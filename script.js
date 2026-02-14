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
    "Sigues siendo ajena (ajena)" // <-- ÚNICAMENTE ESTA será un poco más fluida
];

let lineIdx = 0;
let charIdx = 0;
let isPlaying = false;

function type() {
    if (lineIdx < lines.length) {
        
        let currentTypingSpeed;
        
        // Solo la ULTIMA frase (posición 12) va un poco más rápido (60ms)
        // Todo lo demás del coro (desde la 9 a la 11) se queda en lento (100ms)
        if (lineIdx === 12) { 
            currentTypingSpeed = 60; 
        } else if (lineIdx >= 9) {
            currentTypingSpeed = 100;
        } else {
            currentTypingSpeed = 40;
        }

        if (charIdx < lines[lineIdx].length) {
            lyricsElement.innerHTML += lines[lineIdx].charAt(charIdx);
            charIdx++;
            setTimeout(type, currentTypingSpeed);
        } else {
            let pause;
            if (lineIdx === 8) {
                pause = 2000; // Tus 2 segundos intactos
            } else if (lineIdx >= 9) {
                pause = 1500; // Pausa lenta para el coro
            } else {
                pause = 800;
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