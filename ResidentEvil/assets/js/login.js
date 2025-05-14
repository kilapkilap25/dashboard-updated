// Toggle password visibility
function togglePassword() {
  const passwordInput = document.getElementById('login-pass');
  const eyeIcon = document.getElementById('eye-icon');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text'; // Show password
    eyeIcon.classList.remove('fa-eye'); // Change icon
    eyeIcon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password'; // Hide password
    eyeIcon.classList.remove('fa-eye-slash'); // Change icon back
    eyeIcon.classList.add('fa-eye');
  }
}

// Validate login form
document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();

  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');
  const emailError = document.querySelector('#user-error');
  const passwordError = document.querySelector('#pass-error');

  let isValid = true;

  // Clear previous error messages
  emailError.textContent = '';
  passwordError.textContent = '';

  // Validate email
  if (!emailInput.value.trim()) {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailInput.value.trim())) {
    emailError.textContent = 'Invalid email format';
    isValid = false;
  }

  // Validate password
  if (!passwordInput.value.trim()) {
    passwordError.textContent = 'Password is required';
    isValid = false;
  } else if (passwordInput.value.trim().length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters';
    isValid = false;
  }

  // If valid, redirect to dashboard
  if (isValid) {
    window.location.href = 'dashboard.html';
  }
});

// Function to handle input changes and remove error messages
function clearErrorOnInput() {
  const userInput = document.getElementById('login-user');
  const passInput = document.getElementById('login-pass');
  const userError = document.getElementById('user-error');
  const passError = document.getElementById('pass-error');

  // Add event listeners to clear error messages when typing
  userInput.addEventListener('input', () => {
    userError.textContent = '';
  });

  passInput.addEventListener('input', () => {
    passError.textContent = '';
  });
}

// Call the function to attach event listeners
clearErrorOnInput();