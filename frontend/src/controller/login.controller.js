const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const btnMakeLoginEl = document.getElementById("btn-make-login");

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