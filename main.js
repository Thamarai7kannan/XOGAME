import Game from "./game.js"
import GameView from "./gameView.js"
let game=new Game();
let gameview= new GameView();
document.querySelector(".restart").addEventListener("click",()=>
{onRestart();

})

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile)=>{
    tile.addEventListener("click",()=>{
    onTileClick(tile.dataset.index);
})
})
function onTileClick(i){
    game.makeMove(i)
    
    gameview.updateBorad(game);
 
}
function onRestart(){
    game=new Game();
    gameview.updateBorad(game);
}
gameview.updateBorad(game);