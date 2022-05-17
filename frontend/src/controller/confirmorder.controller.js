const btnConfirmOrderModalEl = document.getElementById("btn-confirm-order");
const modalConfirmOrderEl = document.getElementById("confirm-order-modal");
const btnCloseConfirmOrderModalEl = document.getElementById("btn-close-modal")
const btnCancelOrderEl = document.getElementById("btn-cancel-order");

btnConfirmOrderModalEl.addEventListener("click", (event) => {
    event.preventDefault();
    
    modalConfirmOrderEl.classList.remove("hidden")
});

btnCloseConfirmOrderModalEl.addEventListener("click", () => {
    
    modalConfirmOrderEl.classList.add("hidden")
    btnPedidosEl.click();
})

btnCancelOrderEl.addEventListener("click", () => {
    btnHomeEl.click();
})

async function fillOrderConfirmationPage(){
    alert("FUNCIONOU")
}