const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const btnMakeLoginEl = document.getElementById("btn-make-login");

btnMakeLoginEl.addEventListener("click", async () => {

    const email = emailEl.value;
    const password = passwordEl.value;

    if (email == '' || password == '') {
        alert('email ou senha estao vazios');
    } else {

        const accessToken = await makeLogin(
            {
                username: email,
                password: password
            });

        if (accessToken) {
            setTokenAccess(accessToken)
            // preciso atualizar tudo orders, snacks
            window.location.reload();
        }

    }

})