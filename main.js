

// VARIABLES
let isGameOngoing = false;
let foundWinner = false;

// PLAYER OBJECT CONSTRUCTOR
function Player(name, mark) {
    this.name = name;
    this.mark = mark;

    return {name, mark}
};

let player1 = new Player("myName", '🟢');
const ai = new Player("A.I.", '❌');


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

const gameFlow = ((player1, player2, gameBoard) => {
    
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
        gameBoard.board[emptyIndexesArray[0][coordinate]] = '❌';
    };

    function getWinner() {

        const nameInput = document.getElementById("nameInput").value;

        // HORIZONTAL
        if (gameBoard.board[0] == '🟢' && gameBoard.board[1] == '🟢' && gameBoard.board[2] == '🟢' || gameBoard.board[3] == '🟢' && gameBoard.board[4] == '🟢' && gameBoard.board[5] == '🟢' || gameBoard.board[6] == '🟢' && gameBoard.board[7] == '🟢' && gameBoard.board[8] == '🟢') {
            foundWinner = true;
            result.innerHTML = `<span id="p1winner">${nameInput}</span> is the winner!`;
        }
        else if (gameBoard.board[0] == '❌' && gameBoard.board[1] == '❌' && gameBoard.board[2] == '❌' || gameBoard.board[3] == '❌' && gameBoard.board[4] == '❌' && gameBoard.board[5] == '❌' || gameBoard.board[6] == '❌' && gameBoard.board[7] == '❌' && gameBoard.board[8] == '❌') {
            foundWinner = true;
            result.innerHTML = `<span id="p2winner">${player2.name}</span> is the winner!`;
        }

        // VERTICAL
        else if (gameBoard.board[0] == '🟢' && gameBoard.board[3] == '🟢' && gameBoard.board[6] == '🟢' || gameBoard.board[1] == '🟢' && gameBoard.board[4] == '🟢' && gameBoard.board[7] == '🟢' || gameBoard.board[2] == '🟢' && gameBoard.board[5] == '🟢' && gameBoard.board[8] == '🟢') {
            foundWinner = true;
            result.innerHTML = `<span id="p1winner">${nameInput}</span> is the winner!`;
        }
        else if (gameBoard.board[0] == '❌' && gameBoard.board[3] == '❌' && gameBoard.board[6] == '❌' || gameBoard.board[1] == '❌' && gameBoard.board[4] == '❌' && gameBoard.board[7] == '❌' || gameBoard.board[2] == '❌' && gameBoard.board[5] == '❌' && gameBoard.board[8] == '❌') {
            foundWinner = true;
            result.innerHTML = `<span id="p2winner">${player2.name}</span> is the winner!`;
        }

        //criss (\)
        else if (gameBoard.board[0] == '🟢' && gameBoard.board[4] == '🟢' && gameBoard.board[8] == '🟢' || gameBoard.board[2] == '🟢' && gameBoard.board[4] == '🟢' && gameBoard.board[6] == '🟢') {
            foundWinner = true;
            result.innerHTML = `<span id="p1winner">${nameInput}</span> is the winner!`;
        } 
        else if (gameBoard.board[0] == '❌' && gameBoard.board[4] == '❌' && gameBoard.board[8] == '❌' || gameBoard.board[2] == '❌' && gameBoard.board[4] == '❌' && gameBoard.board[6] == '❌') {
            foundWinner = true;
            result.innerHTML = `<span id="p2winner">${player2.name}</span> is the winner!`;
        }
    };

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

        foundWinner = false;

        // WHEN GAME HAS STARTED
        if (isGameOngoing == false) {

            isGameOngoing = true;
            button.textContent = "Restart";
            mark.textContent = player1.mark;
            matchInfo.innerHTML = `${nameInput.value} vs <span style="color: red">A.I.</span>`;
            
            if (nameInput.value == "") {
                nameInput.value = "User";
                matchInfo.innerHTML = `${nameInput.value} vs <span style="color: red">A.I.</span>`;
            };
            
            // CLICK ON INPUT BOX
            boxes.forEach((box, index) => {
                box.addEventListener("click", (e) => {

                    // IF BOX IS NOT EMPTY
                    if (gameBoard.board[index] == 0) {

                        // IF GAME IS ONGOING
                        if (isGameOngoing == true) {     
                            
                            if (foundWinner == false) {
                                gameBoard.board[index] = '🟢';
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

            gameFlow.resetBoard();
            gameFlow.renderBoard();
        };
    });

})();