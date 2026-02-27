

//Player Object Constructor
function Player(name, mark) {
    this.name = name;
    this.mark = mark;
}

//Player Objects
const human = new Player("Clark", "O");
const ai = new Player("AI", "X");


//Game Board Object
function gameBoard() {
    const board = [
        [["X"],[],["O"]],
        [["O"],["O"],["O"]],
        [["O"],[],["X"]],
    ];

    function aiInput() {
        let aiMark = Math.floor(Math.random() * 3);

        board[aiMark][aiMark] = "X";
        console.log(board);
    };

    return board;
};



//Game Flow
function gameFlow(player1, player2, board) {

    console.log("Game starts!");
    console.log(player1.name + " vs. " + player2.name);

    //Decide winner function
    function gameLogic() {
        //horizontal top
        if (board[0][0] && board[0][1] && board[0][2] === "O") {
            if (player1.mark === "O") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (board[0][0] && board[0][1] && board[0][2] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        //horizontal middle
        else if (board[1][0] && board[1][1] && board[1][2] == "O") {
            if (player1.mark == "O") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (board[1][0] && board[1][1] && board[1][2] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        //horizontal bottom
        else if (board[2][0] && board[2][1] && board[2][2] == "O") {
            if (player1.mark == "O") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (board[2][0] && board[2][1] && board[2][2] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }


        //vertical left
        else if (board[0][0] && board[1][0] && board[2][0] == "O") {
            if (player1.mark == "O") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (board[0][0] && board[1][0] && board[2][0] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        //vertical middle
        else if (board[0][1] && board[1][1] && board[2][1] == "O") {
            if (player1.mark == "O") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (board[0][1] && board[1][1] && board[2][1] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        //vertical right
        else if (board[0][2] && board[1][2] && board[2][2] == "O") {
            if (player1.mark == "O") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (board[0][2] && board[1][2] && board[2][2] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }

        //criss (\)
        else if (board[0][0] && board[1][1] && board[2][2] == "O") {
            if (player1.mark == "O") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        } 
        else if (board[0][0] && board[1][1] && board[2][2] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        // cross (/)
        else if (board[0][2] && board[1][1] && board[2][0] == "O") {
            if (player1.mark == "O") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        } 
        else if (board[0][2] && board[1][1] && board[2][0] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        
        else {
            console.log("It's a draw!");
        }
    };

    gameLogic();
}

gameFlow(human, ai, gameBoard());