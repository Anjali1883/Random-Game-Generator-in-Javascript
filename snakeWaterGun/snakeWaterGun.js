let words= ["S", "W", "G"];

let point = 0;
while(true){
    let randomIdx= Math.floor(Math.random() *3);
    console.log(words[randomIdx]);
    let userInput= prompt("choose one between Snake, Water and Gun (S, W, G)");
    if(userInput.toUpperCase() === "S"){
        if(words[randomIdx] === "W"){
            point++;
            confirm("you won");
            confirm("i got "+ words[randomIdx]);
        }
        else if(words[randomIdx] === "G"){
            confirm("you lost");
            confirm("i got "+ words[randomIdx]);
        }
        else{
            confirm("let's try again");
            confirm("i got "+ words[randomIdx]);
        }

    }
    else if(userInput.toUpperCase() === "W"){
        if(words[randomIdx] === "S"){
            confirm("you lost");
            confirm("i got "+ words[randomIdx]);
        }
        else if(words[randomIdx] === "G"){
            point++;
            confirm("you won");
            confirm("i got "+ words[randomIdx]);
        }
        else{
            confirm("let's try again");
            confirm("i got "+ words[randomIdx]);
        }
    }
    else if(userInput.toUpperCase() === "G"){
        if(words[randomIdx] === "S"){
            confirm("you won");
            confirm("i got "+ words[randomIdx]);
        }
        else if(words[randomIdx] === "W"){
            point++;
            confirm("you lost");
            confirm("i got "+ words[randomIdx]);
        }
        else{
            confirm("let's try again");
            confirm("i got "+ words[randomIdx]);
        }
    }
    else{
        confirm("enter a valid choice");
    }
    let playAgain= confirm("play again?");

    if(!playAgain){
        confirm("you scored "+ point +" points");
        break;
    }
}