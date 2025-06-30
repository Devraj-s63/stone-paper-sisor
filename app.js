let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#computer-score");

const genComChoices = () =>{
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options [randIdx];
};

const drawGame = () =>{
    msg.innerText = " Game was draw.Play again ";
    msg.style.backgroundColor = " rgb(2, 2, 46)";
}
const showWinner =(userWin,userChoice,comChoice)=>{
    if(userWin){
        
        userScore++;
        userscorePara.innerText=userScore;
        msg.innerText = `you win! your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        computerScore++;
        compscorePara.innerText=computerScore;
        msg.innerText = `you lose. ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
};

const playGame =(userChoice) =>{
    //Genrate computer choices
    const comChoice = genComChoices();
    if(userChoice === comChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="Rock"){
            // scissor, Paper
            userWin = comChoice === "Paper" ? false : true;
        }
        else if(userChoice==="Paper"){
            // Rock scissor
        userWin = comChoice === "Scissors" ? false : true;
        }
        else{
            // paper rock
            userWin = comChoice === "Rock" ? false : true;
        }
        showWinner(userWin,userChoice,comChoice); 
        console.log(userChoice);
        console.log(comChoice);
    }
};

choices.forEach( (choice) =>{
choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame (userChoice);

});

})