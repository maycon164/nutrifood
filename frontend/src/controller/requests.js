
async function getAllSnacks(category=""){
    return await fetch(`http://localhost:3000/snack/${category}`).then(response => response.json());
}