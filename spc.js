let user_score = 0;
let computer_score =0;

let msg = document.querySelector("#msg");
 
const choices = document.querySelectorAll(".choice");
let you = document.querySelector("#you")
let computer = document.querySelector("#computer")
let score = document.querySelector("#you" ,"#computer")
msgcontainer =document.querySelector(".msg_container")

const show_winner = (user_win)=>{
    if(user_win){
        console.log ("you win ");
        msg.innerText ="you win"
        user_score++;
        you.innerText = user_score;
        
    msgcontainer.classList.remove("draw","rst" )
    msgcontainer.classList.remove("com" )
    msgcontainer.classList.add("u")
    
    }
    else{
        console.log("you lose")
        msg.innerText = "you loose"
        computer_score++;
        computer.innerText = computer_score;
      
    msgcontainer.classList.remove("u","rst" )
    msgcontainer.classList.remove( "draw")
    msgcontainer.classList.add("com")
   
    }


}

const gencomchoice = ()=> {
    const option = ["rock", "paper", "scissors"];
   const ranidx = Math.floor(Math.random()*3);
return option[ranidx]; 
}

const draw_game = ()=>{
    console.log("the game is draw")
    msg.innerText = "game draw"
    
} 

const playgame = (userchoice)=>{
    console.log("user choice =",  userchoice);
    const comchoice = gencomchoice();
    console.log("com computer = ",comchoice);
    if(userchoice === comchoice){
         draw_game();
         msgcontainer.classList.remove("u")
    msgcontainer.classList.remove("com","rst" )
    msgcontainer.classList.add("draw")
    
    }
    else{
        let user_win = true;
         if(userchoice === "rock") {  //rock rock me draw hoga aur rock scisor ko loose kar dega
             user_win = comchoice === "paper" ?  false : true ;
         }
         else if(userchoice === "paper") {
            user_win = comchoice === "scissors" ? false : true ;
         }
         else{
            user_win  = comchoice ==="rock" ? false : true ;  //scisor rock se harega.  scisor hi baki hai karke else me dale
         }
         show_winner(user_win);
        
    }

}



choices.forEach((choice) => {
 
    choice.addEventListener("click", () => { 
         const userchoice =choice.getAttribute("id");
       
        playgame(userchoice);      /// this is the first code   
        checkWin();
        
    });
});

const restartGame = () => {
    user_score = 0;
    computer_score = 0;
    you.innerText = 0;
    computer.innerText = 0;
    msg.innerText = "Play your move";
    msgcontainer.classList.remove("com" ,"u" , "draw")
    msgcontainer.classList.add("rst")
    
};



const checkWin = () => {
    if (user_score === 10) {
        alert("User wins the match!");
        restartGame();
    } else if (computer_score === 10) {
        alert("Computer wins the match!");
        restartGame();
    }
};





// win = ()=>{
//     if(you.innerText >9){
      
//      you.innerText=0 ;
//         computer.innerText=0;
//       alert("user win")}

//     if(computer_score >9){
//         you.innerText="0" ;
//         computer.innerText("0");
//     alert("computer win") }
// }

// a;lert uses

// win = ()=>{
//     if(user_score >9){
//         alert("user win")
//         user_score =0 ;
//         computer_score = 0;
//     }
//     if(computer_score >9){
//         alert("computer win")
//        computer_score = 0;
//        user_score =0 
//     }
// }

