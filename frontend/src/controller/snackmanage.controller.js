const listOfSnacksManageEl = document.getElementById("list-of-snack-manage");
const inputImageSnackFormEl = document.getElementById("input-image-snack-form");
const snackImagePreview = document.getElementById("snack-image-preview");
const btnShowFormSnack = document.getElementById("show-form-snack");
const btnCancelFormNewSnack = document.getElementById("btn-cancel-snack");
const formNewSnackSection = document.getElementById("form-new-snack-section");
const tableSnacksSection = document.getElementById("table-snacks-section");
const formSnackEl = document.getElementById("form-snack");
const btnInsertNewSnackEl = document.getElementById("btn-insert-snack");


async function fillTableSnackManage(){
    const snacks = await getAllSnacks();
    listOfSnacksManageEl.innerText = "";
    snacks.forEach(snack => {
        const snackRow = createRowSnackManage(snack);
        listOfSnacksManageEl.insertAdjacentHTML("beforeend", snackRow);
    });
}

inputImageSnackFormEl.addEventListener("change", () => {
    
    if(inputImageSnackFormEl.files && inputImageSnackFormEl.files[0]){
        const imageReader = new FileReader();
        
        imageReader.onload = (image) => {
            snackImagePreview.src = image.target.result
        }

        imageReader.readAsDataURL(inputImageSnackFormEl.files[0])
    }
});


function createRowSnackManage(snack) {
    const rowElement = `
    <tr class="bg-white border-b">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            ${snack.id}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            ${snack.name}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            R$ ${snack.value}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            ${snack.category}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            ${snack.status}
        </td>
        <td class="text-sm text-gray-900 font-light whitespace-nowrap">
            <div class="flex space-x-2 justify-center">
                <button onclick="updateSnack(${snack.id})" type="button" class="inline-block px-4 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    EDIT 
                </button>
            </div>
        </td>
        <td class="text-sm text-gray-900 font-light whitespace-nowrap">
            <div class="flex space-x-2 justify-center">
                <button onclick="confirmDelete(${snack.id})" type="button" class="inline-block px-4 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    DELETE
                </button>
            </div>
        </td>
    </tr class="bg-white border-b">
    `
    return rowElement;
}

async function confirmDelete(id){
    const message = await deleteSnack(id);
    showModal({
    title: "Delete A Snack", 
    message, 
    icon: "[X - DELETE]", 
    fn: () => {
        fillTableSnackManage();
    }});

}

btnShowFormSnack.addEventListener("click", (event) => {
    formNewSnackSection.classList.remove("hidden");
    tableSnacksSection.classList.add("hidden");
});

btnCancelFormNewSnack.addEventListener("click", (event) => {
    tableSnacksSection.classList.remove("hidden");
    formNewSnackSection.classList.add("hidden");
});

btnInsertNewSnackEl.addEventListener("click", (event) => {
    event.preventDefault();
    insertNewSnack();
});

async function insertNewSnack(){
    const formData = new FormData(formSnackEl);
    formData.set("status", "available");

    const snackSaved = await insertNewSnackRequest(formData);
    if(snackSaved){
        showModal({
            title: 'Insert new snack',
            message: "Inserted sucessfully",
            icon: "[ I - INSERTED]",
            fn: () => {
                snackImagePreview.src = "";
                formSnackEl.reset();
                fillTableSnackManage();
                fillListOfSnacks();
                btnCancelFormNewSnack.click();
            }
        })

    }else{
        alert("não foi possivel inserir!!!");
    }
}


(() => {
    fillTableSnackManage();
})()