const statNameArray = ["Force", "Resistance", "Agilite", "Chance", "Exploration", "Esprit"];
let buttonArrays = [];
let valuesArray = [];

function updateBtn() {
    let indexOfThis = -1;
    let loopIteration = 0;
    while (indexOfThis == -1 && loopIteration < buttonArrays.length) {
        indexOfThis = buttonArrays[loopIteration].indexOf(this);
        loopIteration++;
    }
    loopIteration--;
    if (this.value === "+") {
        valuesArray[loopIteration] += 1;
    } else if (this.value === "-") {
        valuesArray[loopIteration] -= 1;
    }
    buttonArrays[loopIteration][0].innerHTML = valuesArray[loopIteration];
}

for (let i = 0; i < statNameArray.length; i++) {
    let statValue = 0;
    let buttonArray = [];
    buttonArray[0] = document.getElementById("affichageStat" + statNameArray[i]);
    buttonArray[1] = document.getElementById("buttonMinus" + statNameArray[i]);
    buttonArray[2] = document.getElementById("buttonPlus" + statNameArray[i]);
    buttonArrays[i] = buttonArray;
    buttonArray[0].textContent = statValue;
    valuesArray[i] = statValue;

    buttonArray[1].addEventListener('click', updateBtn);
    buttonArray[2].addEventListener('click', updateBtn);

}