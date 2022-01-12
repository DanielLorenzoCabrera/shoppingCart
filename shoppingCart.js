document.addEventListener("DOMContentLoaded", init)


function init(){
    const main = document.querySelector("main");
    getProducts().then(data => {
        console.log(data)
        data.forEach(product =>{
            main.innerHTML += `
            <article class='item'>
            <img src='resources/${product.img}'>
            <p>${product.name}</p>
            <p>${product.cost} €</p>
            <input type='number' min='0'>
            </article>
            `
        })

       
        /*
        const first = data[2];
        const img = `<img src='resources/${first.img}'>`;
        main.innerHTML = img;
*/

    });

    

}




async function getProducts(){
    return fetch("./products.json").then(response => response.json());
}

function showProducts(products){

    products.forEach(product => {
        
    });
}


