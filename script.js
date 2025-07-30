(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("login-form");
        if (form) {
            form.addEventListener("submit", function (e) {
                e.preventDefault();

                const email = document.getElementById("email").value;
                const password = document.getElementById("password").value;

                console.log(`Email: ${email}`);
                console.log(`Password: ${password}`);

                const users = JSON.parse(localStorage.getItem("users")) || [];
                const user = users.find(
                    (u) => u.email === email && u.password === password
                );

                if (user) {
                    window.location.href = "../components/homePage.html";
                } else {
                    alert("Incorrect email or password!");
                }
            });
        }
    });
})();

(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("register-form");
        if (form) {
            form.addEventListener("submit", function (e) {
                e.preventDefault();

                const name = document.getElementById("name").value;
                const email = document.getElementById("email").value;
                const telefone = document.getElementById("telefone").value;
                const password = document.getElementById("password").value;
                const confirmPassword =
                    document.getElementById("confirm-password").value;

                if (password !== confirmPassword) {
                    alert("Passwords do not match!");
                    return;
                }

                console.log(`Name: ${name}`);
                console.log(`Email: ${email}`);
                console.log(`Telefone: ${telefone}`);
                console.log(`Password: ${password}`);
                console.log(`Confirm Password: ${confirmPassword}`);

                let users = JSON.parse(localStorage.getItem("users")) || [];

                const emailExists = users.some((user) => user.email === email);
                if (emailExists) {
                    alert("Email already registered!");
                    return;
                }

                users.push({ name, email, telefone, password });

                localStorage.setItem("users", JSON.stringify(users));

                alert("Registration successful!");
                window.location.href = "../login.html";
            });
        }
    });
})();

(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("change-password-form");
        if (form) {
            form.addEventListener("submit", function (e) {
                e.preventDefault();

                const email = document.getElementById("email").value;
                const newPassword =
                    document.getElementById("new-password").value;
                const confirmPassword =
                    document.getElementById("confirm-password").value;

                if (newPassword !== confirmPassword) {
                    alert("Passwords do not match!");
                    return;
                }

                let users = JSON.parse(localStorage.getItem("users")) || [];
                const userIndex = users.findIndex((u) => u.email === email);

                if (userIndex === -1) {
                    alert("Email not found!");
                    return;
                }

                users[userIndex].password = newPassword;
                localStorage.setItem("users", JSON.stringify(users));

                alert("Password changed successfully!");
                window.location.href = "../login.html";
            });
        }
    });
})();
