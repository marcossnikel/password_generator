const slider = document.querySelector('#slider');
const button = document.querySelector('#button');

const passwordSize = document.querySelector('#value');
const password = document.querySelector('#password');

const containerPassword = document.querySelector('#container-password');

const charset = "abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$$%";
let newPassword = "";



passwordSize.innerHTML = slider.value;

slider.oninput = function(){
    passwordSize.innerHTML = this.value;
}   


function generatePassword(){
    
let pass = "";

for(let i = 0 , charsetLen = charset.length; i < slider.value ; ++i){
    pass += charset.charAt(Math.floor(Math.random() * charsetLen));
}

containerPassword.classList.remove("hide");
password.innerHTML = pass;
newPassword = pass;
}


function copyPassword(){
    navigator.clipboard.writeText(newPassword)
}




