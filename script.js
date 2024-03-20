let chance = 0
let player1 = document.querySelector(".player1").getElementsByTagName("div");
let player2 = document.querySelector(".player2").getElementsByTagName("div");
let score1 = 0
let score2 = 0
function oddOrEven(){
    if (chance<5){
        let num1 = Math.ceil(Math.random()*100)
        let num2 = Math.ceil(Math.random()*100)
        if (num1%2==0){
            score1+=1
            player1[chance].style.backgroundColor = "#b4d5df"
            // boxShadow = "inset  7px 7px 7px #d2d2d2, inset  -7px -7px 7px white"
        }else{
            player1[chance].style.backgroundColor = "#f4f4f4"
            // boxShadow = "7px 7px 7px #bebebe,-7px -7px 7px #f4f4f4"
        }
        if (num2%2==0){
            score2+=1
            player2[chance].style.backgroundColor = "#b4d5df"
            // boxShadow = "inset  7px 7px 7px #d2d2d2, inset  -7px -7px 7px white"
        }else{
            player2[chance].style.backgroundColor = "#f4f4f4"
            // boxShadow = "7px 7px 7px #bebebe,-7px -7px 7px #f4f4f4"
        }
    }
    else{
        if (score1>score2){
            document.getElementById("output").innerHTML="Player 1 won the match"
        }else if(score1<score2){
            document.getElementById("output").innerHTML="Player 2 won the match"
        }else{
            document.getElementById("output").innerHTML="Its a Draw"
        }
    }
    chance+=1   
}