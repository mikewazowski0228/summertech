function getRandomNumber (max){
    return Math.floor(Math.random() * (max+1))
}

let name="nikita"

let randomNumber = getRandomNumber(10000);

var cheat = document.getElementById("cheat").innerHTML = `${name}`

function HighLow(guess){
    if (guess>randomNumber){
        var guessNum = document.getElementById('hey').innerHTML = "too high"
    }
    else if (guess<randomNumber){
        var guessNum = document.getElementById('hey').innerHTML = "too low"
    }
    else{
        var guessNum = document.getElementById('hey').innerHTML = "you got ittttt"
    }
}

function play(){
    var inputvalue = document.getElementById("input").value;
    HighLow(inputvalue)
}


