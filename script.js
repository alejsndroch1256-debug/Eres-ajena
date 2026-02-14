const lyrics = document.getElementById('lyrics');
const audio = document.getElementById('track');
const status = document.getElementById('status');

// AQUÍ CONTROLAS EL TIEMPO EXACTO
const tiempos = [
    { s: 0.5, t: "Me rompiste el corazón" },
    { s: 2.8, t: "Jugaste con mi amor" },
    { s: 4.8, t: "Ajena" },
    { s: 6.5, t: "Eres ajena" },
    { s: 8.5, t: "ay mama" },
    { s: 10.5, t: "Me rompiste el corazón" },
    { s: 12.8, t: "Jugaste con mi amor" },
    { s: 14.8, t: "Ajena" },
    { s: 16.5, t: "Eres ajena" }, // Aquí queda en negro los 2 segs antes del coro
    { s: 19.0, t: "Eres ajena (ajena)" },
    { s: 21.5, t: "Sigues siendo ajena (ajena)" },
    { s: 24.0, t: "Eres ajena (ajena)" },
    { s: 26.5, t: "Sigues siendo ajena (ajena)" }
];

audio.ontimeupdate = () => {
    let current = audio.currentTime;
    let activeLine = "";

    tiempos.forEach((linea, i) => {
        if (current >= linea.s) {
            activeLine = linea.t;
        }
    });

    // Limpia la pantalla entre el "Eres ajena" (16.5) y el coro (19.0)
    if (current > 17.8 && current < 19.0) activeLine = "";

    lyrics.innerHTML = activeLine;
};

window.onclick = () => {
    status.style.display = 'none';
    audio.play();
};
