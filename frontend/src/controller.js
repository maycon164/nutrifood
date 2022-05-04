const contPratoEl = document.getElementById("cont-pratos");
const dropDownCategoryEl = document.getElementById("dropdown");

//ao carregar a página
window.onload = function(){
    getPratos();
}

function getPratos(){
    const pratos = [
    {
        "nome":"Batata",
        "preco": 10,
        "tipo": "lanche",
        "status": "disponivel"
    },

    {
        "nome":"Macarrão",
        "preco": 6,
        "tipo": "massa",
        "status": "disponivel"
    },
    {
        "nome":"Hamburguer",
        "preco": 15,
        "tipo": "lanche",
        "status": "disponivel"
    },
    {
        "nome":"Gelatina",
        "tipo":"sobremesa",
        "preco": 10,
        "status": "disponivel"
    },
    {
        "nome":"lasanha",
        "preco": 10,
        "tipo": "massa",
        "status": "disponivel"
    },

    {
        "nome":"Suco de Laranha",
        "preco": 22.87,
        "tipo": "bebida",
        "status": "disponivel"
    },
    {
        "nome":"Hot Dog",
        "preco": 7.99,
        "tipo": "lanche",
        "status": "disponivel"
    },
    {
        "nome":"Refrigerante",
        "tipo":"bebida",
        "preco": 6.99,
        "status": "disponivel"
    }
]
    pratos.forEach(prato => {
        let pratoElement = createElementPrato(prato);
        contPratoEl.insertAdjacentHTML('beforeend', pratoElement);
    });
}

function createElementPrato({nome, tipo, preco}){
    let pratoElement =  `                
        <div class="group relative">
            <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img src="./src/images/no-available.png" class="w-full h-full object-center object-cover lg:w-full lg:h-full">
        </div>
        <div class="mt-4 flex justify-between">
        <div>
            <h3 class="text-sm text-gray-700">
            <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${nome}
            </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">${tipo}</p>
        </div>
        <p class="text-sm font-medium text-gray-900">R$${preco}</p>
        </div>
    </div>
  `;
    return pratoElement;
}

function showDropDown(){

    dropDownCategoryEl.classList.toggle("hidden");
}