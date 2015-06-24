var userLogin = {
    username: "sabadogigante",
    pass: "12345"
}
var password = prompt("Howdy" + " " + userLogin.username + ", please input your password to login");
var passTries = 3

while (passTries > 0) {
    if (password === userLogin.pass) {
        alert("Welcome! You are now logged in")
        break;
    } else {
        passTries--
        prompt("Incorrect password; please enter again")
    }
}
while (passTries === 0) {
    alert("Incorrect password, that's too many times. Please try again later")
    break;
}