
async function getAllSnacks(category = "") {
    return await fetch(`http://localhost:3000/snack/${category}`).then(response => response.json());
}

async function getAllOrders() {
    return await fetch('http://localhost:3000/orders').then(response => response.json());
}

async function getSnack(id) {
    return await fetch(`http://localhost:3000/snack/snack/${id}`).then(response => response.json());
}

async function makeLogin(loginObject) {
    return await fetch(`http://localhost:3000/auth/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginObject)
    })
        .then(response => response.json())
        .then(obj => obj.access_token)
}


async function makeAOrder(orderObject) {
    return await fetch(`http://localhost:3000/orders`, {
        method: `POST`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderObject)
    })
}

async function deleteSnack(id) {
    return await fetch(`http://localhost:3000/snack/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(json => json.message)
}

async function updateSnack(id) {
    alert(`TODO UPDATE ${id}`)
}

async function insertNewSnackRequest(snack) {
    return await fetch("http://localhost:3000/snack", {
        method: "POST",
        body: snack
    }).then(response => response.json());
}

function setTokenAccess(token) {
    localStorage.setItem("token", token);
}

function getTokenAccess() {
    const token = localStorage.getItem("token");
    console.log(token);
    return token;
} 