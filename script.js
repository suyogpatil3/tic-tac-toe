let gameActive = true;
let currentPlayer="Player1";
let status = document.querySelector(".status");
let game=[ "","","","","","","","",""];
const winCondition= [
    [2,4,6],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    
]

document.querySelector(".game-restart").addEventListener("click",handleRestart);
document.querySelectorAll(".cell").forEach(cell => cell.addEventListener("click",cellClick));
   
function handleRestart(){
    gameActive = true;
    game=[ "","","","","","","","",""];
    currentPlayer = "Player1";
    document.querySelectorAll(".cell").forEach(cell => cell.innerHTML = "");
    status.innerHTML = `Its ${currentPlayer}'s turn`;
    window.location.reload();

}

function cellClick(event){
    let clickedCell = event.target;
    cellNo = parseInt(clickedCell.getAttribute("data-cell-index"));
    if(game[cellNo] != "" || gameActive == false){
        return;
    }
    currentPlayer==="Player1" ? clickedCell.innerText = "X" : clickedCell.innerText = "O";
    game[cellNo] = currentPlayer;
    console.log(game);
    validate();
}

function changePlayer(){
    currentPlayer = currentPlayer==="Player1" ? "Player2" : "Player1";
    status.innerHTML = `It's  ${currentPlayer}'s turn`
}

function validate(){
 
    for(let i = 0 ; i <= 7 ; i++){
        currentCheck = winCondition[i];
        let a = game[currentCheck[0]];
        let b = game[currentCheck[1]];
        let c = game[currentCheck[2]];

        if(a === "" || b === "" || c=== ""){
            continue;
        }

        if(a === b && b === c && a === c){
            status.innerHTML =(`Congratulations! ${currentPlayer} wins`);
            gameActive = false;
            return
        }

        let draw = !game.includes("");
        if(draw) {
            status.innerHTML =("Draw!");
            gameActive = false;
            return

        }
    }
    // gameActive && !draw ? changePlayer() : "";
    changePlayer();
}




