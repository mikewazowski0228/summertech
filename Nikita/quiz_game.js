const ask = require('prompt-sync')();

var score = 0


var ans1 = ask("what is the color of the sky ")
if (ans1 === "blue"){
    console.log("correct")
    score = score+1
}
else{
    console.log("not right you idiot")
}

var ans2 = ask ("what is this coded in ")
if(ans2 === "JS"){
    console.log ("correct")
    score = score+1
}
else{
    console.log("dummy dummy dummy u r wrong again")
}


var ans3 = ask ("who is always on their phone ")
if(ans3 === "farrah"){
    console.log("correct")
    score = score+1
}
else if(answer === "Nikita"){
    console.log("how dare you dummy")
    console.log("but u r wrong idiot")
}
else{
    console.log("you are wrong hahahahahahh u suck")
}

console.log("your score is" , score)
