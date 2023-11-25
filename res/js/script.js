// Hráč + skore
const firstPlayer = document.getElementById("firstPlayer");
const firstScore = document.getElementById("firstScore");
const secondPlayer = document.getElementById("secondPlayer");
const secondScore = document.getElementById("secondScore");

// Výhra + prohra + remíza
const win = document.getElementById("win");
const loss = document.getElementById("loss");
const draw = document.getElementById("draw");

// Volba ze tří možností
const player1P1 = document.getElementById("player1P1");
const player1P2 = document.getElementById("player1P2");
const player1P3 = document.getElementById("player1P3");

const player2P1 = document.getElementById("player2P1");
const player2P2 = document.getElementById("player2P2");
const player2P3 = document.getElementById("player2P3");

// Finální volba - zobrazení volby
const finalChoose = document.getElementById("finalChoose");
const finalChoose2 = document.getElementById("finalChoose2");

// Kontrola odehrání
const playCheck = document.getElementById("playCheck");
const playCheck2 = document.getElementById("playCheck2");

// Odsazení
const center1 = document.getElementById("center1");
const center2 = document.getElementById("center2");

// Reset - nové kolo
const pressDiv = document.getElementById("pressDiv");
const resetText = document.getElementById("resetText");

pressDiv.style.display = "none";
resetText.style.display = "none";


// Výběr jména hráče:
let firstName = prompt("Zadejte jméno prvního hráče: ");
let secondName = prompt("Zadejte jméno druhého hráče: ");

firstPlayer.innerText = "Player: " + firstName;
secondPlayer.innerText = "Player: " + secondName;

// Počáteční skore:
let score1 = 0;
let score2 = 0;

let rock = 0;
let paper = 0;
let scissors = 0;

let rock2 = 0;
let paper2 = 0;
let scissors2 = 0;

// Změny + kontrola výhry
function Change() {
    playCheck.innerText = "Played !";
    center1.style.paddingLeft = "340px";
    playCheck.style.color = "lime";
}

function Change2() {
    playCheck2.innerText = "Played !";
    center2.style.paddingLeft = "300px";
    playCheck2.style.color = "lime";
}

function ConditionsR2() {
    if(rock == "kámen" && rock2 == "kámen") {
        win.style.display = "none";
        loss.style.display = "none";
        draw.style.display = "inline";
        draw.innerText = "Draw !";
        finalChoose.src = "./res/img/rock.png";
        finalChoose2.src = "./res/img/rock.png";
    } else if (paper == "papír" && rock2 == "kámen") {
        win.innerText = "Winner: " + firstName;
        loss.innerText = "Loser: " + secondName;
        score1++;
        firstScore.innerText = "Score: " + score1;
        finalChoose.src = "./res/img/paper.png";
        finalChoose2.src = "./res/img/rock.png";
    } else if (scissors == "nůžky" && rock2 == "kámen") {
        win.innerText = "Winner: " + secondName;
        loss.innerText = "Loser: " + firstName;
        score2++;
        secondScore.innerText = "Score: " + score2;
        finalChoose.src = "./res/img/scissors.png";
        finalChoose2.src = "./res/img/rock.png";

    }
}

function ConditionsP2() {
    if(rock == "kámen" && paper2 == "papír") {
        win.innerText = "Winner: " + secondName;
        loss.innerText = "Loser: " + firstName;
        score2++;
        secondScore.innerText = "Score: " + score2;
        finalChoose.src = "./res/img/rock.png";
        finalChoose2.src = "./res/img/paper.png";
    } else if (paper == "papír" && paper2 == "papír") {
        win.style.display = "none";
        loss.style.display = "none";
        draw.style.display = "inline";
        draw.innerText = "Draw !";
        finalChoose.src = "./res/img/paper.png";
        finalChoose2.src = "./res/img/paper.png";
    } else if(scissors == "nůžky" && paper2 == "papír") {
        win.innerText = "Winner: " + firstName;
        loss.innerText = "Loser: " + secondName;
        score1++;
        firstScore.innerText = "Score: " + score1;
        finalChoose.src = "./res/img/scissors.png";
        finalChoose2.src = "./res/img/paper.png";
    }
}

function ConditionsS2() {
    if(rock == "kámen" && scissors2 == "nůžky") {
        win.innerText = "Winner: " + firstName;
        loss.innerText = "Loser: " + secondName;
        score1++;
        firstScore.innerText = "Score: " + score1;
        finalChoose.src = "./res/img/rock.png";
        finalChoose2.src = "./res/img/scissors.png";
    } else if(paper == "papír" && scissors2 == "nůžky") {
        win.innerText = "Winner: " + secondName;
        loss.innerText = "Loser: " + firstName;
        score2++;    
        secondScore.innerText = "Score: " + score2;
        finalChoose.src = "./res/img/paper.png";
        finalChoose2.src = "./res/img/scissors.png";
    } else if(scissors == "nůžky" && scissors2 == "nůžky") {
        win.style.display = "none";
        loss.style.display = "none";
        draw.style.display = "inline";
        draw.innerText = "Draw !";
        finalChoose.src = "./res/img/scissors.png";
        finalChoose2.src = "./res/img/scissors.png";
    }
}

// Výběr
player1P1.addEventListener("click", () => {
    Change();
    rock = "kámen";
});

player1P2.addEventListener("click", () => {
    Change();
    paper = "papír";
});

player1P3.addEventListener("click", () => {
    Change();
    scissors = "nůžky";
});

player2P1.addEventListener("click", () => {
    Change2();
    rock2 = "kámen";
    ConditionsR2();
    pressDiv.style.display = "inline";
    pressDiv.style.height = "50px";
    pressDiv.style.width = "200px";
    resetText.style.display = "inline";
    resetText.style.paddingTop = "15px";
    resetText.style.marginLeft = "20px";
});

player2P2.addEventListener("click", () => {
    Change2();
    paper2 = "papír";
    ConditionsP2();
    pressDiv.style.display = "inline";
    pressDiv.style.height = "50px";
    pressDiv.style.width = "200px";
    resetText.style.display = "inline";
    resetText.style.paddingTop = "15px";
    resetText.style.marginLeft = "20px";
});

player2P3.addEventListener("click", () => {
    Change2();
    scissors2 = "nůžky";
    ConditionsS2();
    pressDiv.style.display = "inline";
    pressDiv.style.height = "50px";
    pressDiv.style.width = "200px";
    resetText.style.display = "inline";
    resetText.style.paddingTop = "15px";
    resetText.style.marginLeft = "20px";
});

pressDiv.onclick = () => {
    finalChoose.src = "./res/img/questionMark.png";
    finalChoose.style.height = "250px";
    finalChoose.style.width = "300px";

    finalChoose2.src = "./res/img/questionMark.png";
    finalChoose2.style.height = "250px";
    finalChoose2.style.width = "300px";

    // Resetování výběru
    rock = 0;
    paper = 0;
    scissors = 0;

    rock2 = 0;
    paper2 = 0;
    scissors2 = 0;

    win.style.display = "block";
    win.innerText = "Winner: ";
    loss.style.display = "block";
    loss.innerText = "Loser: ";
    draw.style.display = "none";
    center1.style.paddingLeft = "310px";
    playCheck.innerText = "Not played !";
    playCheck.style.color = "red";
    playCheck2.innerText = "Not played !";
    playCheck2.style.color = "red";
    center2.style.paddingLeft = "280px";
    pressDiv.style.display = "none";
    resetText.style.display = "none";
}



