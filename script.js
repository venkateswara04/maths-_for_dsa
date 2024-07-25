document.addEventListener('DOMContentLoaded', () => {
    const signInSubmit = document.getElementById('signInSubmit');
    const signUpButton = document.getElementById('signUp');
    const forgotPasswordButton = document.getElementById('forgotPassword');
    const authContainer = document.getElementById('authContainer');
    const topicsContainer = document.getElementById('topicsContainer');

    signInSubmit.addEventListener('click', () => {
        const username = document.querySelector('#signInForm input[type="text"]').value;
        const password = document.querySelector('#signInForm input[type="password"]').value;

        if (username === '' || password === '') {
            alert('Please fill in both fields.');
        } else {
            // Hide the login form and show the topics container
            authContainer.style.display = 'none';
            topicsContainer.style.display = 'flex';
        }
    });

    signUpButton.addEventListener('click', () => {
        // Hide the login form and show the topics container
        authContainer.style.display = 'none';
        topicsContainer.style.display = 'flex';
    });

    forgotPasswordButton.addEventListener('click', () => {
        alert('Forgot Password button clicked. You can add forgot password functionality here.');
    });
});
