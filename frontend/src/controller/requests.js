
async function getAllSnacks(category = "") {
    return await fetch(`http://localhost:3000/snacks/${category}`).then(response => response.json());
}

async function getAllOrders() {
    return await fetch('http://localhost:3000/orders').then(response => response.json());
}

async function getAllOrdersByUser() {
    const userAndOrder = await fetch('http://localhost:3000/users/orders', {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${getTokenAccess()}`
        }
    })
        .then(response => response.json());
    return userAndOrder.order
}

async function getOrderById(id) {
    const order = await fetch(`http://localhost:3000/orders/${id}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${getTokenAccess()}`
        }
    }).then(response => response.json());
    return order;
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

function addToCart(snack) {


    if (verifyIfItemIsAlreadyOnTheCart(snack.id)) {
        return { message: 'Esse Item já está no carrinho!' }

    } else {
        let cartItems = getCartItems();
        cartItems.push(snack);
        updateCartItems(cartItems);
        return { message: 'Item adicionado ao carrinho!' }
    }

}

function getCartItems() {
    if (!localStorage.getItem("cartItems")) {
        localStorage.setItem("cartItems", JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem("cartItems"));
}

function updateCartItems(cartItems) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function verifyIfItemIsAlreadyOnTheCart(id) {
    let cartItems = getCartItems();

    if (cartItems.length == 0) {
        return false;
    } else {
        let result = cartItems.filter(item => item.id == id);
        return result[0] == undefined ? false : true;
    }
}  
