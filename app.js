const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener("submit", function (e) {
    e.preventDefault();
    // is empty
    if (username.value === "") showError(username, "username is required!!")
    else showSuccess(username)

    if (email.value === "") showError(email, "email is required!!")
    else if (!ValidateEmail(email.value)) showError(email, "Email is not valid")
    else showSuccess(email)


    if (password.value === "") showError(password, "password is required!!")
    else showSuccess(password)
    if (password2.value === "") showError(password2, "password is required!!")
    else showSuccess(password2)

})




const showError = (input, msg) => {
    const formDiv = input.parentElement;
    // formDiv.classList.add("error");
    // or instead of this line you can directly write classsname
    formDiv.className = "form-control error"
    const small = formDiv.querySelector('small');
    small.innerText = msg;
}

const showSuccess = (input) => {
    const formDiv = input.parentElement;

    formDiv.classList.remove("error");
    formDiv.classList.add("success");


}


function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}
