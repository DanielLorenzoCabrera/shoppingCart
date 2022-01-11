document.addEventListener("DOMContentLoaded", init)


function init(){
    getProducts().then(data => {
        console.log(data)
        const first = data[0];
        const main = document.querySelector("main");
        const img = `<img src='resources/${first.img}'>`;
        main.append(img)


    });
    
    


}




async function getProducts(){
    return fetch("./products.json").then(response => response.json());
}

function showProducts(products){

    products.forEach(product => {
        
    });
}


