
async function getAllSnacks(category = "") {
    return await fetch(`http://localhost:3000/snacks/${category}`).then(response => response.json());
}

async function getAllOrders() {
    return await fetch('http://localhost:3000/orders').then(response => response.json());
}

async function getAllOrdersByUser() {
    return await fetch('http://localhost:3000/users/orders', {
        method: "GET",
        headers: {

            "Authorization": `Bearer ${getTokenAccess()}`
        }
    })
        .then(response => response.json())
        .then(obj => obj.Orders);
}

async function getSnack(id) {
    return await fetch(`http://localhost:3000/snacks/snack/${id}`).then(response => response.json());
}

async function makeLogin(loginObject) {
    const objResponse = await fetch(`http://localhost:3000/auth/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginObject)
    })
        .then(response => response.json())

    if (objResponse.username) {
        return objResponse;
    }

    return null;
}


async function makeAOrder(orderObject) {
    return await fetch(`http://localhost:3000/orders`, {
        method: `POST`,
        headers: {
            "Authorization": `Bearer ${getTokenAccess()}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderObject)
    })
}

async function deleteSnack(id) {
    return await fetch(`http://localhost:3000/snacks/${id}`, {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${getTokenAccess()}`
        }
    })
        .then(response => response.json())
        .then(json => json.message)
}

async function updateSnack(id) {
    alert(`TODO UPDATE ${id}`)
}

async function insertNewSnackRequest(snack) {
    return await fetch("http://localhost:3000/snacks", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${getTokenAccess()}`
        },
        body: snack
    }).then(response => response.json())
        .then(json => json.message);
}

async function updateSnackRequest(snack) {
    const snackId = snack.get("id");

    return await fetch(`http://localhost:3000/snacks/${snackId}`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${getTokenAccess()}`,

        },
        body: snack
    }).then(response => response.json())
        .then(json => json.message);
}

function setTokenAccess(token) {
    localStorage.setItem("token", token);
}

function getTokenAccess() {
    const token = localStorage.getItem("token");
    return token;
}

function setUsername(username) {
    localStorage.setItem("name", username);
}
function getUsername() {
    return localStorage.getItem("name");
}

function setIsAdmin(isAdmin) {
    localStorage.setItem("isAdmin", isAdmin);
}
function getIsAdmin() {
    return (localStorage.getItem("isAdmin") == 'true') ? true : false;
}

function logout() {
    localStorage.clear();
    window.location.reload();
} 