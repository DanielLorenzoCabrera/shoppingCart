class Article {
    constructor(code, name, description, cost, img){
        this.code = code;
        this.name = name;
        this.description = description;
        this.cost = cost;
        this.img = img;
    } 
    
    getCode(){
        return this.code;
    }

    getName(){
        return this.name;
    }

    getDescription(){
        return this.description;
    }

    getCost(){
        return this.cost;
    }

    getImg(){
        return this.img;
    }
}


const products = [
    {
        "code" : "001",
        "name" : "Altavoces",
        "description" : "Altavoces Dolby 5.0",
        "cost" : "50",
        "img" : "ALTAVOCES.GIF"

    },
    {
        "code" : "002",
        "name" : "CD ROM",
        "description" : "Reproductor de CD de 2002",
        "cost" : "20",
        "img" : "CDROM.GIF"
    },
    {
        "code" : "003",
        "name" : "Disquetera",
        "description" : "Disquetera de los años 90",
        "cost" : "40",
        "img" : "DISQUETERA.GIF"
    },
    {
        "code" : "004",
        "name" : "DVD",
        "description" : "DVD con la saga de crepúsculo",
        "cost" : "80",
        "img" : "DVD.GIF"
    },
    {
        "code" : "004",
        "name" : "Fuente de alimentación",
        "description" : "Fuente de alimentación para el pc",
        "cost" : "15",
        "img" : "FUENTE.GIF"
    },{
        "code" : "005",
        "name" : "Disco duro",
        "description" : "Disco duro HDD de 250GB",
        "cost" : "30",
        "img" : "HD.GIF"
    },
    {
        "code" : "006",
        "name" : "Impresora",
        "description" : "Impresora de tinta negra",
        "cost" : "50",
        "img" : "IMPRESORA.GIF"
    },
    {
        "code" : "007",
        "name" : "Memoria interna",
        "description" : "Memoria de 500GB",
        "cost" : "50",
        "img" : "MEMORIA.GIF"
    },
    {
        "code" : "008",
        "name" : "Microfono",
        "description" : "Micrófono unidireccional",
        "cost" : "30",
        "img" : "MICRO.GIF"
    },
    {
        "code" : "009",
        "name" : "Procesador",
        "description" : "Procesador AMD",
        "cost" : "60",
        "img" : "MICROAMD.GIF"
    },
    {
        "code" : "011",
        "name" : "Modem",
        "description" : "Modem de movistar",
        "cost" : "40",
        "img" : "MODEM.GIF"
    },
    {
        "code" : "012",
        "name" : "Placa",
        "description" : "Placa base ordenador",
        "cost" : "50",
        "img" : "MODEMINTERNO.GIF"
    },
    {
        "code" : "013",
        "name" : "OrdenadorAPC",
        "description" : "Ordenador APC",
        "cost" : "100",
        "img" : "ORDENADOR1.GIF"
    }
    ,
    {
        "code" : "014",
        "name" : "Ordenador",
        "description" : "Ordenador del 98",
        "cost" : "120",
        "img" : "ORDENADOR2.GIF"
    },
    {
        "code" : "015",
        "name" : "Placa madre",
        "description" : "Placa madre",
        "cost" : "100",
        "img" : "PLACAMADRE.GIF"
    },
    {
        "code" : "016",
        "name" : "Raton",
        "description" : "Ratón de bola",
        "cost" : "20",
        "img" : "RATON.GIF"
    },
    {
        "code" : "017",
        "name" : "Scanner",
        "description" : "Scanner de 420p",
        "cost" : "80",
        "img" : "SCANNER.GIF"
    },
    {
        "code" : "018",
        "name" : "Teclado",
        "description" : "Teclado con todas las teclas",
        "cost" : "15",
        "img" : "TECLADO.GIF"
    },
    {
        "code" : "019",
        "name" : "Tarjeta gráfica",
        "description" : "Tarjeta gráfica",
        "cost" : "70",
        "img" : "TGRAFICAAGP.GIF"
    },
    {
        "code" : "020",
        "name" : "Tarjeta gráfica",
        "description" : "Tarjeta gráfica AGC",
        "cost" : "80",
        "img" : "TGRAFICAPCI.GIF"
    },
    {
        "code" : "021",
        "name" : "Tarjeta gráfica",
        "description" : "Tarjeta gráfica PCI",
        "cost" : "90",
        "img" : "TGRAFICAPCI.GIF"
    },
    {
        "code" : "022",
        "name" : "Tarjeta de red",
        "description" : "Tarjeta de red",
        "cost" : "80",
        "img" : "TRED.GIF"
    },
    {
        "code" : "023",
        "name" : "Procesador",
        "description" : "Procesador SCSI",
        "cost" : "50",
        "img" : "TSCSI.GIF"
    },
    {
        "code" : "024",
        "name" : "Tarjeta de sonido",
        "description" : "Tarjeta de sonido",
        "cost" : "60",
        "img" : "TSONIDO.GIF"
    },
    {
        "code" : "025",
        "name" : "Webcam",
        "description" : "Webcam 720p",
        "cost" : "100",
        "img" : "WEBCAM.GIF"
    }
];

const articleList = products.map(product =>{
    return new Article(product.code, product.name, product.description, product.cost, product.img);
})

document.addEventListener("DOMContentLoaded", ()=>{
    
    showProducts(); 
    const buy = document.querySelector(".buy");
    buy.addEventListener("click", processProducts)
    
});



function processProducts(){
    const resume = {
        total : 0
    };
    const items = document.querySelectorAll(".item");
    items.forEach(item =>{
        const quantityInput = (item.querySelector("input")).value;
        const quantity = quantityInput == "" || isNaN(parseFloat(quantityInput)) ? 0 : quantityInput;

        if(quantity > 0){
            resume[item.dataset.code] = {
                code : item.dataset.code,
                name : item.dataset.name,
                cost : item.dataset.cost,
                img : item.dataset.img,
                quantity : quantity
            }
            resume.total += (parseFloat(item.dataset.cost) * quantity);
        }

    })
    if(resume.total <= 0){
        alert("Debes seleccionar al menos un producto");
        return;
    }
    document.cookie = `resume=${JSON.stringify(resume)}; path=/; secure;`;
    location.replace("resume.html");
}


function showProducts(){
   
    const form = document.querySelector("form");

        articleList.forEach(product =>{
            form.innerHTML +=
            `
            <article class='item' data-code="${product.getCode()}" data-cost="${product.getCost()}" data-name="${product.getName()}" data-img="${product.getImg()}">
            <figure> <img src='../resources/${product.getImg()}'> </figure>
            <section>
            <p>${product.getName()}</p>
            <p>${product.getCost()} €</p>
            </section>
            <p>${product.getDescription()}</p>
            <input type='number' min='0' max="100" placeholder="0">
            </article>
            `
        })
}


