const correctUser1 = "josh";
        const correctPass1 = "josh"; 
        const correctUser2 = "ADMIN";
        const correctPass2 = "PASSWORD";

        const form = document.querySelector('form');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        form.addEventListener('submit', function(event) {
            if (
                (usernameInput.value === correctUser1 && passwordInput.value === correctPass1) || 
                (usernameInput.value === correctUser2 && passwordInput.value === correctPass2)
            ) {
                alert("You are in! Welcome to the Municipality of General Trias!");

                usernameInput.setCustomValidity('');
                passwordInput.setCustomValidity('');
            } else {
                event.preventDefault();
                alert("You are not authorized to access this page. Please contact the administrator.");
                usernameInput.setCustomValidity("Please enter the correct username.");
                passwordInput.setCustomValidity("Please enter the correct password.");
                usernameInput.reportValidity();
            }
        });

        usernameInput.addEventListener('input', function() {
            usernameInput.setCustomValidity('');
        });

        passwordInput.addEventListener('input', function() {
            passwordInput.setCustomValidity('');
        });

        document.getElementById('show-password').addEventListener('change', function() {
            var passwordInput = document.getElementById('password');
            if (this.checked) {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        });