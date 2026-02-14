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
        
        // --- HEMOS SUBIDO LOS TIEMPOS PARA FRENAR LA VELOCIDAD EN MÓVIL ---
        if (lineIdx === 12) { 
            currentTypingSpeed = 90; // Antes 60, ahora 90 para que no corra al final
        } else if (lineIdx >= 9) {
            currentTypingSpeed = 140; // Antes 100, ahora 140 para que sea realmente LENTO
        } else {
            currentTypingSpeed = 70; // Antes 40, ahora 70 para el inicio
        }

        if (charIdx < lines[lineIdx].length) {
            lyricsElement.innerHTML += lines[lineIdx].charAt(charIdx);
            charIdx++;
            setTimeout(type, currentTypingSpeed);
        } else {
            let pause;
            if (lineIdx === 8) {
                // Mantenemos tus 2 segundos, pero si el móvil sigue rápido, 
                // puedes subir este 2000 a 2200.
                pause = 2000; 
            } else if (lineIdx >= 9) {
                pause = 1800; // Pausa más larga entre frases del coro
            } else {
                pause = 1000; // Pausa más larga al inicio
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
