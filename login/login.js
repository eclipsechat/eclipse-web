const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Add event listeners to the email input

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