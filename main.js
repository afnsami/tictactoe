

//Player Object Constructor
function Player(name, mark) {
    this.name = name;
    this.mark = mark;
}

//Player Objects
const playerOne = new Player("Clark", "X");
const playerTwo = new Player("Bruce", "O");



//Game Board Object
function gameBoard(playerOne, playerTwo) {
    let board = [
        [["X"],[],[]],
        [[],["O"],[]],
        [[],[],["O"]],
    ];

    function gameLogic() {
        if (board[0][0] && board[1][1] && board[2][2] == "O") {
            console.log("You won!");
        } else {
            console.log("you lost");
        }
    };

    gameLogic();
};

gameBoard();



//Game Flow
function gameFlow() {

}