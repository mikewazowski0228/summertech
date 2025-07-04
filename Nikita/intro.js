const nikita = require('prompt-sync')();
var email = nikita('enter email: ')
var password = nikita("enter password")

if(email){
    console.log("you've entered your email! it's", email)
}