const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const btnMakeLoginEl = document.getElementById("btn-make-login");

const btnSignUpEl = document.getElementById("btn-sign-up");
const btnShowLoginContainerEl = document.getElementById("btn-show-login-container");

const signUpContainerEl = document.getElementById("sign-up-container");
const loginContainerEl = document.getElementById("login-container");

btnMakeLoginEl.addEventListener("click", async () => {

    const email = emailEl.value;
    const password = passwordEl.value;

    if (email == '' || password == '') {
        alert('email ou senha estao vazios');
    } else {

        const objAccessToken = await makeLogin(
            {
                username: email,
                password: password
            });

        if (objAccessToken) {
            setTokenAccess(objAccessToken.access_token)
            setUsername(objAccessToken.username)
            setIsAdmin(objAccessToken.isAdmin)
            // preciso atualizar tudo orders, snacks
            window.location.reload();
        } else {
            showModal({
                title: "Login Failed",
                message: "check your email and your password",
                icon: "👁️👄👁️",
                fn: () => {
                    console.log("funcionou")
                }
            })
        }

    }
})

btnSignUpEl.addEventListener("click", () => {
    loginContainerEl.classList.add("hidden");
    signUpContainerEl.classList.remove("hidden");
})

btnShowLoginContainerEl.addEventListener("click", () => {
    signUpContainerEl.classList.add("hidden");
    loginContainerEl.classList.remove("hidden");
})