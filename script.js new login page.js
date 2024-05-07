// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting
  
  // Get the input values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // For demonstration purposes, let's just log the username and password
  console.log('Username:', username);
  console.log('Password:', password);

  // Display welcome message
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('welcomeMessage').classList.remove('hidden');
});
