var you;
var yourscore = 0;
var opponent;
var opponentscore = 0;
var choices = ["rock", "paper", "scissors"];
const clickSound = new Audio('click.mp3');
const victorySound = new Audio('victory.mp3');
const gameoverSound = new Audio('gameover.mp3');

window.onload = function () {
    for (let i = 0; i < 3; i++) {
        // img
        let choice = document.createElement('img');
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        document.getElementById('choices').append(choice);

        choice.addEventListener("click", () => {
            // your choice
            clickSound.play();
            you = choice.id;
            document.getElementById("your-choice").src = you + ".png";

            // random for opponent
            opponent = choices[Math.floor(Math.random() * (3 - 0) + 0)];
            document.getElementById("opponent-choice").src = opponent + ".png";
            if (you == opponent) {
                // match tie
                yourscore += 0;
                document.querySelector('#your-score').innerHTML = "Your Score: "+yourscore;
                opponentscore += 0;
                document.querySelector('#opponent-score').innerHTML = "Opponent Score: "+opponentscore;
            } else {
                if (you == "rock") {
                    if (opponent == "paper") {
                        gameoverSound.play();
                        opponentscore += 1;
                        document.querySelector('#opponent-score').innerHTML = "Opponent Score: "+opponentscore;
                    }
                    else if (opponent == "scissors") {
                        victorySound.play();
                        yourscore += 1;
                        document.querySelector('#your-score').innerHTML = "Your Score: "+yourscore;
                    }
                }

                else if (you == "scissors") {
                    if (opponent == "rock") {
                        gameoverSound.play();
                        opponentscore += 1;
                        document.querySelector('#opponent-score').innerHTML = "Opponent Score: "+opponentscore;
                    }
                    else if (opponent == "paper") {
                        victorySound.play();
                        yourscore += 1;
                        document.querySelector('#your-score').innerHTML = "Your Score: "+yourscore;
                    }
                }

                else if (you == "paper") {
                    if (opponent == "scissors") {
                        gameoverSound.play();
                        opponentscore += 1;
                        document.querySelector('#opponent-score').innerHTML = "Opponent Score: "+opponentscore;
                    }
                    else if (opponent == "rock") {
                        victorySound.play();
                        yourscore += 1;
                        document.querySelector('#your-score').innerHTML = "Your Score: "+yourscore;
                    }
                }
            }
        });
    }
}