const listOfOrdersEl = document.getElementById("list-of-orders")

async function loadOrders() {
    const orders = await getAllOrdersByUser();
    listOfOrdersEl.innerText = "";
    orders.forEach(order => {
        const orderElement = createOrderView(order);
        listOfOrdersEl.insertAdjacentHTML("afterbegin", orderElement);
    });
}


function createOrderView({ id, totalValue, payment, createdAt, id_snack }) {
    return `
    <li>
        <div class="md:flex flex-start">
            
            <div class="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" class="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                </svg>
            </div>

            <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
            
                <div class="flex justify-between mb-4">
                
                    <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">
                        PEDIDO-ID#${id}
                    </a>
                    <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">
                        ${new Date(createdAt).toLocaleDateString()}
                    </a>
                
                </div>
                
                <h1 class="text-gray-700 mb-1 text-lg">
                    Lanche: ${id_snack} 
                </h1>

                <span class="text-gray-700">VALOR: R$ ${totalValue}</span>
                
                <p class="text-gray-700">PAGO VIA ${payment}</p>
                
                <p class="text-gray-700 mb-6">
                    ENTREGUE: PARA O ENDERECO E NUM DA CASA
                </p>
                
                <button onclick="seeMoreDatails()" type="button" class="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">VER MAIS DETALHES</button>
                <button type="button" class=" hidden inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">See demo</button>
            
            </div>

        </div>
    </li>
    
    `
}

function seeMoreDatails() {
    alert("AINDA NÃO IMPLEMENTADO")
}

(async () => {
    loadOrders();
})()