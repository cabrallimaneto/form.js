const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
e.preventDefault();

checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === "") {
        setErrorFor(username, "O nome do usuário é obrigatório");
    } else {
        setSuccessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Email inválido");
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "A senha é obrigatória");
    } else if(passwordValue.length < 7) {
        setErrorFor(password, "A senha deve ter no mínimo 7 caracteres");
    } else {
        setSuccessFor(password);
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "A confirmação da senha é obrigatória");
    } else if (passwordConfirmationValue !== passwordValue){
        setErrorFor(passwordConfirmation, "A confirmação da senha não confere");
    } else {
        setSuccessFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every(formControl => {
        return (formControl.className === "form-control success");
    });

    if (formIsValid) {
        console.log("O formulário foi 100% válido");
    }
}

function setErrorFor(input, message) {
        // returna o pai dessa div 
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //adicionando a mensagem de erro
    small.innerText = message;
    //adicionando a classe error
    formControl.className = "form-control error";
}

function setSuccessFor(input, message) {
        // returna o pai dessa div 
    const formControl = input.parentElement;
        //adicionando a mensagem de success
    formControl.className = "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }