document.getElementById('bnt-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if (email === 'jsjakaria' && password === 'jsjakaria'){
       window.location.href = 'bank.html'
    }
    else{
        alert('Wrong Person ')
    }
// console.log(email, password)
    
})