'use strict'

const passBox = document.querySelector('.pass')
const pass = document.querySelector('#password')
const passConfirm = document.querySelector('#password_confirm')
const passInputs = document.querySelectorAll("input[type='password']")
const allInputs = document.querySelectorAll('input[required]')
const confirmBtn = document.querySelector('button')
const legend = document.querySelector('legend')
const form = document.querySelector('form')

function checkPass() {
    if (pass.value !== passConfirm.value || pass.value === '' || passConfirm.value === '') {
        passBox.classList.add('invalid');
        passInputs.forEach(input => input.style.border='1px solid red')
        return false;
        
    } else {
        passBox.classList.remove('invalid')
        passInputs.forEach(input => input.style.border='1px solid green')
        return true
    }
}

pass.addEventListener('input', checkPass)
passConfirm.addEventListener('input', checkPass)
confirmBtn.addEventListener('click', function (e) {
    allInputs.forEach(input=> {
        if(input.value === '') {
            legend.classList.add('invalid')
            input.style.border='1px solid red'
        }
        else input.style.border='1px solid green'
    })
    if (!checkPass()) e.preventDefault(); 
})

form.addEventListener('submit', ()=>{
    legend.classList.remove('invalid'); 
    alert('Thank you! Your form successfully submitted!')
})