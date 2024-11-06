function login() {
    var username = document.getElementById("username").value;

    if (username === "") {
        document.getElementById("message").textContent = "Please enter your name.";
        return;
    }

    var boxLogin = document.getElementById("boxlogin");
    boxLogin.classList.add("fade-out");

    sessionStorage.setItem("username", username);

    setTimeout(function() {
        document.getElementById("message").textContent = "Welcome to the game, " + username + "!";
        setTimeout(function() {
            window.location.href = "game.html";
        }, 2000);
    }, 1000);
}
