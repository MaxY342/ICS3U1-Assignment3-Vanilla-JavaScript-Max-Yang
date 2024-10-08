function CosineLaw(aSide, bSide, cAngle) {
    return Math.sqrt(Math.pow(aSide, 2) + Math.pow(bSide, 2) - (2 * aSide * bSide) * Math.cos(cAngle))
}

const cosineButton = document.querySelector(".cosine-calculate");
let cosineLawOutput = document.querySelector(".cosine-side-c");

cosineButton.addEventListener("click", function() {
    let aSide = document.getElementById("cosine-side-a");
    let bSide = document.getElementById("cosine-side-b");
    let cAngle = document.getElementById("cosine-angle-c");
    cosineLawOutput.value = CosineLaw(aSide, bSide, cAngle);
})
