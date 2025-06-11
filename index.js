const scoreText = document.querySelector("#scoreText");

const unitSize = 25;
const shipColor = "lightgreen";
const shipBorder = "black";
const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");

let xVelocity = unitSize;
let yVelocity = 0;
let score = 0;
let num = Math.floor(Math.random() * 5) + 1;

switch(num){
    case 5:
    ship = [
        {x:unitSize * 4, y:0},
        {x:unitSize * 3, y:0},
        {x:unitSize * 2, y:0},
        {x:unitSize, y:0},
        {x:0, y:0}
    ];
    break; 
    case 4:
    ship = [        
        {x:unitSize * 3, y:0},
        {x:unitSize * 2, y:0},
        {x:unitSize, y:0},
        {x:0, y:0}
    ];
    break;
    case 3:
    ship = [        
        {x:unitSize * 2, y:0},
        {x:unitSize, y:0},
        {x:0, y:0}
    ];
    break;
    case 2:
    ship = [        
        {x:unitSize, y:0},
        {x:0, y:0}
    ];
    break;
    case 1:
    ship = [        
        {x:0, y:0}
    ];
    break;   
}

startBtn.addEventListener("click", gameStart);
stopBtn.addEventListener("click", gameStop);

function gameStart(){   
    scoreText.textContent = score;    
    drawShip();            
}

function gameStop(){
    window.location.reload();      
}

function drawShip(){
    ctx.fillStyle = shipColor;
    ctx.strokeStyle = shipBorder;
    ship.forEach(shipPart => {
        ctx.fillRect(shipPart.x, shipPart.y, unitSize, unitSize);
        ctx.strokeRect(shipPart.x, shipPart.y, unitSize, unitSize);
    })
};