/* ********** VARIABLES ********** */

const stepsPerLvl = 12;
let gameIsRunning = false;
let lifePoints = 0;
let i = 0;
let currentRed;
let currentGreen;
let currentBlue;
let currentLevel;
let percentRed;
let percentGreen;
let percentBlue;
let randomNumber;

const header = document.querySelector('header');
const notWinnerBlock = document.querySelector('#notWinnerBlock');
const winnerBlock = document.querySelector('#winnerBlock');

const lvl1ColoredBtn = document.querySelector('#lvl1ColoredBtn');
const lvl2ColoredBtn = document.querySelector('#lvl2ColoredBtn');
const lvl3ColoredBtn = document.querySelector('#lvl3ColoredBtn');
const lvl4ColoredBtn = document.querySelector('#lvl4ColoredBtn');
const lvlColoredBtn = [lvl1ColoredBtn, lvl2ColoredBtn, lvl3ColoredBtn, lvl4ColoredBtn];

const lvl1UncoloredBtn = document.querySelector('#lvl1UncoloredBtn');
const lvl2UncoloredBtn = document.querySelector('#lvl2UncoloredBtn');
const lvl3UncoloredBtn = document.querySelector('#lvl3UncoloredBtn');
const lvl4UncoloredBtn = document.querySelector('#lvl4UncoloredBtn');
const lvlUncoloredBtn = [lvl1UncoloredBtn, lvl2UncoloredBtn, lvl3UncoloredBtn, lvl4UncoloredBtn];

const lvl1Container = document.querySelector('#lvl1Container');
const lvl2Container = document.querySelector('#lvl2Container');
const lvl3Container = document.querySelector('#lvl3Container');
const lvl4Container = document.querySelector('#lvl4Container');
const lvlContainer = [lvl1Container, lvl2Container, lvl3Container, lvl4Container];

const lvl1PlayingWindow = document.querySelector('#lvl1PlayingWindow');
const lvl2PlayingWindow = document.querySelector('#lvl2PlayingWindow');
const lvl3PlayingWindow = document.querySelector('#lvl3PlayingWindow');
const lvl4PlayingWindow = document.querySelector('#lvl4PlayingWindow');
const lvlPlayingWindow = [lvl1PlayingWindow, lvl2PlayingWindow, lvl3PlayingWindow, lvl4PlayingWindow];

const lvl1ColoredWindow = document.querySelector('#lvl1ColoredWindow');
const lvl2ColoredWindow = document.querySelector('#lvl2ColoredWindow');
const lvl3ColoredWindow = document.querySelector('#lvl3ColoredWindow');
const lvl4ColoredWindow = document.querySelector('#lvl4ColoredWindow');
const lvlColoredWindow = [lvl1ColoredWindow, lvl2ColoredWindow, lvl3ColoredWindow, lvl4ColoredWindow];

const redBtn = document.querySelectorAll('.redBtn');
const greenBtn = document.querySelectorAll('.greenBtn');
const blueBtn = document.querySelectorAll('.blueBtn');
const leaveBtn = document.querySelectorAll('.leaveBtn');

const lvl1NextWindow = document.querySelector('#lvl1NextWindow');
const lvl2NextWindow = document.querySelector('#lvl2NextWindow');
const lvl3NextWindow = document.querySelector('#lvl3NextWindow');
const lvl4NextWindow = document.querySelector('#lvl4NextWindow');
const lvlNextWindow = [lvl1NextWindow, lvl2NextWindow, lvl3NextWindow, lvl4NextWindow];

const lvl1CorrectFalseText = document.querySelector('#lvl1CorrectFalseText');
const lvl2CorrectFalseText = document.querySelector('#lvl2CorrectFalseText');
const lvl3CorrectFalseText = document.querySelector('#lvl3CorrectFalseText');
const lvl4CorrectFalseText = document.querySelector('#lvl4CorrectFalseText');
const lvlCorrectFalseText = [lvl1CorrectFalseText, lvl2CorrectFalseText, lvl3CorrectFalseText, lvl4CorrectFalseText];

const lvl1RgbText = document.querySelector('#lvl1RgbText');
const lvl2RgbText = document.querySelector('#lvl2RgbText');
const lvl3RgbText = document.querySelector('#lvl3RgbText');
const lvl4RgbText = document.querySelector('#lvl4RgbText');
const lvlRgbText = [lvl1RgbText, lvl2RgbText, lvl3RgbText, lvl4RgbText];

