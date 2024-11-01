function CosineLaw(aSide, bSide, cAngle) {
    let cAngleRadians = cAngle * (Math.PI / 180);
    return Math.sqrt(Math.pow(aSide, 2) + Math.pow(bSide, 2) - (2 * aSide * bSide) * Math.cos(cAngleRadians))
}

function Asymptote(mValue, nValue) {
    if (mValue == nValue) {
        return "The asymptote is horizontal";
    }
    else if (nValue < mValue) {
        return "The asymptote is the x-axis";
    }
    else {
        switch(mValue - nValue) {
            case 1:
                return "Linear";
            case 2:
                return "Quadratic";
            case 3:
                return "Cubic";
            case 4:
                return "Quartic";
            case 5:
                return "Quintic";
            case 6:
                return "Sextic";
            case 7:
                return "Septic";
            case 8:
                return "Octic";
            case 9:
                return "Nonic";
            case 10:
                return "Decic";
        }
    }
}

function GregoryLeibnizPiApproximation(nValue) {
    output = 0
    for (i = 0; i < nValue; i++) {
        output += Math.pow(-1, i) / (2 * i + 1)
    }
    return 4 * output;
}

function CalculateCosineLaw(e) {
    e.preventDefault();

    let aSide = document.getElementById("cosine-side-a").value;
    let bSide = document.getElementById("cosine-side-b").value;
    let cAngle = document.getElementById("cosine-angle-c").value;
    const cosineLawOutput = document.querySelector(".cosine-side-c");

    cosineLawOutput.value = CosineLaw(aSide, bSide, cAngle);
}

function CalculateAsymptote(e) {
    e.preventDefault();

    let mValue = document.getElementById("asymptote-m-value").value;
    let nValue = document.getElementById("asymptote-n-value").value;
    const asymptoteTypeOutput = document.querySelector(".asymptote-type");

    asymptoteTypeOutput.value = Asymptote(mValue, nValue);
}


function CalculateGregoryLeibnizPiApproximation(e) {
    e.preventDefault();

    let nValue = document.getElementById("pi-approximation-n-value").value;
    const piApproximationOutput = document.querySelector(".pi-approximation-result");

    piApproximationOutput.value = GregoryLeibnizPiApproximation(nValue);
}