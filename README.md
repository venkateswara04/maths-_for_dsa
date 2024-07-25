# maths-_for_dsa
#In the project maths for DSA, the front end code for visualizing the topics of the DSA
#html_code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="background">
        <div class="container" id="authContainer">
            <h1>Maths for DSA</h1> <!-- Project title -->
            <div id="signInForm" class="form active">
                <input type="text" placeholder="Username" required>
                <input type="password" placeholder="Password" required>
                <button type="button" id="signInSubmit">Login</button>
                <button type="button" id="signUp">Sign Up</button>
                <button type="button" id="forgotPassword">Forgot Password?</button>
            </div>
        </div>

        <div class="container topics" id="topicsContainer" style="display: none;">
            <h2>DSA Topics</h2>
            <ul>
                <li>Arrays</li>
                <li>Linked Lists</li>
                <li>Stacks</li>
                <li>Queues</li>
                <li>Hash Tables</li>
                <li>Trees</li>
                <li>Graphs</li>
                <li>Sorting Algorithms</li>
                <li>Searching Algorithms</li>
                <li>Dynamic Programming</li>
            </ul>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
#style.css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.background {
    background: white;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
    max-width: 100%;
}

.container {
    display: flex;
    flex-direction: column;
}

.form {
    display: flex;
    flex-direction: column;
}

input[type="text"],
input[type="password"] {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #0056b3;
}

button#signUp {
    background-color: #28a745;
}

button#signUp:hover {
    background-color: #218838;
}

button#forgotPassword {
    background-color: #dc3545;
}

button#forgotPassword:hover {
    background-color: #c82333;
}
#script.javascript
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
            
            authContainer.style.display = 'none';
            topicsContainer.style.display = 'flex';
        }
    });

    signUpButton.addEventListener('click', () => {
       
        authContainer.style.display = 'none';
        topicsContainer.style.display = 'flex';
    });

    forgotPasswordButton.addEventListener('click', () => {
        alert('Forgot Password button clicked. You can add forgot password functionality here.');
    });
});
