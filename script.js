let title = document.querySelector(".title")
let turn = "X"
let scoreO = 0
let scoreX = 0
let squares=[]
function newRound(){
    
    for(let i = 1 ; i<10 ; i++){
        document.getElementById("item"+i).innerHTML=""
        document.getElementById("item"+i).style.boxShadow = "";
        document.getElementById("item"+i).style.background = "";
        document.getElementById("item"+i).style.pointerEvents = "";
    }
}
function newGame(){
    location.reload()
}
function win(num1, num2, num3){
    title.innerHTML  = squares[num1]+" Winner"
    

    document.getElementById("item"+num1).style.boxShadow = "0 0 5px cyan, 0 0 25px cyan,0 0 50px cyan,0 0 100px cyan,0 0 200px cyan";
    document.getElementById("item"+num1).style.background = " cyan";
    document.getElementById("item"+num2).style.boxShadow = "0 0 5px cyan, 0 0 25px cyan,0 0 50px cyan,0 0 100px cyan,0 0 200px cyan";
    document.getElementById("item"+num2).style.background = " cyan";
    document.getElementById("item"+num3).style.boxShadow = "0 0 5px cyan, 0 0 25px cyan,0 0 50px cyan,0 0 100px cyan,0 0 200px cyan";
    document.getElementById("item"+num3).style.background = " cyan";
    for(let i = 1 ; i<10 ; i++){
        document.getElementById("item"+i).style.pointerEvents = "none";

    }

    // setInterval(function(){title.innerHTML +="."},1000);
    // setTimeout(function(){location.reload()},4000)
    if(squares[num1] ==="X"){
        scoreX.innerHTML=" "
        scoreX+=1
        document.querySelector("#scoreX").innerHTML=scoreX

    }else if (squares[num1] ==="O"){
        scoreO.innerHTML=" "
        scoreO+=1
        document.querySelector("#scoreO").innerHTML=scoreO
    }

    if(scoreO>scoreX ){
        document.querySelector(".scoreO").style.background="#6eff3e"
        document.querySelector(".scoreO").style.boxShadow ="#6eff3e"
        document.querySelector(".scoreX").style.background="#ff1867"
        document.querySelector(".scoreX").style.boxShadow ="#ff1867"
    }else if (scoreX>scoreO){
        document.querySelector(".scoreX").style.background="#6eff3e"
        document.querySelector(".scoreX").style.boxShadow="#6eff3e"
        document.querySelector(".scoreO").style.background="#ff1867"
        document.querySelector(".scoreO").style.boxShadow="#ff1867"

    }
}
function winner(){
    for(let i = 1 ; i<10 ; i++){
        squares[i] = document.getElementById("item" + i).innerHTML;
    }
    if(squares[1]==squares[2] && squares[2]==squares[3] && squares[3]!=""){
    win(1,2,3)
    }
    else if(squares[4]==squares[5] && squares[5]==squares[6] && squares[4]!=""){
        win(4,5,6)
    }
    else if(squares[7]==squares[8] && squares[8]==squares[9] && squares[7]!=""){
        win(7,8,9)
    }
    
    


    else if(squares[1]==squares[4] && squares[4]==squares[7] && squares[4]!=""){
        win(1,4,7)
    }
    else if(squares[2]==squares[5] && squares[5]==squares[8] && squares[8]!=""){
        win(2,5,8)
    }
    else if(squares[3]==squares[6] && squares[6]==squares[9] && squares[9]!=""){
        win(3,6,9)
    }


    else if(squares[1]==squares[5] && squares[5]==squares[9] && squares[1]!=""){
        win(1,5,9)
    }
    else if(squares[3]==squares[5] && squares[5]==squares[7] && squares[3]!=""){
        win(3,5,7)
    }

}

function game(id){
    let square = document.getElementById(id)
    if (turn === "X" && square.innerHTML==="") {
        square.innerHTML="O"
        turn="O"
        title.innerHTML="X"
    }

    else if(turn === "O" && square.innerHTML===""){
        square.innerHTML ="X"
        turn= "X"
        title.innerHTML="O"
    }
    winner()
}