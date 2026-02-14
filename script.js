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
        
        // Mantenemos tu lógica exacta de velocidades
        if (lineIdx === 12) { 
            currentTypingSpeed = 70; // Un pelín más lento que antes para el celular
        } else if (lineIdx >= 9) {
            currentTypingSpeed = 110; // Coro lento estable
        } else {
            currentTypingSpeed = 50; // Inicio estable
        }

        if (charIdx < lines[lineIdx].length) {
            lyricsElement.innerHTML += lines[lineIdx].charAt(charIdx);
            charIdx++;
            setTimeout(type, currentTypingSpeed);
        } else {
            let pause;
            if (lineIdx === 8) {
                pause = 2000; // Tus 2 segundos de espera
            } else if (lineIdx >= 9) {
                pause = 1500; // Pausa del coro
            } else {
                pause = 900;  // Pausa inicial
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
        audio.play().catch(e => console.log("Error al reproducir:", e));
        type();
    }
});
