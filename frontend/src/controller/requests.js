
async function getAllSnacks(category=""){
    return await fetch(`http://localhost:3000/snack/${category}`).then(response => response.json());
}

async function getAllOrders(){
    return await fetch('http://localhost:3000/orders').then(response => response.json());
}

async function getSnack(id){
    return await fetch(`http://localhost:3000/snack/snack/${id}`).then(response => response.json());
}

async function makeAOrder(orderObject){
    return await fetch(`http://localhost:3000/orders`, {
        method: `POST`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(orderObject) 
    })
}