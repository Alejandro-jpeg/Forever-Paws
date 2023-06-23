const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to sign up.');
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

// passwordValidation.js

function validatePassword() {
    const passwordInput = document.getElementById('password-signup');
    const password = passwordInput.value;
    const passwordLength = password.length;
    const errorMessage = document.getElementById('passwordError');

    if (passwordLength < 8) {
        errorMessage.textContent = 'Password must be at least 8 characters long.';
    } else {
        errorMessage.textContent = '';
    }
}

const passwordInput = document.getElementById('password-signup');
passwordInput.addEventListener('input', validatePassword);