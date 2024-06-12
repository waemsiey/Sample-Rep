document.getElementById("SigninID").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    Swal.showLoading();

    setTimeout(function() {
        var storedUsername = localStorage.getItem('username');
        var storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            Swal.fire({
                title: 'Success!',
                text: 'Welcome Back ' + username + '!',
                icon: 'info',
                confirmButtonText: 'OK'
            });
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'invalid username or password',
                icon: 'warning',
                confirmButtonText: 'OK'});

            document.getElementById("passwordError").textContent = "Invalid username or password";
        }
    }, 2000);
});

document.getElementById("togglePassword").addEventListener("click", function() {
    var passwordInput = document.getElementById("password");
    var toggleIcon = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.classList.remove("bx-show");
        toggleIcon.classList.add("bx-hide");
        toggleIcon.title = "Hide Password";
    } else {
        passwordInput.type = "password";
        toggleIcon.classList.remove("bx-hide");
        toggleIcon.classList.add("bx-show");
        toggleIcon.title = "Show Password";
    }
});
