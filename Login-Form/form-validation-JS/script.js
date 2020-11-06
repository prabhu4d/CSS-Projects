const form = document.getElementById('form-container');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password =  document.getElementById('password');
const password2 = document.getElementById('password2');
const submit = document.getElementById('submit');


submit.addEventListener('click', (e)=>{
    e.preventDefault();
    checkInputs();
})

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue == ''){
        setError(username, 'username can\'t blank');
    }
    else{
        setSuccess(username);
    }

    if(emailValue == ''){
        setError(email, 'email can\'t be blank');
    }else if(!isEmail(emailValue)){
        setError(email, 'Enter the valid email');
    }else{
        setSuccess(email);
    }

    if(passwordValue ==''){
        setError(password, 'password can\'t be blank');
    }else{
        setSuccess(password);
    }

    if(password2Value ==''){
        setError(password2, 'please retype the password');
    }else if(passwordValue != password2Value){
        setError(password2, 'enter the correct password');
    }else{
        setSuccess(password2);
    }
}

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}
function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
