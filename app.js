let userscore = 0;
let comscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#your-score");
const comscorepara = document.querySelector("#com-score");


const gencomnumber = () =>{
    const option = ["rock","paper","scissors"];
    const ranindex = Math.floor(Math.random() * 3);
    return option[ranindex];
}

const showwinner = (userwin,userchoice,comchoice) => {
if(userwin){
    userscore++;
    userscorepara.innerText = userscore;
    // console.log("You Win")
    msg.innerText = `You Win! your ${userchoice} beats ${comchoice}`;
    msg.style.backgroundColor = "Green";
}else{
    comscore++;
    comscorepara.innerText = comscore;
    console.log("you Lose");
    msg.innerText = `You Lose ${comchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
}
}
const drowgame = () =>{
console.log("Game was Drow");
msg.innerText = "Game Was Draw";
msg.style.backgroundColor = "red";
}


const playgame = (userchoice) =>{
console.log("user choice =", userchoice);
const comchoice = gencomnumber();
// console.log("com choice =",comchoice);

if(userchoice === comchoice){
drowgame();
}else{
    let userwin = true;
    if(userchoice === "rock"){
        userwin = comchoice === "paper" ? false : true;
    }else if(userchoice === "paper"){
        userwin = comchoice === "scissors" ? false : true;
    }else{
        userwin = comchoice === "rock" ? false : true;
    };

    showwinner(userwin,userchoice,comchoice);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", ()  =>{
        console.log("choice was cliked");
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
});