

//Player Object Constructor
function Player(name, mark) {
    this.name = name;
    this.mark = mark;
};

const player1 = new Player("Clark", "O");
const ai = new Player("A.I.", "X");


//-----------------------------------


//Game Board Object
let board = [
        'O', 'O', 'O',
        'O', '', '',
        '', '', '',
    ];


function printBoard() {
    console.log("[" + board[0] + "  " + board[1] + "  " + board[2] + "]");
    console.log("[" + board[3] + "  " + board[4] + "  " + board[5] + "]");
    console.log("[" + board[6] + "  " + board[7] + "  " + board[8] + "]");
}


//-----------------------------------


//Game Flow
function gameFlow(player1, player2, board) {

    //Game Starts
    console.log("------(Game starts)------");
    
    //GET AI INPUT
    function aiInput() { 

        let emptyIndexesArray = []; 

        const emptyIndex = board.reduce((accumulator, current, index) => {
            
            if (current === '') {
                accumulator.push(index);
            }

            return accumulator;
        }, []);

        emptyIndexesArray.push(emptyIndex);

    

        let coordinate = Math.floor(Math.random() * emptyIndexesArray[0].length);
        console.log(emptyIndexesArray);
        board[emptyIndexesArray[0][coordinate]] = 'X';

    };



    //Winner
    function getWinner() {
        //horizontal top
        if (board[0] == 'O' && board[1] == 'O' && board[2] == "O") {
            if (player1.mark == "O") {
                console.log(player1.name + " is the winner! horizontal top");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (board[0] == 'X' && board[1] == 'X' && board[2] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        //horizontal middle
        else if (board[3] == "O" && board[4] == "O" && board[5] == "O") {
            if (player1.mark == "O") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (board[3] == "X" && board[4] == "X" && board[5] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        //horizontal bottom
        else if (board[6] == "O" && board[7] == "O" && board[8] == "O") {
            if (player1.mark == "O") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (board[6] == "X" && board[7] == "X" && board[8] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }


        //vertical left
        else if (board[0] == "O" && board[3] == "O" && board[6] == "O") {
            if (player1.mark == "O") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (board[0] == "X" && board[3] == "X" && board[6] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        //vertical middle
        else if (board[1] == "O" && board[4] == "O" && board[7] == "O") {
            if (player1.mark == "O") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (board[1] == "X" && board[4] == "X" && board[7] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        //vertical right
        else if (board[2] == "O" && board[5] == "O" && board[8] == "O") {
            if (player1.mark == "O") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (board[2] == "X" && board[5] == "X" && board[8] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }

        //criss (\)
        else if (board[0] == 'O' && board[4] == 'O' && board[8] == 'O') {
            if (player1.mark == 'O') {
                console.log(player1.name + " is the winner! criss");
            } else {
                console.log(player2.name + " is the winner!")
            }
        } 
        else if (board[0] == "X" && board[4] == "X" && board[8] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        // cross (/)
        else if (board[2] == "O" && board[4] == "O" && board[6] == "O") {
            if (player1.mark == "O") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        } 
        else if (board[2] == "X" && board[4] == "X" && board[6] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        
        else {
            console.log("It's a draw!");
        };

        return true;
    };


    //RESET BOARD
    function resetBoard() {
        board = [
            '', '', '',
            '', '', '',
            '', '', '',
        ];

        console.log("[" + board[0] + "  " + board[1] + "  " + board[2] + "]");
        console.log("[" + board[3] + "  " + board[4] + "  " + board[5] + "]");
        console.log("[" + board[6] + "  " + board[7] + "  " + board[8] + "]");
    };


    aiInput();
    aiInput();
    aiInput();

    console.log("");
    printBoard();

    //getWinner();
};

gameFlow(player1, ai, board);