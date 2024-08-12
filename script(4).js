const line1 = [
    "El viento en los pinos",
    "Brilla la luna",
    "Río que fluye"
];

const line2 = [
    "suavemente susurra",
    "en la fría noche",
    "junto a la montaña"
];

const line3 = [
    "como un suspiro",
    "silencio en el bosque",
    "una hoja cae"
];

document.getElementById('generate').addEventListener('click', () => {
    document.getElementById('line1').textContent = line1[Math.floor(Math.random() * line1.length)];
    document.getElementById('line2').textContent = line2[Math.floor(Math.random() * line2.length)];
    document.getElementById('line3').textContent = line3[Math.floor(Math.random() * line3.length)];
});
