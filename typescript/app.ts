window.onload = function(){
    //find all "Add to Cart" links
    let cartButtons =
    document.querySelectorAll("div.product > p");

    for(let i = 0; i < cartButtons.length; i++){
        (<HTMLElement>cartButtons[i]).onclick = 
            addItem;
    }    
}

function addItem(){
    console.log("Item added to cart!");
    let clickedParagraph = <HTMLElement>this;
    let prod = getProductFromForm(clickedParagraph);

    let title = clickedParagraph.getAttribute("data-title");
    console.log(title);
    
    let price = clickedParagraph.getAttribute("data-price");
    console.log(price);

    //save data to web storage
    let prodStr = JSON.stringify(allProds);
    localStorage.setItem("cart", prodStr);

    //saveProductToCart(allProds, prod);

    updateCartNumber(allProds);
}

function saveProductToCart(allProds: Product[], prod: Product){

}

/**
 * Gets all the prods from the cart cookie
 * Return empty array if no cookie present
 */
function getCartProduct():Array<Product>{
    //let prodStr = getCookieValue(cartCookieName);
    let prodStr = localStorage.getItem("cart");
    let allProds = new Array<Product>();

    //if no cart cookie
    if(prodStr != null){
        //convert cookie string into Product array
        allProds = JSON.parse(prodStr);
    }

    return allProds;
}