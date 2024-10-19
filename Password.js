let textBox= document.querySelector("#t"); 
let passLength=10;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const digit="0123456789";
const symbol="}@~[>!<#$%=(+^]_&-*){";

const allChars=upperCase+lowerCase+digit+symbol;

function createPassword(){
    let password="";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += digit[Math.floor(Math.random()*digit.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];


    while(passLength>password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    textBox.value = password;

}

function copyPassword(){
    textBox.select(); 
    document.execCommand("copy");
}