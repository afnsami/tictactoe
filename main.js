

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
        [ 'O', '', 'O'],
        [ '', 'O', 'X'],
        [ 'X', '', 'O'],
    ];

let emptyBoardIndexes = []


//-----------------------------------


//Game Flow
function gameFlow(player1, player2, board) {

    console.log(player1.name + " vs. " + player2.name);
    console.log("");

    // Initial Board
    console.log("------(Initial board)------");
    console.log(board);
    console.log("");




    //Game moves
    console.log("------(Game starts)------");
    console.log("");
    
    function aiInput() { 
        let cordinate1 = Math.floor(Math.random() * 3);
        let cordinate2 = Math.floor(Math.random() * 3);

        if (board[cordinate1][cordinate2] == "") {
            console.log("(Empty!!!)");
            board[cordinate1][cordinate2] = 'X';
        } else {
            //WHAT TO DO IF INDEX IS NOT EMPTY
            console.log("(Not empty!!!)");
        }
    };



    //FIND EMPTY INDEXES

    for (i = 0; i<3; i++) {
        const emptyIndex = board[i].reduce((accumulator, current, index) => {
            
            if (current === '') {
                accumulator.push(index);
            }

            return accumulator;
        }, []);

        emptyBoardIndexes.push(emptyIndex);
    };


    
    function resetBoard() {
        if (getWinner() == true) {
            console.log(board);
            board = [];
            // console.log(board);
        };
    };

    //Winner
    function getWinner() {
        //horizontal top
        if (board[0][0] == 'O' && board[0][1] == 'O' && board[0][2] == "O") {
            if (player1.mark == "O") {
                console.log(player1.name + " is the winner! horizontal top");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        //horizontal middle
        else if (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O") {
            if (player1.mark == "O") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        //horizontal bottom
        else if (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O") {
            if (player1.mark == "O") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }


        //vertical left
        else if (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O") {
            if (player1.mark == "O") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        //vertical middle
        else if (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O") {
            if (player1.mark == "O") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        //vertical right
        else if (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O") {
            if (player1.mark == "O") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }

        //criss (\)
        else if (board[0][0] = 'O' && board[1][1] == 'O' && board[2][2] == 'O') {
            if (player1.mark == 'O') {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        } 
        else if (board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        // cross (/)
        else if (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O") {
            if (player1.mark == "O") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        } 
        else if (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        
        else {
            console.log("It's a draw!");
        }

        return true;
    };

    // aiInput();
    getWinner();
    console.log(board);

    
    console.log("------(Board after reset)------");
    console.log(board);
};

gameFlow(player1, ai, board);