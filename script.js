
// First of all access all important tags or buttons etc.

let convert = document.querySelector(".convert");
let inputValue = document.querySelector(".input-value input");
let selectValue = document.querySelector(".input-value select");
let marlaValue = document.querySelector(".marla-value");
let kanalValue = document.querySelector(".kanal-value");
let acreValue = document.querySelector(".acre-value");
let murabbaValue = document.querySelector(".murabba-value");
let squareFeetValue = document.querySelector(".square-feet-value");
let squaremeterValue = document.querySelector(".square-meter-value");
let hints = document.querySelectorAll(".hint");
let reset = document.querySelector(".reset");


// Now add event listener on convert button

convert.addEventListener("click", () => {
    if (inputValue.value == "" || inputValue.value == 0 || inputValue.value < 0) {
        alert("Please Enter Some Positive Value!");
    }
    else if (selectValue.value == null || selectValue.value == "") {
        alert("Please select any unit!");
    }

    // Now put logic about units
    else {
        if (selectValue.value == "Marla") {
            marlaVal();
        }
        else if (selectValue.value == "Kanal") {
            kanalVal();
        }
        else if (selectValue.value == "Acre") {
            acreVal();
        }
        else if (selectValue.value == "Murabba") {
            murabbaVal();
        }
        else if (selectValue.value == "Square-Feet") {
            squareFeetVal();
        }
        else if (selectValue.value == "Square-Meter") {
            squaremeterVal();
        }
    }
});

// now we will check that our inpu field is empty or not so we can make cursor into pointer or not

inputValue.addEventListener("input", () => {
    if (inputValue.value.trim() === "") {
        reset.style.cursor = "not-allowed";
    }
    else {
        reset.style.cursor = "pointer";
    }

// make a function that checks that if our value is updated or greater than 0

    updateCursor();
});

function updateCursor() {
    if (marlaValue.innerText > 0 || kanalValue > 0 || acreValue > 0 || murabbaValue > 0 || squareFeetValue > 0 || squaremeterValue > 0) {
        reset.style.cursor = "pointer";
    }
    return true;
};

// if function returns true then this condition happens

reset.addEventListener("click", () => {
    if (updateCursor()) {
        marlaValue.innerText = "0.00";
        kanalValue.innerText = "0.00";
        acreValue.innerText = "0.000";
        murabbaValue.innerText = "0.000";
        squareFeetValue.innerText = "0.00";
        squaremeterValue.innerText = "0.00";
        inputValue.value = "";
    }
    reset.style.cursor = "not-allowed";
    hints.forEach(h => {
        h.style.display = "none";

    });
});

// Now creating function for each value

// this function calls when a user select marla unit
function marlaVal() {
    marlaValue.innerText = Number(inputValue.value).toFixed(2);
    kanalValue.innerText = Number(inputValue.value / 20).toFixed(2);
    acreValue.innerText = Number(inputValue.value / 160).toFixed(3);
    murabbaValue.innerText = Number(inputValue.value / 4000).toFixed(3);
    squareFeetValue.innerText = Number(inputValue.value * 272.2).toFixed(1);
    squaremeterValue.innerText = Number(inputValue.value * 25.2).toFixed(1);
    hints.forEach(h => {
        h.style.display = "block";
    });
};

// this function calls when a user select kanal unit
function kanalVal() {
    marlaValue.innerText = Number(inputValue.value * 20).toFixed(2);
    kanalValue.innerText = Number(inputValue.value).toFixed(2);
    acreValue.innerText = Number(inputValue.value / 8).toFixed(3);
    murabbaValue.innerText = Number(inputValue.value / 200).toFixed(3);
    squareFeetValue.innerText = Number(inputValue.value * 5445).toFixed(1);
    squaremeterValue.innerText = Number(inputValue.value * 505.8).toFixed(1);
    hints.forEach(h => {
        h.style.display = "block";

    });
    hints[0].innerText = "1 marla = 0.05 kanal";
    hints[1].innerText = "1 kanal";
    hints[2].innerText = "1 acre = 8 kanal";
    hints[3].innerText = "1 murba = 200 kanal";
    hints[4].innerText = "1 sqrFeet = 0.00018 kanal";
    hints[5].innerText = "1 sqrMtr = 0.0019 kanal";
};

