document.getElementById("RegistrationID").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var username = document.getElementById("username").value;
    var passwordInput = document.getElementById("password");
    var cpasswordInput = document.getElementById("cpassword");
    var password = passwordInput.value;
    var cpassword = cpasswordInput.value;

    if (password !== cpassword) {
        cpasswordInput.parentNode.classList.add("error");
        document.getElementById("passwordError").textContent = "Passwords don't match";
        return;
    }

    if (password.length < 8 || !/\d/.test(password)) {
        passwordInput.parentNode.classList.add("error");
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters long and contain at least one number";
        return;
    } else {
        passwordInput.parentNode.classList.remove("error");
        document.getElementById("passwordError").textContent = "";
    }
    Swal.showLoading(); 

    setTimeout(function() {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        Swal.fire({
            title: 'Success!',
            text: 'You have successfully registered',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }, 2000); 
});


document.getElementById("togglePassword").addEventListener("click", function() {
    var passwordInput = document.getElementById("password");
    var toggleIcon = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.classList.remove("bx-hide");
        toggleIcon.classList.add("bx-show");
        toggleIcon.title = "Hide Password";
    } else {
        passwordInput.type = "password";
        toggleIcon.classList.remove("bx-show");
        toggleIcon.classList.add("bx-hide");
        toggleIcon.title = "Show Password";
    }
});
