function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function setRandomGradient() {
    let r1 = getRandomArbitrary(0, 256);
    let g1 = getRandomArbitrary(0, 256);
    let b1 = getRandomArbitrary(0, 256);

    let r2 = getRandomArbitrary(0, 256);
    let g2 = getRandomArbitrary(0, 256);
    let b2 = getRandomArbitrary(0, 256);

    let direction = getRandomArbitrary(0, 361);

    console.log(`Changed color to: rgb(${r1}, ${g1}, ${b1}) and rgb(${r2}, ${g2}, ${b2}) at ${direction} degree`);

    document.body.style.backgroundImage = `linear-gradient(${direction}deg,rgb(${r1},${g1},${b1}), rgb(${r2},${g2},${b2}))`;
}