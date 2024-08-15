const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const usernameInput = document.getElementById('username');

// Add event listeners to the email input

usernameInput.addEventListener('keyup', function () {
  const usernameValue = usernameInput.value;
  if (usernameValue.trim() === '') {
    const usernameLabel = document.querySelector(`label[for="${usernameInput.id}"]`);
    usernameLabel.style.display = 'none';
    usernameInput.classList.remove('error');
    return usernameInput.classList.remove('success');
  }
  const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
  const isValidUsername = usernameRegex.test(usernameValue);
  const isValidUsernameLength = usernameValue.length >= 3 && usernameValue.length <= 16;
  const isValidUsernameSpecialChar = /^[a-zA-Z0-9_-]+$/.test(usernameValue);
  if (isValidUsername && isValidUsernameLength && isValidUsernameSpecialChar) {
    usernameInput.classList.add('success');
    
    const usernameLabel = document.querySelector(`label[for="${usernameInput.id}"]`);
    usernameLabel.style.display = 'none';
  } else {
    usernameInput.classList.remove('success');
    usernameInput.classList.add('error');
    
    const usernameLabel = document.querySelector(`label[for="${usernameInput.id}"]`);
    usernameLabel.style.display = 'flex';
    if (!isValidUsernameLength) {
      // get the label by it's 'for' attribute and update its error message
      usernameLabel.textContent = 'Username should be between 3 and 16 characters long, and only contain alphanumeric characters, underscores, and hyphens.';
    } else if (!isValidUsernameSpecialChar) {
      // get the label by it's 'for' attribute and update its error message
      usernameLabel.textContent = 'Username should only contain alphanumeric characters, underscores, and hyphens.';
    }
  }
});

emailInput.addEventListener('keyup', function () {
  const emailValue = emailInput.value;

  // Validate email format, make sure it only has letters after '@' and '.'
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isValidEmail = emailRegex.test(emailValue);

  // Update email input validity and border color
  emailInput.classList.remove('error');
  emailInput.classList.remove('success');

  if (emailInput.value.trim() === '') {
    const emailLabel = document.querySelector(`label[for="${emailInput.id}"]`);
    emailLabel.style.display = 'none';
    return emailInput.classList.remove('success');
  } 

  if (!isValidEmail) {
    emailInput.classList.add('error');
    const emailLabel = document.querySelector(`label[for="${emailInput.id}"]`);
    emailLabel.style.display = 'flex';
    emailLabel.textContent = 'Please enter a valid email address.';
  } else {
    const emailLabel = document.querySelector(`label[for="${emailInput.id}"]`);
    emailLabel.style.display = 'none';
    emailInput.classList.add('success');    
  }
});

passwordInput.addEventListener('keyup', function () {
    if (passwordInput.value.trim() === '') {
        passwordInput.classList.remove('success');
        return passwordInput.classList.remove('error');
    } else {
        passwordInput.classList.add('success');
        passwordInput.classList.remove('error');
    }
});