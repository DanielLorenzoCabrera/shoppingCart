document.addEventListener("DOMContentLoaded", init)


function init(){ 
    showProducts();


    
}




async function getProducts(){
    const response = await fetch("./products.json");
    return response.json();
}

function showProducts(){

    const main = document.querySelector("main");
    const form = document.createElement("form");
    
    getProducts().then(data => {
        
        data.forEach(product =>{
            form.innerHTML += `
            <article class='item'>
            <figure> <img src='resources/${product.img}'> </figure>
            <section>
            <p>${product.name}</p>
            <p>${product.cost} €</p>
            </section>
            <p>${product.description}</p>
            <input type='number' min='0'>
            </article>
            `
        })
        form.innerHTML += ` <button class="process">Process<button>`;
        main.append(form);

    });
}