const lvl1RedTxt = document.querySelector('#lvl1RedTxt');
const lvl2RedTxt = document.querySelector('#lvl2RedTxt');
const lvl3RedTxt = document.querySelector('#lvl3RedTxt');
const lvl4RedTxt = document.querySelector('#lvl4RedTxt');
const lvlRedTxt = [lvl1RedTxt, lvl2RedTxt, lvl3RedTxt, lvl4RedTxt];

const lvl1GreenTxt = document.querySelector('#lvl1GreenTxt');
const lvl2GreenTxt = document.querySelector('#lvl2GreenTxt');
const lvl3GreenTxt = document.querySelector('#lvl3GreenTxt');
const lvl4GreenTxt = document.querySelector('#lvl4GreenTxt');
const lvlGreenTxt = [lvl1GreenTxt, lvl2GreenTxt, lvl3GreenTxt, lvl4GreenTxt];

const lvl1BlueTxt = document.querySelector('#lvl1BlueTxt');
const lvl2BlueTxt = document.querySelector('#lvl2BlueTxt');
const lvl3BlueTxt = document.querySelector('#lvl3BlueTxt');
const lvl4BlueTxt = document.querySelector('#lvl4BlueTxt');
const lvlBlueTxt = [lvl1BlueTxt, lvl2BlueTxt, lvl3BlueTxt, lvl4BlueTxt];

const nextBtn = document.querySelectorAll('.nextBtn');

const lvl1GameOverWindow = document.querySelector('#lvl1GameOverWindow');
const lvl2GameOverWindow = document.querySelector('#lvl2GameOverWindow');
const lvl3GameOverWindow = document.querySelector('#lvl3GameOverWindow');
const lvl4GameOverWindow = document.querySelector('#lvl4GameOverWindow');
const lvlGameOverWindow = [lvl1GameOverWindow, lvl2GameOverWindow, lvl3GameOverWindow, lvl4GameOverWindow];

const gameOverBtn = document.querySelectorAll('.gameOverBtn');

const lvl1SucceedWindow = document.querySelector('#lvl1SucceedWindow');
const lvl2SucceedWindow = document.querySelector('#lvl2SucceedWindow');
const lvl3SucceedWindow = document.querySelector('#lvl3SucceedWindow');
const lvl4SucceedWindow = document.querySelector('#lvl4SucceedWindow');
const lvlSucceedWindow = [lvl1SucceedWindow, lvl2SucceedWindow, lvl3SucceedWindow, lvl4SucceedWindow];

const succeedBtn = document.querySelectorAll('.succeedBtn');

const lvlLives = document.querySelectorAll('.lvlLives');
const progressTxt = document.querySelectorAll('.progressTxt');

/* ********** BASE DE DONNEES ********** */

const lvl1RedArray = [205, 237, 2, 213, 142, 189, 64, 81, 65, 131, 226, 83, 176, 104, 200, 19, 77, 58, 7, 224, 227, 31];
const lvl1GreenArray = [106, 61, 48, 138, 77, 14, 149, 37, 245, 80, 121, 154, 233, 200, 100, 124, 184, 157, 88, 90, 73, 103];
const lvl1BlueArray = [56, 225, 45, 113, 38, 36, 71, 145, 82, 67, 178, 54, 44, 246, 30, 81, 245, 99, 58, 0, 164, 119];
const lvl1Array = [];

const lvl2RedArray = [189, 160, 123, 105, 14, 230, 181, 149, 116, 100, 131, 175, 236, 146, 164, 17, 173, 26, 93, 198, 234, 48];
const lvl2GreenArray = [251, 106, 41, 89, 134, 112, 84, 61, 196, 89, 220, 74, 35, 98, 25, 158, 213, 111, 109, 117, 196, 52];
const lvl2BlueArray = [167, 122, 193, 64, 156, 190, 211, 229, 57, 218, 84, 243, 197, 183, 219, 124, 182, 100, 47, 85, 144, 44];
const lvl2Array = [];

const lvl3RedArray = [28, 176, 194, 173, 245, 46, 140, 170, 152, 84, 14, 149, 155, 236, 94, 156, 159, 71, 72, 18, 92, 157];
const lvl3GreenArray = [217, 221, 208, 35, 175, 244, 56, 188, 181, 29, 82, 101, 158, 46, 1, 163, 20, 220, 59, 254, 237, 63];
const lvl3BlueArray = [183, 230, 23, 188, 96, 127, 161, 160, 19, 68, 75, 11, 210, 185, 74, 23, 190, 249, 46, 219, 191, 119];
const lvl3Array = [];

