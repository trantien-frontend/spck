const loginForm = document.querySelector("#login-form")
const inputEmail = loginForm.querySelector("#email-input")
const inputPassword = loginForm.querySelector("#password-input")

loginForm.addEventListener ("submit", checkEmailAndPassword)
function checkEmailAndPassword(event) {
    event.preventDefault();

    let checkInputData = true; 

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

    let isRegister = false
    let listUser = JSON.parse(localStorage.getItem("list-user"));
    
    if (listUser == null) {
        alert("User Doesnt exist")
    }

    // Loop qua từng phần tử trong danh sách
    for (let index = 0; index < listUser.length; index += 1) {
        let userIndex = listUser[index]; 
        if (userIndex.email === inputEmail.value &&
             userIndex.password === inputPassword.value) {
            isRegister = true
        }
    }

    if (isRegister) {
        location.href = "./index.html"
    } else {
        alert("Email hoặc password không đúng !!!")
    }
}