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
        
        // --- VELOCIDAD CALIBRADA ---
        if (lineIdx === 12) { 
            currentTypingSpeed = 65; // El final que querías, ni lento ni rápido
        } else if (lineIdx >= 9) {
            currentTypingSpeed = 100; // Velocidad estándar del coro
        } else {
            currentTypingSpeed = 45; // Versos rápidos del inicio
        }

        if (charIdx < lines[lineIdx].length) {
            lyricsElement.innerHTML += lines[lineIdx].charAt(charIdx);
            charIdx++;
            setTimeout(type, currentTypingSpeed);
        } else {
            let pause;
            if (lineIdx === 8) {
                pause = 2000; // Tus 2 segundos exactos
            } else if (lineIdx >= 9) {
                pause = 1400; // Pausa para que el coro no se amontone
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
