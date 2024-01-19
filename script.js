let navbar= document.querySelector('nav');
let menu_btn= document.querySelector('.btn-menu');

let logins= document.querySelectorAll('.login');
let loginSec= document.querySelector('.login_sec');

let signups= document.querySelectorAll('.signup');
let signupSec= document.querySelector('.signupSec');


menu_btn.onclick = () =>{
    navbar.classList.toggle('active');
    loginSec.classList.remove('active');
    signupSec.classList.remove('active');
}

logins.forEach(login => {
    login.onclick = () =>{
        loginSec.classList.toggle('active');
        navbar.classList.remove('active');
        signupSec.classList.remove('active');
    }
});

signups.forEach(signup => {
    signup.onclick = () =>{
        signupSec.classList.toggle('active');
        loginSec.classList.remove('active');
        navbar.classList.remove('active');
    }
});
