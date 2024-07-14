let boxes=document.querySelectorAll(".btns");
let msg=document.querySelector(".msgp");
let resetbtn=document.querySelector(".reset-btn");
let newgame=document.querySelector(".new-game");
let clickcontainer=document.querySelector(".msgContainerclick");
let container=document.querySelector(".msgContainer");
let inputO=true;
let drawcount=true;

let winCases=[ [0, 1, 2], 
[3, 4, 5],
[6, 7, 8], 


[0, 3, 6], 
[1, 4, 7], 
[2, 5, 8], 


[0, 4, 8], 
[2, 4, 6]  ]

const resetGame=()=>{
    inputO=true;
    enableBtns();
    for( let box of boxes){
        box.innerText="";
    }
    msg.classList.add("msgp");
    container.classList.replace("msgContainer","msgContainerclick");

}
resetbtn.addEventListener("click",()=>{
    resetGame();
})

let count=0;


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
            
        if(inputO){
            box.innerText="O";
            inputO=false;
            
        }
            else{
                box.innerText="X";
                inputO=true;
                
            }
            count++;
            box.disabled=true;
            
            checkWinner();
            if(count===9&&drawcount){
            console.log("draw");
            msg.innerText=`Its a draw`;
            msg.classList.remove("msgp");
            disableBtns();
            container.classList.replace("msgContainerclick","msgContainer");
                
            }
            
        
         });
})
const giveWinner=(winner)=>{
    
    msg.innerText=`The winner is ${winner}`;
    drawcount=false;
    msg.classList.remove("msgp");
    disableBtns();
    container.classList.replace("msgContainerclick","msgContainer");


}




const enableBtns=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
    console.log("enabled");
}

const disableBtns=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const checkWinner=()=>{
for(let wins of winCases){
   
    let pos1val=boxes[wins[0]].innerText;
    let pos2val=boxes[wins[1]].innerText;
    let pos3val=boxes[wins[2]].innerText; 
    if(pos1val !=""&& pos2val!=""&&pos3val!=""){
        if(pos1val==pos2val&&pos2val==pos3val){
            console.log("the winner is",pos1val);
            giveWinner(pos1val);
            // drawcount=false;
        }
    }   
}
} 


newgame.addEventListener("click",resetGame);



