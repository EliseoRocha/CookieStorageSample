function setCookie(cookieName, cookieValue, daysTilExpire) {
    cookieValue = encodeURIComponent(cookieValue);
    let expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + daysTilExpire);
    let eDate = expireDate.toUTCString();
    document.cookie = `${cookieName}=${cookieValue};expires=${eDate}`;
}
function getCookieValue(cookieName) {
    let allCookies = document.cookie;
    if (allCookies == "") {
        return "";
    }
    console.log("Browser returns the following cookies: ");
    console.log(allCookies);
    let cookieAttributes = allCookies.split(",");
    for (let index = 0; index < cookieAttributes.length; index++) {
        let currAttr = cookieAttributes[index].trim();
        if (currAttr.startsWith(cookieName + "=")) {
            let equalPos = currAttr.indexOf("=");
            let currValue = currAttr.substr(equalPos + 1);
            return decodeURIComponent(currValue);
        }
    }
    return "";
}
class Product {
    constructor() {
    }
}
let p = new Product();
p.price = 9.99;
p.title = "Widget";
window.onload = function () {
    let cartButtons = document.querySelectorAll("div.product > p");
    for (let i = 0; i < cartButtons.length; i++) {
        cartButtons[i].onclick =
            addItem;
    }
};
function addItem() {
    console.log("Item added to cart!");
    let clickedParagraph = this;
    let prod = getProductFromForm(clickedParagraph);
    let title = clickedParagraph.getAttribute("data-title");
    console.log(title);
    let price = clickedParagraph.getAttribute("data-price");
    console.log(price);
    let prodStr = JSON.stringify(allProds);
    localStorage.setItem("cart", prodStr);
    updateCartNumber(allProds);
}
function saveProductToCart(allProds, prod) {
}
function getCartProduct() {
    let prodStr = localStorage.getItem("cart");
    let allProds = new Array();
    if (prodStr != null) {
        allProds = JSON.parse(prodStr);
    }
    return allProds;
}
