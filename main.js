

//PLAYER OBJECT CONSTRUCTOR
function Player(name, mark) {
    this.name = name;
    this.mark = mark;

    return {name, mark}
};

const player1 = new Player("Clark", "O");
const ai = new Player("A.I.", "X");


//-----------------------------------


//GAME BOARD OBJECT
const gameBoard = (() => {

    board = [
            '', '', '',
            '', '', '',
            '', '', '',
        ];

    return { board };
})();


// PRINT CURRENT BOARD
function printBoard() {
    console.log("[" + board[0] + "  " + board[1] + "  " + board[2] + "]");
    console.log("[" + board[3] + "  " + board[4] + "  " + board[5] + "]");
    console.log("[" + board[6] + "  " + board[7] + "  " + board[8] + "]");
};


//-----------------------------------


//GAME FLOW
function gameFlow(player1, player2, board) {
    
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

        //GET RANDOM INDEX FROM THE EMPTY INDEXES ARRAY
        let coordinate = Math.floor(Math.random() * emptyIndexesArray[0].length);
        board[emptyIndexesArray[0][coordinate]] = '❌';
    };

    //GET WINNER
    function getWinner() {

        //horizontal top
        if (gameBoard.board[0] == 'O' && gameBoard.board[1] == 'O' && gameBoard.board[2] == "O") {
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
    
};



gameFlow(player1, ai, gameBoard.board);


//-----------------------------------

renderBoard();

const displayController = (() => {

    const box1 = document.getElementById("0");
    const box2 = document.getElementById("1");
    const box3 = document.getElementById("2");
    const box4 = document.getElementById("3");
    const box5 = document.getElementById("4");
    const box6 = document.getElementById("5");
    const box7 = document.getElementById("6");
    const box8 = document.getElementById("7");
    const box9 = document.getElementById("8");
    

    box1.addEventListener("click", (e) => {
        gameBoard.board[0] = "🟢";
        printBoard();
        renderBoard();
    });

    box2.addEventListener("click", (e) => {
        gameBoard.board[1] = "🟢";
        printBoard();
        renderBoard();
    });

    box3.addEventListener("click", (e) => {
        gameBoard.board[2] = "🟢";
        printBoard();
        renderBoard();
    });

    box4.addEventListener("click", (e) => {
        gameBoard.board[3] = "🟢";
        printBoard();
        renderBoard();
    });

    box5.addEventListener("click", (e) => {
        gameBoard.board[4] = "🟢";
        printBoard();
        renderBoard();
    });

    box6.addEventListener("click", (e) => {
        gameBoard.board[5] = "🟢";
        printBoard();
        renderBoard();
    });

    box7.addEventListener("click", (e) => {
        gameBoard.board[6] = "🟢";
        printBoard();
        renderBoard();
    });

    box8.addEventListener("click", (e) => {
        gameBoard.board[7] = "🟢";
        printBoard();
        renderBoard();
    });

    box9.addEventListener("click", (e) => {
        gameBoard.board[8] = "🟢";
        printBoard();
        renderBoard();
    });


})();



// const renderBoard = (() => {

//     document.getElementById("box1").textContent = gameBoard.board[0];
//     document.getElementById("box2").textContent = gameBoard.board[1];
//     document.getElementById("box3").textContent = gameBoard.board[2];

//     document.getElementById("box4").textContent = gameBoard.board[3];
//     document.getElementById("box5").textContent = gameBoard.board[4];
//     document.getElementById("box6").textContent = gameBoard.board[5];

//     document.getElementById("box7").textContent = gameBoard.board[6];
//     document.getElementById("box8").textContent = gameBoard.board[7];
//     document.getElementById("box9").textContent = gameBoard.board[8];

// })();

function renderBoard() {

    document.getElementById("0").textContent = gameBoard.board[0];
    document.getElementById("1").textContent = gameBoard.board[1];
    document.getElementById("2").textContent = gameBoard.board[2];

    document.getElementById("3").textContent = gameBoard.board[3];
    document.getElementById("4").textContent = gameBoard.board[4];
    document.getElementById("5").textContent = gameBoard.board[5];

    document.getElementById("6").textContent = gameBoard.board[6];
    document.getElementById("7").textContent = gameBoard.board[7];
    document.getElementById("8").textContent = gameBoard.board[8];

};