// this function calls when user select acre unit
function acreVal() {
    marlaValue.innerText = Number(inputValue.value * 160).toFixed(2);
    kanalValue.innerText = Number(inputValue.value * 8).toFixed(2);
    acreValue.innerText = Number(inputValue.value).toFixed(3);
    murabbaValue.innerText = Number(inputValue.value / 25).toFixed(3);
    squareFeetValue.innerText = Number(inputValue.value * 43560).toFixed(1);
    squaremeterValue.innerText = Number(inputValue.value * 101171.4).toFixed(1);
    hints.forEach(h => {
        h.style.display = "block";

    });
    hints[0].innerText = "1 marla = 0.0062 acre";
    hints[1].innerText = "1 kanal = 0.125 acre";
    hints[2].innerText = "1 acre";
    hints[3].innerText = "1 murba = 25 acre";
    hints[4].innerText = "1 sqrFeet = 43560 acre";
    hints[5].innerText = "1 sqrMtr = 4046.8 acre";
};

// this function calls when user select murabbah unit
function murabbaVal() {
    marlaValue.innerText = Number(inputValue.value * 4000).toFixed(2);
    kanalValue.innerText = Number(inputValue.value * 200).toFixed(2);
    acreValue.innerText = Number(inputValue.value * 25).toFixed(3);
    murabbaValue.innerText = Number(inputValue.value).toFixed(3);
    squareFeetValue.innerText = Number(inputValue.value * 1089000).toFixed(1);
    squaremeterValue.innerText = Number(inputValue.value * 101171.4).toFixed(1);
    hints.forEach(h => {
        h.style.display = "block";

    });
    hints[0].innerText = "1 marla = 0.00025 murba";
    hints[1].innerText = "1 kanal = 0.005 murba";
    hints[2].innerText = "1 acre = 0.04 murba";
    hints[3].innerText = "1 murba";
    hints[4].innerText = "1 sqrFeet = 1089000 murba";
    hints[5].innerText = "1 sqrMtr = 101171.4 murba";
};

// this function calls when user select squareFeet unit
function squareFeetVal() {
    marlaValue.innerText = Number(inputValue.value / 272.25).toFixed(2);
    kanalValue.innerText = Number(inputValue.value / 5445).toFixed(2);
    acreValue.innerText = Number(inputValue.value / 43560).toFixed(3);
    murabbaValue.innerText = Number(inputValue.value / 1089000).toFixed(3);
    squareFeetValue.innerText = Number(inputValue.value).toFixed(1);
    squaremeterValue.innerText = Number(inputValue.value / 10.7639).toFixed(1);
    hints.forEach(h => {
        h.style.display = "block";

    });
    hints[0].innerText = "1 marla = 272.2 sqrFeet";
    hints[1].innerText = "1 kanal = 5445 sqrFeet";
    hints[2].innerText = "1 acre = 43560 sqrFeet";
    hints[3].innerText = "1 murba = 1089000 sqrFeet";
    hints[4].innerText = "1 sqrFeet";
    hints[5].innerText = "1 sqrMtr = 10.76 sqrFeet";
};

// this function calls when user enter squareMeter unit
function squaremeterVal() {
    marlaValue.innerText = Number(inputValue.value / 25.29).toFixed(2);
    kanalValue.innerText = Number(inputValue.value / 505.86).toFixed(2);
    acreValue.innerText = Number(inputValue.value / 4046.86).toFixed(3);
    murabbaValue.innerText = Number(inputValue.value / 101171.41).toFixed(3);
    squareFeetValue.innerText = Number(inputValue.value / 10.7639).toFixed(1);
    squaremeterValue.innerText = Number(inputValue.value).toFixed(1);
    hints.forEach(h => {
        h.style.display = "block";

    });
    hints[0].innerText = "1 marla = 25.2 sqrMtr";
    hints[1].innerText = "1 kanal = 505.8 sqrMtr";
    hints[2].innerText = "1 acre = 4046.8 sqrMtr";
    hints[3].innerText = "1 murba = 101171.4 sqrMtr";
    hints[4].innerText = "1 sqrFeet = 10.7 sqrMtr";
    hints[5].innerText = "1 sqrMtr";
}