const lvl4RedArray = [91, 175, 66, 173, 77, 211, 135, 140, 176, 84, 136, 207, 196, 200, 195, 86, 111, 200, 112, 124, 123, 107];
const lvl4GreenArray = [95, 174, 79, 139, 70, 224, 139, 139, 165, 138, 212, 212, 173, 171, 200, 121, 122, 189, 108, 102, 124, 35];
const lvl4BlueArray = [117, 155, 76, 175, 79, 222, 140, 135, 120, 120, 209, 136, 190, 201, 201, 122, 86, 197, 79, 120, 102, 101];
const lvl4Array = [];

// MODE TEST
// 
// const lvl1RedArray = [125, 54, 86];
// const lvl1GreenArray = [10, 73, 201];
// const lvl1BlueArray = [187, 254, 124];
// const lvl1Array = [];

// const lvl2RedArray = [125, 54, 86];
// const lvl2GreenArray = [10, 73, 201];
// const lvl2BlueArray = [187, 254, 124];
// const lvl2Array = [];

// const lvl3RedArray = [125, 54, 86];
// const lvl3GreenArray = [10, 73, 201];
// const lvl3BlueArray = [187, 254, 124];
// const lvl3Array = [];

// const lvl4RedArray = [125, 54, 86];
// const lvl4GreenArray = [10, 73, 201];
// const lvl4BlueArray = [187, 254, 124];
// const lvl4Array = [];

const lvlArray = [lvl1Array, lvl2Array, lvl3Array, lvl4Array];

const redsArray = [lvl1RedArray, lvl2RedArray, lvl3RedArray, lvl4RedArray];
const greensArray = [lvl1GreenArray, lvl2GreenArray, lvl3GreenArray, lvl4GreenArray];
const bluesArray = [lvl1BlueArray, lvl2BlueArray, lvl3BlueArray, lvl4BlueArray];

/* ********** FONCTIONS ********** */

const createLvlArray = (targetArray, redsArray, greensArray, bluesArray) => {
    for (let j = 0; j < redsArray.length; j++) {
        targetArray.push(`RGB(${redsArray[j]},${greensArray[j]},${bluesArray[j]})`)
    }
}

const startingGame = (level) => {
    if (gameIsRunning === true) {
        gameAlreadyStarted();
    } else {
        defineCurrentLevel(level);
        gameIsRunning = true;
        lifePoints = 2;
        lvlContainer[currentLevel - 1].classList.remove('hidden');
        randomNumberCalc();
        defineCurrentColors(redsArray[currentLevel - 1][randomNumber], greensArray[currentLevel - 1][randomNumber], bluesArray[currentLevel - 1][randomNumber]);
        printLife();
        printProgress();
        playingWindowOn();
    };
}

const playingWindowOn = () => {
    lvlPlayingWindow[currentLevel - 1].classList.remove('hidden');
    lvlNextWindow[currentLevel - 1].classList.add('hidden');
    lvlGameOverWindow[currentLevel - 1].classList.add('hidden');
    lvlSucceedWindow[currentLevel - 1].classList.add('hidden');
}

const nextWindowOn = () => {
    lvlPlayingWindow[currentLevel - 1].classList.add('hidden');
    lvlNextWindow[currentLevel - 1].classList.remove('hidden');
    lvlGameOverWindow[currentLevel - 1].classList.add('hidden');
    lvlSucceedWindow[currentLevel - 1].classList.add('hidden');
}

const gameOverWindowOn = () => {
    lvlPlayingWindow[currentLevel - 1].classList.add('hidden');
    lvlNextWindow[currentLevel - 1].classList.add('hidden');
    lvlGameOverWindow[currentLevel - 1].classList.remove('hidden');
    lvlSucceedWindow[currentLevel - 1].classList.add('hidden');
}

const succeedWindowOn = () => {
    lvlPlayingWindow[currentLevel - 1].classList.add('hidden');
    lvlNextWindow[currentLevel - 1].classList.add('hidden');
    lvlGameOverWindow[currentLevel - 1].classList.add('hidden');
    lvlSucceedWindow[currentLevel - 1].classList.remove('hidden');
}

const printLife = () => {
    lvlLives.forEach(function (el) {
        el.innerText = `Vies restantes: ${lifePoints}`;
    })
}

