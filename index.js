const scoreText = document.querySelector("#scoreText");

const unitSize = 25;
const shipColor = "lightgreen";
const shipBorder = "black";
const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");

let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let score = 0;
let ship = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];

gameStart();

function gameStart(){
    running= true;    
    scoreText.textContent = score; 
    drawShip();   
}

function drawShip(){
    ctx.fillStyle = shipColor;
    ctx.strokeStyle = shipBorder;
    ship.forEach(shipPart => {
        ctx.fillRect(shipPart.x, shipPart.y, unitSize, unitSize);
        ctx.strokeRect(shipPart.x, shipPart.y, unitSize, unitSize);
    })
};