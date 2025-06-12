const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const stopBtn = document.querySelector("#stopBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "white";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;
let running = false;
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
    running = true;
    scoreText.textContent = score;
    nextTick();
};

function nextTick(){
    if(running){
        setTimeout(()=>{ 

            clearBoard();
            moveSnake();
            drawSnake(); 
            nextTick();

        }, 500);
    }
    
};

function clearBoard(){ 
ctx.fillStyle = boardBackground; 
ctx.fillRect(0, 0, gameWidth, gameHeight); 
}; 

function moveSnake(){
    const head = {x: ship[0].x + xVelocity,
                  y: ship[0].y + yVelocity};
    ship.unshift(head);
    if(false){

    }
    else{
        ship.pop();
    }
};

function drawSnake(){
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    ship.forEach(shipPart => {
        ctx.fillRect(shipPart.x, shipPart.y, unitSize, unitSize);
        ctx.strokeRect(shipPart.x, shipPart.y, unitSize, unitSize);
    })
};

function gameStop(){
    window.location.reload();
};