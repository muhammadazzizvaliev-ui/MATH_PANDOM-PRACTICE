const inp = document.getElementById("inp");
const btn = document.getElementById("btn");

const result = document.getElementById("result");
const scoreText = document.getElementById("score");

let rnumber = Math.floor(Math.random() * 10) + 1;


btn.onclick = function(){

    let guess = Number(inp.value);

   

    if(guess === rnumber){
        result.textContent = "MOLODES!!!!!!";
        document.body.style.background = "green";

        
        rnumber = Math.floor(Math.random() * 10) + 1;
    }
    
    
    else{
        result.textContent = "u are lox ";
        document.body.style.background = "red";
    }

    inp.value = "";
}

