document.addEventListener("DOMContentLoaded", ()=>{

    showResume();

})


function showResume(){
    const main = document.querySelector("main");
    const resume = getResume();
    if(!resume){
        main.innerHTML = `<p class="empty">There is no products in your cart right now</p>`;
    }else{
        const itemsData = Object.entries(resume);
        for(let i = 1 ; i < itemsData.length; i++){
            const item = itemsData[i][1];
            console.log(item)
            main.innerHTML += `
            <article class="item">
                <img src="../resources/${item.img}"> 
                <p>${item.name}</p>
                <p>${item.quantity} x ${item.cost}€</p>
            </article>
            `
        }
        main.innerHTML += `<section><p class="total">Summary : ${itemsData[0][1]} €</p></section>`
    }
}


function getResume(){
    const cookies = (document.cookie).split(";");
    const cookie = cookies.filter(element =>{
        return element.includes("resume")
    })
    if(cookie.length == 0)return false;
    return JSON.parse(cookie[0].replace("resume=","")); // remove the string 'resume='
}

