function setCookie(cookieName, cookieValue, daysTilExpire) {
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
            return currValue;
        }
    }
    return "";
}
