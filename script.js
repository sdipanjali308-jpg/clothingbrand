function loginUser() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if(user === storedUser && pass === storedPass) {
        alert("Login Successful!");
        window.location.href = "home.html";
    } else {
        alert("Invalid Login!");
    }

    return false;
}



// FUNCTIONS
function signupUser() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    document.body.innerHTML = "<h2>Signup Successful! Redirecting...</h2>";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);

    return false;
}

function loginUser() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if(user === storedUser && pass === storedPass) {

        // ✅ VERY IMPORTANT (create login session)
        localStorage.setItem("loggedInUser", user);

        // ✅ redirect to home/index page
        window.location.href = "index.html";  // or home.html

    } else {
        alert("Invalid Login!");
    }

    return false;
}
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
// ADD TO CART
