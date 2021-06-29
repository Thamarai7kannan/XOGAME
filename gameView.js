export default class GameView{
    constructor(){
        console.log("init game view");
    }
    updateBorad(game){
       this.undateTurn(game);
       const winningCombanition= game.findWiningCombination();
       for(let i=0;i<game.board.length;i++){
           const tile= document.querySelector(`.board-tile[data-index='${i}']`);
           tile.textContent=game.board[i];

           tile.classList.remove("tile-winner")

           let tileType=game.board[i]=="x" ? "tile-x":"tile-o";
           tile.innerHTML=`<span class=${tileType}>${game.board[i]? game.board[i]:" "}</span>`
           if(winningCombanition&&winningCombanition.includes(i)){
               tile.classList.add("tile-winner")
           }
       }
    }

undateTurn(game){
    let playerX= document.querySelector(".player-x");
    let playerO= document.querySelector(".player-o");
    playerX.classList.remove("active");
    playerO.classList.remove("active");
    if(game.turn=="x"){
        playerX.classList.add("active");
}
else
{
    playerO.classList.add("active");
}



}}