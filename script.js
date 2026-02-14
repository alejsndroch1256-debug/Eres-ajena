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
        
        // TIEMPOS AJUSTADOS PARA ANDROID (ZTE)
        if (lineIdx === 12) { 
            currentTypingSpeed = 85; // Final fluido pero controlado
        } else if (lineIdx >= 9) {
            currentTypingSpeed = 150; // Coro bien lento para que no se adelante
        } else {
            currentTypingSpeed = 75; // Versos iniciales
        }

        if (charIdx < lines[lineIdx].length) {
            lyricsElement.innerHTML += lines[lineIdx].charAt(charIdx);
            charIdx++;
            setTimeout(type, currentTypingSpeed);
        } else {
            let pause;
            if (lineIdx === 8) {
                pause = 2100; // Un pelín más de 2 seg para asegurar el drop
            } else if (lineIdx >= 9) {
                pause = 1900; // Pausa generosa en el coro
            } else {
                pause = 1100; 
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
        audio.play().catch(e => console.log("Error:", e));
        type();
    }
});