const printProgress = () => {
    progressTxt.forEach(function (el) {
        el.innerText = `${i + 1}/${stepsPerLvl}`;
    })
}

const defineCurrentColors = (red, green, blue) => {
    currentRed = red;
    currentGreen = green;
    currentBlue = blue;
    lvlColoredWindow[currentLevel - 1].style.backgroundColor = `${lvlArray[currentLevel - 1][randomNumber]}`;
}

const defineCurrentLevel = (level) => {
    currentLevel = level;
}

const colorSelected = (pickedColor) => {
    switch (pickedColor) {
        case 'red':
            if (currentRed >= currentBlue && currentRed >= currentGreen) {
                correctAnswer();
            } else {
                wrongAnswer();
            }
            break;
        case 'green':
            if (currentGreen >= currentBlue && currentGreen >= currentRed) {
                correctAnswer();
            } else {
                wrongAnswer();
            }
            break;
        case 'blue':
            if (currentBlue >= currentRed && currentBlue >= currentGreen) {
                correctAnswer();
            } else {
                wrongAnswer();
            }
            break;
        default:
            alert("Aucune couleur sélectionnée.");
    }
}

const percentsCalc = () => {
    percentRed = Math.round(currentRed / (currentRed + currentGreen + currentBlue) * 100 * 10) / 10;
    percentGreen = Math.round(currentGreen / (currentRed + currentGreen + currentBlue) * 100 * 10) / 10;
    percentBlue = Math.round(currentBlue / (currentRed + currentGreen + currentBlue) * 100 * 10) / 10;
}

const correctAnswer = () => {
    nextWindowOn();
    percentsCalc();
    lvlCorrectFalseText[currentLevel - 1].innerText = 'Correct !';
    lvlCorrectFalseText[currentLevel - 1].style.color = 'RGB(0,255,0)';
    lvlRgbText[currentLevel - 1].innerText = `${lvlArray[currentLevel - 1][randomNumber]}`;
    lvlRedTxt[currentLevel - 1].innerText = `~${percentRed}%`;
    lvlGreenTxt[currentLevel - 1].innerText = `~${percentGreen}%`;
    lvlBlueTxt[currentLevel - 1].innerText = `~${percentBlue}%`;
    i++;
    printLife();
    printProgress();
}

const wrongAnswer = () => {
    nextWindowOn();
    percentsCalc();
    lvlCorrectFalseText[currentLevel - 1].innerText = 'Faux !';
    lvlCorrectFalseText[currentLevel - 1].style.color = 'RGB(255,0,0)';
    lvlRgbText[currentLevel - 1].innerText = `${lvlArray[currentLevel - 1][randomNumber]}`;
    lvlRedTxt[currentLevel - 1].innerText = `~${percentRed}%`;
    lvlGreenTxt[currentLevel - 1].innerText = `~${percentGreen}%`;
    lvlBlueTxt[currentLevel - 1].innerText = `~${percentBlue}%`;
    i++;
    lifePoints--;
    printLife();
    printProgress();
}

const nextSelected = () => {
    if (lifePoints <= 0) {
        gameOverWindowOn();
    } else if (i === stepsPerLvl && lifePoints > 0) {
        succeedWindowOn();
    } else {
        playingWindowOn();
        randomNumberCalc();
        defineCurrentColors(redsArray[currentLevel - 1][randomNumber], greensArray[currentLevel - 1][randomNumber], bluesArray[currentLevel - 1][randomNumber]);
    }
}

const succeedReset = () => {
    checkingCurrentLvl();
    gameIsRunning = false;
    lifePoints = 0;
    i = 0;
    currentRed;
    currentGreen;
    currentBlue;
    currentLevel;
    percentRed;
    percentGreen;
    percentBlue;
    lvlContainer[currentLevel - 1].classList.add('hidden');
    lvlPlayingWindow[currentLevel - 1].classList.add('hidden');
    lvlNextWindow[currentLevel - 1].classList.add('hidden');
    lvlGameOverWindow[currentLevel - 1].classList.add('hidden');
    lvlSucceedWindow[currentLevel - 1].classList.add('hidden');
}

const checkingCurrentLvl = () => {
    if (currentLevel < lvlArray.length) {
        lvlUncoloredBtn[currentLevel].classList.add('hidden');
        lvlColoredBtn[currentLevel].classList.remove('hidden');
    } else if (currentLevel >= lvlArray.length) {
        notWinnerBlock.classList.add('hidden');
        winnerBlock.classList.remove('hidden');
        header.classList.add('winner');
        lvlColoredBtn.forEach(function (num) {
            num.classList.add('winner');
        })
    }
}

