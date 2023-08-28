const container=document.createElement('div');
const login=document.createElement('div');
const signin=document.createElement('div');
const signinNow=document.createElement('div');
const h1=document.createElement('h1');
const h3=document.createElement('h3');
const form=document.createElement('form');
const label1=document.createElement('label');
const email=document.createElement('input');
const label2=document.createElement('label');
const pass=document.createElement('input');
const label3=document.createElement('label');
const confirmPass=document.createElement('input');
const submit=document.createElement('button');

container.className='container';
login.className='login__container';
signin.className='login__signin';
signinNow.className='login__signin-now';
email.className='input-field';
pass.className='input-field';
confirmPass.className='input-field';
submit.className='filled-btn';

email.nodeType='email';
pass.nodeType='password';
confirmPass.nodeType='cPassword';

email.placeholder='Email';
pass.placeholder='Password';
confirmPass.placeholder='Confirm Password'

submit.id='submit-btn';
pass.id='pass';
confirmPass.id='cpass';

h1.innerText='Sign up Now!';
h3.innerText='Enter your details';
label1.innerText='Email:';
label2.innerText='Password:';
label3.innerText='Confirm Password:';
submit.innerText='Submit';

label1.appendChild(email);
label2.appendChild(pass);
label3.appendChild(confirmPass);
form.appendChild(label1);
form.appendChild(label2);
form.appendChild(label3);
form.appendChild(submit);
signinNow.appendChild(h1);
signinNow.appendChild(h3);
signinNow.appendChild(form);
signin.appendChild(signinNow);
login.appendChild(signin);
container.appendChild(login);
document.body.appendChild(container);
const pa=document.createElement('p');
label3.appendChild(pa);

let s=document.getElementById('submit-btn');
s.addEventListener('click', () => {
    if (pass.value !== confirmPass.value) { 
        pa.innerText="Password and Confirm Password do not match!";
        pa.style.color='red';
    } else{
        window.location.href = 'quotes.html';
    }
});