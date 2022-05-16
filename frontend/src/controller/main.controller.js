const pages = [
    {
        html: "../src/views/home.html",
        script: "../src/controller/home.controller.js",
        loaded: false,
        section: document.getElementById("home-section")
    },
    {
        html: "../src/views/cardapio.html",
        script: "../src/controller/snacks.controller.js",
        loaded: false,
        section: document.getElementById("cardapio-section")
    },
    {
        html: "../src/views/pedidos.html",
        script: "../src/controller/pedidos.controller.js",
        loaded: false,
        section: document.getElementById("pedidos-section")
    }
] 

const buttonsHeader = Array.from(document.getElementsByClassName("btn"));
const btnHomeEl = document.getElementById("btn-home");
const btnCardapioEl = document.getElementById("btn-cardapio");
const btnPedidosEl = document.getElementById("btn-pedidos");


btnHomeEl.addEventListener("click", () => {
    loadPage(pages[0]);
    removeSelectionOfButtons();
    btnHomeEl.classList.add("selected")
});

btnCardapioEl.addEventListener("click", () => {
    loadPage(pages[1]);
    removeSelectionOfButtons();
    btnCardapioEl.classList.add("selected")
});

btnPedidosEl.addEventListener("click", () => {
    loadPage(pages[2]);
    removeSelectionOfButtons();
    btnPedidosEl.classList.add("selected")
});


function loadPage(page){
    hideSections();
    if(!page.loaded){
        fetch(page.html).then(response => response.text())
        .then(html => {
            page.section.innerHTML = html;
            let script = document.createElement('script');
            script.src = page.script;
            document.body.appendChild(script);
            page.loaded = true;
        })
    }
    page.section.style.display = "block"
}

function hideSections(){
    pages.forEach(page => {
        page.section.style.display = 'none'
    })
}

function removeSelectionOfButtons(){
    buttonsHeader.forEach(btn => {
        btn.classList.remove("selected")
    })
}