const gameOverReset = () => {
    gameIsRunning = false;
    lifePoints = 0;
    i = 0;
    currentRed;
    currentGreen;
    currentBlue;
    currentLevel;
    percentRed;
    percentGreen;
    percentBlue;
    lvlContainer[currentLevel - 1].classList.add('hidden');
    lvlPlayingWindow[currentLevel - 1].classList.add('hidden');
    lvlNextWindow[currentLevel - 1].classList.add('hidden');
    lvlGameOverWindow[currentLevel - 1].classList.add('hidden');
    lvlSucceedWindow[currentLevel - 1].classList.add('hidden');
}

const unvailableLvl = () => {
    if (gameIsRunning === true) {
        gameAlreadyStarted();
    } else {
        alert("Vous n'avez pas encore débloqué ce niveau.");
    }
}

const gameAlreadyStarted = () => {
    alert("Une partie est déjà en cours...");
}

const randomNumberCalc = () => {
    randomNumber = Math.floor(Math.random() * lvlArray[currentLevel - 1].length);
}

/* ********** EVENTS ********** */

createLvlArray(lvl1Array, lvl1RedArray, lvl1GreenArray, lvl1BlueArray);
createLvlArray(lvl2Array, lvl2RedArray, lvl2GreenArray, lvl2BlueArray);
createLvlArray(lvl3Array, lvl3RedArray, lvl3GreenArray, lvl3BlueArray);
createLvlArray(lvl4Array, lvl4RedArray, lvl4GreenArray, lvl4BlueArray);

lvl1ColoredBtn.addEventListener('click', () => { startingGame(1) });
lvl2ColoredBtn.addEventListener('click', () => { startingGame(2) });
lvl3ColoredBtn.addEventListener('click', () => { startingGame(3) });
lvl4ColoredBtn.addEventListener('click', () => { startingGame(4) });

redBtn[0].addEventListener('click', () => { colorSelected('red') });
greenBtn[0].addEventListener('click', () => { colorSelected('green') });
blueBtn[0].addEventListener('click', () => { colorSelected('blue') });
leaveBtn[0].addEventListener('click', () => { gameOverWindowOn() });

redBtn[1].addEventListener('click', () => { colorSelected('red') });
greenBtn[1].addEventListener('click', () => { colorSelected('green') });
blueBtn[1].addEventListener('click', () => { colorSelected('blue') });
leaveBtn[1].addEventListener('click', () => { gameOverWindowOn() });

redBtn[2].addEventListener('click', () => { colorSelected('red') });
greenBtn[2].addEventListener('click', () => { colorSelected('green') });
blueBtn[2].addEventListener('click', () => { colorSelected('blue') });
leaveBtn[2].addEventListener('click', () => { gameOverWindowOn() });

redBtn[3].addEventListener('click', () => { colorSelected('red') });
greenBtn[3].addEventListener('click', () => { colorSelected('green') });
blueBtn[3].addEventListener('click', () => { colorSelected('blue') });
leaveBtn[3].addEventListener('click', () => { gameOverWindowOn() });

nextBtn[0].addEventListener('click', () => { nextSelected() });
nextBtn[1].addEventListener('click', () => { nextSelected() });
nextBtn[2].addEventListener('click', () => { nextSelected() });
nextBtn[3].addEventListener('click', () => { nextSelected() });

succeedBtn[0].addEventListener('click', () => { succeedReset() });
succeedBtn[1].addEventListener('click', () => { succeedReset() });
succeedBtn[2].addEventListener('click', () => { succeedReset() });
succeedBtn[3].addEventListener('click', () => { succeedReset() });

gameOverBtn[0].addEventListener('click', () => { gameOverReset() });
gameOverBtn[1].addEventListener('click', () => { gameOverReset() });
gameOverBtn[2].addEventListener('click', () => { gameOverReset() });
gameOverBtn[3].addEventListener('click', () => { gameOverReset() });

lvlUncoloredBtn[0].addEventListener('click', () => { unvailableLvl() });
lvlUncoloredBtn[1].addEventListener('click', () => { unvailableLvl() });
lvlUncoloredBtn[2].addEventListener('click', () => { unvailableLvl() });
lvlUncoloredBtn[3].addEventListener('click', () => { unvailableLvl() });