const screens = document.querySelectorAll('.screen');
const hamburger = document.querySelector('.hamburger');
const sideMenu = document.getElementById("sideMenu");

function showScreen(screenId) {
  screens.forEach(screen => screen.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');

  if (screenId === 'dashboard' || screenId === 'profile') {
    hamburger.classList.add('visible');
  } else {
    hamburger.classList.remove('visible');
    sideMenu.classList.remove('open');
  }

  highlightNav(screenId);
}

function highlightNav(screenId) {
  document.querySelectorAll('.side-menu a').forEach(link => link.classList.remove('active-nav'));
  if (screenId === 'dashboard') document.getElementById('nav-dashboard').classList.add('active-nav');
  if (screenId === 'profile') document.getElementById('nav-profile').classList.add('active-nav');
}

hamburger.addEventListener('click', () => {
  const isOpen = sideMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

window.addEventListener('click', (e) => {
  if (!e.target.closest('.side-menu') && !e.target.closest('.hamburger')) {
    sideMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  }
});

document.getElementById('nav-dashboard').addEventListener('click', () => {
  showScreen('dashboard');
  sideMenu.classList.remove('open');
});

document.getElementById('nav-profile').addEventListener('click', () => {
  showScreen('profile');
  sideMenu.classList.remove('open');
});

document.getElementById('nav-logout').addEventListener('click', logout);
document.getElementById('logout-btn-1').addEventListener('click', logout);
document.getElementById('logout-btn-2').addEventListener('click', logout);

function logout() {
  if (confirm('Are you sure you want to log out?')) {
    showScreen('login-screen');
  }
}

document.getElementById('login-btn')?.addEventListener('click', (e) => {
  e.preventDefault();
  const user = document.getElementById('login-user').value.trim();
  const pass = document.getElementById('login-pass').value.trim();
  const userError = document.getElementById('user-error');
  const passError = document.getElementById('pass-error');

  // Clear previous error messages
  userError.textContent = '';
  passError.textContent = '';

  let valid = true;

  // Validate username or email
  if (!user) {
    userError.textContent = 'Username or email is required';
    valid = false;
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(user) && user.includes('@')) {
    userError.textContent = 'Invalid email format';
    valid = false;
  }

  // Validate password
  if (!pass) {
    passError.textContent = 'Password is required';
    valid = false;
  } else if (pass.length < 6) {
    passError.textContent = 'Password must be at least 6 characters';
    valid = false;
  }

  // If valid, redirect to dashboard
  if (valid) {
    window.location.href = 'dashboard.html';
  }
});

// Toggle password visibility
document.getElementById('toggle-pass')?.addEventListener('click', togglePasswordVisibility);
document.getElementById('toggle-pass')?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    togglePasswordVisibility();
  }
});

function togglePasswordVisibility() {
  const passInput = document.getElementById('login-pass');
  const icon = document.getElementById('toggle-pass');
  if (passInput.type === 'password') {
    passInput.type = 'text';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  } else {
    passInput.type = 'password';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  }
}