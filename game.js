export default class Game{
    constructor(){
       console.log("init the game")
       this.turn="x";
       this.board =new Array(9).fill(null)
       }


nextTurn(){
    if (this.turn=="x" ){
        this.turn="o";
    }
    else{
        this.turn="x";
    }
}
makeMove(i){


    if(this.endGame()){
        return
    }
    if(this.board[i]){
        return;
    }
    this.board[i]=this.turn;
   let winningCombinations=  this.findWiningCombination();
   if(!winningCombinations){
    this.nextTurn();
   
}}
findWiningCombination(){

const winningCombinations=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]
for(const combination of winningCombinations){
 const[a,b,c]=combination;
 if (this.board[a]&&(this.board[a] === this.board[b] && this.board[a]===this.board[c])){
     return combination;
            }
        }
     return null;
   }
   endGame(){
    let winningCombinations= this.findWiningCombination();
    if(winningCombinations){
        return this.turn
    }else{
    return false
    }


   }
}
