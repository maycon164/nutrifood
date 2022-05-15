const contPratoEl = document.getElementById("cont-snacks");


async function getSnacks(){
    const snacks = fetch("http://localhost:3000/snack").then(response => response.json());
    
    snacks(snack => {
        createSnackElement(snack);        
        contPratoEl.insertAdjacentHTML("beforeend", snack);
    });

}


function createSnackElement({name, category, value, image}){
    let snackElement =  `                
        <div class="group relative">
            <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img src=${image} class="w-full h-full object-center object-cover lg:w-full lg:h-full">
        </div>
        <div class="mt-4 flex justify-between">
        <div>
            <h3 class="text-sm text-gray-700">
            <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${name}
            </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">${category}</p>
        </div>
        <p class="text-sm font-medium text-gray-900">R$${value}</p>
        </div>
    </div>
  `;
    return snackElement;
}
