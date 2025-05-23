const formRegister = document.querySelector("#register-form")
const inputUsername = document.querySelector("#username-input")
const inputEmail = document.querySelector("#email-input")
const inputPassword = document.querySelector("#password-input")

formRegister.addEventListener ("submit", handleRegisterSubmit);
function handleRegisterSubmit (event) {
    event.preventDefault();
    let checkInputData = true; 

    const username = inputUsername.value
    let usernameError = inputUsername.nextElementSibling
    if (username.length < 10) {
        usernameError.innerHTML = "username phải lớn hớn 10 ký tự !!!"
        checkInputData = false
    } else {
         usernameError.innerHTML = ""
    }

    const email = inputEmail.value
    let emailError = inputEmail.nextElementSibling
    if (email.length < 10) {
        emailError. innerHTML = "email phải lớn hớn 10 ký tự !!!"
        checkInputData = false
    } else {
        emailError.innerHTML = ""
    }

    const password = inputPassword.value
    let passwordError = inputPassword.nextElementSibling
    if (password.length < 10) {
        passwordError. innerHTML = "password phải lớn hớn 10 ký tự !!!"
        checkInputData = false
    } else {
        passwordError.innerHTML = ""
    }

    if (checkInputData == false) {
        console.log("Không chạy xuống phía dưới !!!");
        return
    }

    const user = {
        username: username,
        email: email,
        password: password
    }

    let listUser = JSON.parse(localStorage.getItem("list-user"));

    if (listUser == null) {
        console.log("invadid");
        listUser = [user];
    } else { 
        console.log("y");
        listUser.push(user);
    }

    localStorage.setItem("list-user", JSON.stringify(listUser));
    formRegister.reset();
}