

//PLAYER OBJECT CONSTRUCTOR
function Player(name, mark) {
    this.name = name;
    this.mark = mark;

    return {name, mark}
};

const player1 = new Player("Clark", "O");
const ai = new Player("A.I.", "X");
let isGameOngoing = false;

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


//-----------------------------------
let foundWinner = false;

const gameFlow = ((player1, player2, gameBoard) => {
    
    //GET AI INPUT
    function aiInput() { 

        let emptyIndexesArray = []; 

        const emptyIndex = gameBoard.board.reduce((accumulator, current, index) => {
            if (current === '') {
                accumulator.push(index);
            }
            return accumulator;
        }, []);

        emptyIndexesArray.push(emptyIndex);

        //GET RANDOM INDEX FROM THE EMPTY INDEXES ARRAY
        let coordinate = Math.floor(Math.random() * emptyIndexesArray[0].length);
        gameBoard.board[emptyIndexesArray[0][coordinate]] = 'X';

    };

    //GET WINNER
    function getWinner() {
        
        //horizontal top
        if (gameBoard.board[0] == 'O' && gameBoard.board[1] == 'O' && gameBoard.board[2] == "O") {

            if (player1.mark == "O") {
                result.innerHTML = `<span id="winner">${player1.name}</span> is the winner!`;
            } else {
                result.innerHTML = `<span id="winner">${player2.name}</span> is the winner!`;
            };

        }
        else if (gameBoard.board[0] == 'X' && gameBoard.board[1] == 'X' && gameBoard.board[2] == "X") {
            if (player2.mark == "X") {
                result.innerHTML = `<span id="winner">${player2.name}</span> is the winner!`;
            } else {
                result.innerHTML = `<span id="winner">${player1.name}</span> is the winner!`;
            }
        }
        //horizontal middle
        else if (gameBoard.board[3] == "O" && gameBoard.board[4] == "O" && gameBoard.board[5] == "O") {
            if (player1.mark == "O") {
                result.innerHTML = `<span id="winner">${player1.name}</span> is the winner!`;
            } else {
                result.innerHTML = `<span id="winner">${player2.name}</span> is the winner!`;
            }
        }
        else if (gameBoard.board[3] == "X" && gameBoard.board[4] == "X" && gameBoard.board[5] == "X") {
            if (player1.mark == "X") {
                result.innerHTML = `<span id="winner">${player2.name}</span> is the winner!`;
            } else {
                result.innerHTML = `<span id="winner">${player1.name}</span> is the winner!`;
            }
        }
        //horizontal bottom
        else if (gameBoard.board[6] == "O" && gameBoard.board[7] == "O" && gameBoard.board[8] == "O") {
            if (player1.mark == "O") {
                result.innerHTML = `<span id="winner">${player1.name}</span> is the winner!`;
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (gameBoard.board[6] == "X" && gameBoard.board[7] == "X" && gameBoard.board[8] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }


        //vertical left
        else if (gameBoard.board[0] == "O" && gameBoard.board[3] == "O" && gameBoard.board[6] == "O") {
            if (player1.mark == "O") {
                result.innerHTML = `<span id="winner">${player1.name}</span> is the winner!`;
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (gameBoard.board[0] == "X" && gameBoard.board[3] == "X" && gameBoard.board[6] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        //vertical middle
        else if (gameBoard.board[1] == "O" && gameBoard.board[4] == "O" && gameBoard.board[7] == "O") {
            if (player1.mark == "O") {
                result.innerHTML = `<span id="winner">${player1.name}</span> is the winner!`;
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (gameBoard.board[1] == "X" && gameBoard.board[4] == "X" && gameBoard.board[7] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        //vertical right
        else if (gameBoard.board[2] == "O" && gameBoard.board[5] == "O" && gameBoard.board[8] == "O") {
            if (player1.mark == "O") {
                result.innerHTML = `<span id="winner">${player1.name}</span> is the winner!`;
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        else if (gameBoard.board[2] == "X" && gameBoard.board[5] == "X" && gameBoard.board[8] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }

        //criss (\)
        else if (gameBoard.board[0] == 'O' && gameBoard.board[4] == 'O' && gameBoard.board[8] == 'O') {
            if (player1.mark == 'O') {
                result.innerHTML = `<span id="winner">${player1.name}</span> is the winner!`;
            } else {
                console.log(player2.name + " is the winner!")
            }
        } 
        else if (gameBoard.board[0] == "X" && gameBoard.board[4] == "X" && gameBoard.board[8] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        // cross (/)
        else if (gameBoard.board[2] == "O" && gameBoard.board[4] == "O" && gameBoard.board[6] == "O") {
            if (player1.mark == "O") {
                result.innerHTML = `<span id="winner">${player1.name}</span> is the winner!`;
            } else {
                console.log(player2.name + " is the winner!")
            }
        } 
        else if (gameBoard.board[2] == "X" && gameBoard.board[4] == "X" && gameBoard.board[6] == "X") {
            if (player1.mark == "X") {
                console.log(player1.name + " is the winner!");
            } else {
                console.log(player2.name + " is the winner!")
            }
        }
        
        else {
            console.log("It's a draw!");
        };
    };

    //RESET BOARD
    function resetBoard() {
        gameBoard.board = [
            '', '', '',
            '', '', '',
            '', '', '',
        ];
    };

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


    return { aiInput, getWinner, resetBoard, renderBoard };
    
})(player1, ai, gameBoard);

gameFlow.renderBoard();



//-----------------------------------



const displayController = (() => {
    
    // VARIABLES
    const mark = document.getElementById("mark");
    const nameInput = document.getElementById("nameInput");
    const matchInfo = document.getElementById("matchInfo");
    const result = document.getElementById("result");
    const boxes = document.querySelectorAll(".box");
    let startButton = document.getElementById("button");


    // START/RESTART BUTTON
    startButton.addEventListener("click", () => {

        // WHEN GAME HAS STARTED
        if (isGameOngoing == false) {

            isGameOngoing = true;
            console.log("is game ongoing?: " + isGameOngoing);

            button.textContent = "Restart";
            nameInput.placeholder = "User";
            mark.textContent = player1.mark;
            matchInfo.innerHTML = `${nameInput.placeholder} vs <span style="color: red">A.I.</span>`;

            
            // CLICK ON INPUT BOX
            boxes.forEach((box, index) => {
                box.addEventListener("click", (e) => {

                    // IF BOX IS NOT EMPTY
                    if (gameBoard.board[index] == 0) {

                        // IF GAME IS ONGOING
                        if (isGameOngoing == true) {     
                            
                            if (foundWinner == false) {
                                gameBoard.board[index] = "O";
                                gameFlow.renderBoard();
                            };

                            //DELAY AFTER USER'S INPUT
                            setTimeout(() => {
                                gameFlow.getWinner();

                                if (foundWinner == false) {
                                    gameFlow.aiInput();
                                    gameFlow.renderBoard();
                                }

                                gameFlow.getWinner();
                                gameFlow.renderBoard();

                            }, 500);

                        }
                    };

                });
            });

            
        // WHEN THE GAME HAS NOT STARTED
        } else {
            isGameOngoing = false;
            console.log(isGameOngoing);
            mark.textContent = "";
            result.textContent = "";
            button.textContent = "Start";
            matchInfo.textContent = "Click to start the game!";
            matchInfo.style.fontWeight = "normal";

            gameFlow.resetBoard();
            gameFlow.renderBoard();
        };
    });


})();