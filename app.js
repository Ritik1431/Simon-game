// Step 1 - Press any key to start the game.
let gameSeq = [];
let userSeq = [];
let btns = ["red", "green", "yellow", "purple"];
let h2 = document.querySelector("h2");

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is started");
        started = true;

        setTimeout(levelUp(), 1000);
    }
});

//------------------------------------------
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    },250)
}
function userFlash(btn) {
    btn.classList.add("user"); 
    setTimeout(function () {
        btn.classList.remove("user")
    },250)
}
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level : ${level}`;

    // random btn choose
    let randomIndex = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    // console.log(randomIndex);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameSeq.push(randomColor);
    // console.log(gameSeq);
    btnFlash(randomBtn);

}
function checkAns(index) {
    // console.log("curr level : ", level);
    if (userSeq[index] === gameSeq[index])
        {
        if (userSeq.length == gameSeq.length)
        {
            levelUp();
            }
    }
    else {
        h2.innerHTML = `Game Over!! . Your Score was ${level} .<br/> Press any key to start the game.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}
function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
}
function reset()
{
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
